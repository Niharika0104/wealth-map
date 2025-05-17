// filepath: c:\Users\Rohith\projects\wealth\src\lib\auth-client.ts
import { createAuthClient } from "better-auth/react";
import {
    twoFactorClient,
    passkeyClient,
    adminClient,
    organizationClient,
    magicLinkClient
} from "better-auth/client/plugins";
import { ac, roles } from "./auth";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL as string,
    fetchOptions: {
        // Global fetch options for all auth requests
        onError: (ctx: { error: unknown }) => {
            if (ctx.error instanceof Error) {
                console.error("Auth error:", ctx.error.message);
            } else {
                console.error("Auth error:", ctx.error);
            }
        }
    },
    // Session management options
    session: {
        // Enable client-side session caching to reduce API calls
        clientCache: {
            enabled: true,
            // Store session information in browser storage for better persistence across tabs/windows
            storage: typeof window !== 'undefined' ? window.localStorage : null,
            // Refresh cached session data every 5 minutes to maintain freshness
            refreshInterval: 5 * 60 * 1000, // 5 minutes in milliseconds
        },
        // Reuse existing sessions rather than creating new ones
        reuseExistingSessions: true
    },
    plugins: [
        passkeyClient(),
        twoFactorClient({ 
            onTwoFactorRedirect: (context: { user?: { email?: string } }) => {
                // Store email to help with user experience on 2FA page
                if (typeof window !== 'undefined' && context.user?.email) {
                    sessionStorage.setItem('auth_email', context.user.email);
                    sessionStorage.setItem('auth_waiting_for_2fa', 'true');
                    
                    // Use replace instead of setting href directly to prevent adding to browser history
                    window.location.replace("/auth/2fa");
                }
            },
            // Configure resend options
            resend: {
                // Allow resending 2FA codes
                allowed: true,
                // Set cooldown period to prevent abuse
                cooldown: 30 // seconds
            }
        }),
        magicLinkClient(),
        adminClient({
            ac,
            roles
        }),
        organizationClient(),
    ],
});

// Track authentication state across page navigations
if (typeof window !== 'undefined') {
    // Listen for authentication state changes
    authClient.subscribe(({ event, session }) => {
        if (event === 'signIn') {
            // Store last sign in timestamp to help with session management
            localStorage.setItem('auth_last_signin', Date.now().toString());
        } else if (event === 'signOut') {
            // Clear auth-related data on sign out
            localStorage.removeItem('auth_last_signin');
            sessionStorage.removeItem('auth_waiting_for_2fa');
            sessionStorage.removeItem('auth_email');
            sessionStorage.removeItem('auth_session_verified');
        }
    });
}

// Debug function to help troubleshoot auth issues
export function debugAuth() {
    return {
        getSession: authClient.getSession,
        authClient,
        storage: typeof window !== 'undefined' ? {
            localStorage: Object.keys(localStorage).filter(key => key.startsWith('auth_')),
            sessionStorage: Object.keys(sessionStorage).filter(key => key.startsWith('auth_'))
        } : null
    };
}

export const {
    signIn,
    signOut,
    signUp,
    useSession,
    getSession,
    $ERROR_CODES
} = authClient;

export const refreshSession = async () => {
    try {
        const session = await authClient.getSession();
        return session;
    } catch (error) {
        console.error('Session refresh failed:', error);
        throw error;
    }
};
