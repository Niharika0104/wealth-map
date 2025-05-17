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
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL || "/api/auth",
    fetchOptions: {
        // Global fetch options for all auth requests
        onError: (ctx) => {
            console.error("Auth error:", ctx.error);
        }
    },    plugins: [
        passkeyClient(),        twoFactorClient({ 
            onTwoFactorRedirect: () => {
                // Store a flag in sessionStorage to indicate that we're in the middle of a 2FA flow
                if (typeof window !== 'undefined') {
                    sessionStorage.setItem('auth_waiting_for_2fa', 'true');
                    window.location.href = "/auth/2fa";
                }
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

// Debug function to help troubleshoot auth issues
export function debugAuth() {
    return {
        getSession: authClient.getSession,
        authClient,
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