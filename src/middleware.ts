import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
 
export async function middleware(request: NextRequest) {
    console.log(`[Middleware] Processing request for: ${request.nextUrl.pathname}`);
    
    // // Performance optimization: Check if we should bypass session check for static assets
    // const shouldBypassAuth = [
    //     '/favicon.ico',
    //     '/_next',
    //     '/images',
    //     '/public',
    //     '/api/public'
    // ].some(path => request.nextUrl.pathname.startsWith(path));
    
    // if (shouldBypassAuth) {
    //     return NextResponse.next();
    // }
    
    // // We'll use the cached session if available to improve performance
    // // The actual session validation still happens server-side for security
    // const session = await auth.api.getSession({
    //     headers: await headers()
    // });
    
    // // Debug logging in development only
    // if (process.env.NODE_ENV === 'development') {
    //     console.log(`[Middleware] Auth status: ${session ? 'Authenticated' : 'Not authenticated'}`);
    //     if (session?.user) {
    //         console.log(`[Middleware] User: ${session.user.email}, Role: ${session.user.role || 'none'}`);
    //     }
    // }
    
    // // Public paths that don't require authentication
    // const publicPaths = ["/", "/auth", "/auth/2fa"];
    
    // // Check if current path is public
    // const isPublicPath = publicPaths.some(path => 
    //     request.nextUrl.pathname === path || 
    //     (path !== "/" && request.nextUrl.pathname.startsWith(path))
    // );    // Special auth routes that everyone can access even when logged in
    // const specialAuthPaths = ["/auth/2fa", "/auth/verify"];
    // const isSpecialAuthPath = specialAuthPaths.some(path => 
    //     request.nextUrl.pathname.startsWith(path)
    // );
    
    // // Special handling for the 2FA page - redirect to sign-in if accessed directly
    // // Note: We can only check cookies on the server, not sessionStorage, so we can't verify the auth_waiting_for_2fa flag
    // // The client-side guard component handles this more thoroughly
    
    // // If no session and trying to access protected routes
    // if (!session && !isPublicPath) {
    //     // Redirect to auth page with return URL and default to signin tab
    //     const returnUrl = encodeURIComponent(request.nextUrl.pathname);
    //     return NextResponse.redirect(new URL(`/auth?tab=signin&returnUrl=${returnUrl}`, request.url));
    // }
    
    // // If user is logged in but trying to access regular auth pages, redirect to dashboard
    // // But allow access to special auth paths like 2FA even when logged in
    // if (session && request.nextUrl.pathname.startsWith("/auth") && !isSpecialAuthPath) {
    //     return NextResponse.redirect(new URL("/app", request.url));
    // }
    
    // // Special handling for admin routes
    // if (request.nextUrl.pathname.startsWith("/admin")) {
    //     const user = session?.user;
    //     // Check if user has admin role (adjust based on your actual role structure)
    //     const isAdmin = user?.role === "super_admin" || user?.role === "admin";
        
    //     if (!isAdmin) {
    //         return NextResponse.redirect(new URL("/app", request.url));
    //     }
    // }
    
    return NextResponse.next();
}
 
export const config = {
  runtime: "nodejs",
  matcher: [
    '/app',
    '/app/:path*',
    // '/admin',
    // '/admin/:path*',
    // '/auth',
    // '/auth/:path*',
  ],
};