import { betterAuth, User } from "better-auth";
import { twoFactor } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/generated/prisma";
import { admin } from "better-auth/plugins";
import { organization } from "better-auth/plugins";
import { createAccessControl } from "better-auth/plugins/access";

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

const prisma = new PrismaClient();
export const auth = betterAuth({
    appName: "Wealth Map",
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailVerification: {
        sendOnSignUp: true,
        requireEmailVerification: true,
        sendVerificationEmail: async ({ user, url, token }: { user: User, url: string, token: string }, request: any) => {
            // add your email sending logic here
        },
        sendResetPassword: async ({ user, url, token }: { user: User, url: string, token: string }, request: any) => {
            // add your email sending logic here
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
        expiresIn: 60 * 60,
        updateAge: 60 * 60,
        disableSessionRefresh: false,
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // Cache duration in seconds
        }
    },    plugins: [ 
        twoFactor(),
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
