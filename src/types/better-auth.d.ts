// Type definitions for better-auth
// This helps to define the types for better-auth APIs that might not be fully documented

declare module 'better-auth/react' {
  // Define the AuthClient type with the correct properties
  export interface AuthClient {
    // Session management
    getSession: () => Promise<any>;
    useSession: () => {
      data: any;
      isPending: boolean;
      error: Error | null;
      mutate: () => Promise<any>;
    };

    // Auth methods
    signIn: (options: any) => Promise<any>;
    signUp: (options: any) => Promise<any>;
    signOut: (options?: any) => Promise<any>;
      // Two-factor authentication
    twoFactor: {
      // These are the methods that might be available
      enable?: (options: any) => Promise<any>;
      disable?: (options: any) => Promise<any>;
      setupTotp?: (options?: any) => Promise<any>;
      setupEmail?: (options?: any) => Promise<any>;
      setupSms?: (options?: any) => Promise<any>;
      validateCode?: (options: any) => Promise<any>;
      verify?: (options: any) => Promise<any>;
      confirm?: (options: any) => Promise<any>;
      getStatus?: () => Promise<any>;
      resendCode?: (options: any) => Promise<any>;
      sendNewCode?: (options: any) => Promise<any>;
      requestCode?: (options: any) => Promise<any>;
      requestNewCode?: (options: any) => Promise<any>;
    };
    
    // Event subscription
    subscribe: (listener: (event: { event: string; session: any }) => void) => () => void;
    
    // Error codes
    $ERROR_CODES: Record<string, string>;
  }

  export function createAuthClient(options: any): AuthClient;
}

// Define types for the plugins
declare module 'better-auth/client/plugins' {
  export function twoFactorClient(options?: any): any;
  export function passkeyClient(options?: any): any;
  export function adminClient(options?: any): any;
  export function organizationClient(options?: any): any;
  export function magicLinkClient(options?: any): any;
}

// Define types for the server-side
declare module 'better-auth' {
  export interface User {
    id: string;
    name?: string | null;
    email?: string;
    emailVerified?: Date | null;
    image?: string | null;
    role?: string;
    // Add other properties you know the User type has
  }
  
  export function betterAuth(options: any): any;
}

// Define types for the adapters
declare module 'better-auth/adapters/prisma' {
  export function prismaAdapter(prisma: any, options?: any): any;
}

// Define types for the plugins
declare module 'better-auth/plugins' {
  export function twoFactor(options?: any): any;
  export function admin(options?: any): any;
  export function organization(options?: any): any;
}

// Define types for access control
declare module 'better-auth/plugins/access' {
  export function createAccessControl<
    T extends Record<string, readonly string[]>
  >(statements: T): any;
}

// Define types for Next.js integration
declare module 'better-auth/next-js' {
  export function toNextJsHandler(auth: any): {
    GET: (req: Request) => Promise<Response>;
    POST: (req: Request) => Promise<Response>;
  };
}
