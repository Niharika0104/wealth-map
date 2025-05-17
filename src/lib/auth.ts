// filepath: c:\Users\Rohith\projects\wealth\src\lib\auth.ts
import { betterAuth, User } from "better-auth";
import { twoFactor } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/generated/prisma";
import { admin } from "better-auth/plugins";
import { organization } from "better-auth/plugins";
import { createAccessControl } from "better-auth/plugins/access";
import { sendEmail, send2FACode } from "./email";

// Define permission statements
const statements = {
  property: ["view", "search", "create", "update", "delete", "export"],
  report: ["view", "create", "share", "schedule", "export"],
  employee: ["invite", "manage", "permissions"],
  client: ["view", "create", "update", "delete"],
  company: ["manage", "settings", "billing"],
  data: ["view", "export"]
} as const;

export const ac = createAccessControl(statements);

// Define roles with specific permissions
export const roles = {
  super_admin: ac.newRole({
    property: ["view", "search", "create", "update", "delete", "export"],
    report: ["view", "create", "share", "schedule", "export"],
    employee: ["invite", "manage", "permissions"],
    client: ["view", "create", "update", "delete"],
    company: ["manage", "settings", "billing"],
    data: ["view", "export"]
  }),
  
  company_admin: ac.newRole({
    property: ["view", "search", "create", "update", "export"],
    report: ["view", "create", "share", "schedule", "export"],
    employee: ["invite", "manage", "permissions"],
    client: ["view", "create", "update", "delete"],
    company: ["manage", "settings"],
    data: ["view", "export"]
  }),
  
  analyst: ac.newRole({
    property: ["view", "search"],
    report: ["view", "create", "share"],
    client: ["view"],
    data: ["view"]
  }),
  
  viewer: ac.newRole({
    property: ["view", "search"],
    report: ["view"],
    client: ["view"],
    data: ["view"]
  })
};

// Configure admin plugin
const adminPlugin = admin({
  panel: {
    enabled: true,
    route: "/admin",
    roles: ["super_admin", "company_admin"]
  },
  defaultRole: "viewer",
  adminRoles: ["super_admin", "company_admin"],
  ac,
  roles,
  roleAssignment: {
    "company_admin": ["super_admin"],
    "analyst": ["super_admin", "company_admin"],
    "viewer": ["super_admin", "company_admin"]
  },
  initialSetup: {
    superAdmin: process.env.SUPER_ADMIN_EMAIL || "admin@example.com" // Provide a default value
  }
});

// Configure organization plugin
const organizationPlugin = organization();

// Create a singleton PrismaClient instance to avoid multiple instances
// This helps prevent "PrismaClient is unable to run in this browser environment" errors
let prismaClientSingleton: PrismaClient;

export function getPrisma(): PrismaClient {
    if (typeof window === 'undefined') {
        // Server-side: we need to ensure we don't create multiple instances
        if (!prismaClientSingleton) {
            prismaClientSingleton = new PrismaClient();
        }
        return prismaClientSingleton;
    }
    
    // Client-side: just return an mock object since Prisma won't run in the browser anyway
    // This is just to avoid errors when auth is imported in client components
    return {} as PrismaClient;
}

export const prisma = getPrisma();

export const auth = betterAuth({
    appName: "Wealth Map",
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),    
    emailVerification: {
        sendOnSignUp: true,
        requireEmailVerification: true,
        sendVerificationEmail: async ({ user, url, token }: { user: User, url: string, token: string }, request: any) => {
            console.log(`Sending verification email to ${user.email} with URL ${url}`);
            
            // Use your preferred email service provider here
            // Example with a generic email service:
            try {
                if (!user.email) {
                    throw new Error('User email is required');
                }
                await sendEmail({
                    to: user.email,
                    subject: "Verify your Wealth Map account",
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2>Verify your email address</h2>
                            <p>Hello ${user.name},</p>
                            <p>Thank you for signing up for Wealth Map! Please verify your email address by clicking the button below:</p>
                            <p style="margin: 20px 0;">
                                <a href="${url}" style="background-color: #0070f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Verify Email Address</a>
                            </p>
                            <p>Or copy and paste this link in your browser:</p>
                            <p style="word-break: break-all;">${url}</p>
                            <p>This verification link will expire in 24 hours.</p>
                            <p>If you did not create this account, please ignore this email.</p>
                        </div>
                    `
                });
            } catch (error) {
                console.error("Failed to send verification email:", error);
            }
        },
        sendResetPassword: async ({ user, url, token }: { user: User, url: string, token: string }, request: any) => {
            console.log(`Sending password reset email to ${user.email} with URL ${url}`);
            
            // Use your preferred email service provider here
            try {
                if (!user.email) {
                    throw new Error('User email is required');
                }
                await sendEmail({
                    to: user.email,
                    subject: "Reset your Wealth Map password",
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2>Password Reset Request</h2>
                            <p>Hello ${user.name},</p>
                            <p>We received a request to reset your password. Click the button below to set a new password:</p>
                            <p style="margin: 20px 0;">
                                <a href="${url}" style="background-color: #0070f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Reset Password</a>
                            </p>
                            <p>Or copy and paste this link in your browser:</p>
                            <p style="word-break: break-all;">${url}</p>
                            <p>This reset link will expire in 1 hour.</p>
                            <p>If you did not request a password reset, please ignore this email.</p>
                        </div>
                    `
                });
            } catch (error) {
                console.error("Failed to send password reset email:", error);
            }
        }
    },
    emailAndPassword: {  
        enabled: true
    },
    socialProviders: { 
        google: { 
           clientId: process.env.GOOGLE_CLIENT_ID as string,
           clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }, 
    },
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google", "github"],
            allowUnlinkingAll: true,
        },
    },    
    session: {
        // Session duration - set to 30 days for better user experience
        expiresIn: 30 * 24 * 60 * 60, // 30 days in seconds
        
        // How frequently to refresh the session - every 4 hours
        updateAge: 4 * 60 * 60, // 4 hours in seconds
        
        // Keep session refresh enabled to maintain user sessions
        disableSessionRefresh: false,
        
        // Enable cookie-based session caching on the client side to reduce API calls
        cookieCache: {
            enabled: true,
            // Cache for 30 minutes to reduce API calls while maintaining security
            maxAge: 30 * 60, // 30 minutes in seconds
            // Paths that should bypass the cache and always check for fresh session
            skipPaths: [
                "/api/auth", 
                "/api/auth/session",
                "/api/auth/signin",
                "/api/auth/signout",
                "/api/auth/2fa",
                "/auth/2fa"
            ],
        },
        
        // Automatically extend session on activity
        autoExtend: true,
        
        // Track IP and user agent for security
        trackDeviceInfo: true
    },    
    plugins: [ 
        twoFactor({
            // Different types of 2FA support
            methods: {
                app: true,         // Authenticator apps (Google Authenticator, Authy, etc.)
                email: true,       // Email-based verification codes
                sms: false,        // SMS-based verification (requires SMS provider setup)
            },
            // Custom UI configurations
            ui: {
                // Route to redirect to after successful 2FA setup
                setupSuccessRedirect: '/app/settings/security',
                // Route to redirect to after 2FA verification
                verifySuccessRedirect: '/app',
                // Route for 2FA verification failures
                verifyFailRedirect: '/auth?tab=signin&error=2fa_failed'
            },
            // Custom function to send email verification codes
            sendEmailCode: async (params: { user: User; code: string }) => {
                const { user, code } = params;
                if (!user.email) return;
                try {
                    await send2FACode(
                        { 
                            email: user.email,
                            name: user.name || 'User'
                        }, 
                        code
                    );
                    console.log(`2FA email code sent to ${user.email}`);
                } catch (error) {
                    console.error('Failed to send 2FA email code:', error);
                    throw new Error('Failed to send verification code');
                }
            },
            // Enforce 2FA for specific user roles (optional)
            required: {
                roles: ['super_admin', 'admin'],
                // Grace period in seconds before 2FA becomes mandatory for required roles
                gracePeriod: 7 * 24 * 60 * 60, // 7 days
            },
            // Enable cookie persistence for 2FA verification
            // This prevents having to verify on every login from trusted devices
            persistent: {
                enabled: true,
                expiresIn: 30 * 24 * 60 * 60, // 30 days
            }
        }),
        adminPlugin,
        organizationPlugin
    ]
});

// Export type for session
type Session = typeof auth.$Infer.Session

// Helper function to check permissions
export function hasPermission(session: Session | null, permission: string): boolean {
  if (!session || !session.user || !(session.user as any).permissions) {
    return false;
  }
  
  const userPermissions = (session.user as any).permissions as string[];
  
  // Check for wildcard permission
  const resourceType = permission.split(':')[0];
  if (userPermissions.includes(`${resourceType}:*`)) {
    return true;
  }
  
  return userPermissions.includes(permission);
}
