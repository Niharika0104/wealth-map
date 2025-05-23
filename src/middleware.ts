import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// Define route patterns
const ROUTES = {
  SUPER_ADMIN: '/app/super-admin',
  COMPANY_ADMIN: '/app/company-admin',
  EMPLOYEE: '/app/employee',
  AUTH: '/auth',
  API: '/api',
  REGISTER: '/register',
  APP_ROOT: '/app',
} as const;

// Public API routes that don't require authentication
const PUBLIC_API_ROUTES = [
  {
    path: '/api/organizations',
    methods: ['POST'], // Only allow POST for organization registration
  },
  {
    path: '/api/invitations',
    methods: ['POST'],
  },
  {
    path: '/api/organizations/[id]/invitations',
    methods: ['POST'],
  },
  {
    path: '/api/organizations/[id]/status',
    methods: ['PATCH'],
  },
];

// Convert route patterns to regex
const PUBLIC_API_PATTERNS = PUBLIC_API_ROUTES.map(route => ({
  pattern: new RegExp(`^${route.path.replace(/\[id\]/g, '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}').replace(/\//g, '\\/')}$`),
  methods: route.methods,
}));

// Check if a path and method match any of the public API patterns
const isPublicApiRoute = (path: string, method: string) => {
  return PUBLIC_API_PATTERNS.some(({ pattern, methods }) => 
    pattern.test(path) && methods.includes(method)
  );
};

export async function middleware(request: NextRequest) {
  // const session = await auth();
  // console.log('Middleware - Session:', JSON.stringify(session, null, 2)); // Debug log

  // const isAuth = !!session?.user;
  // const isAuthPage = request.nextUrl.pathname.startsWith(ROUTES.AUTH);
  // const isApiRoute = request.nextUrl.pathname.startsWith(ROUTES.API);
  // const isRegisterPage = request.nextUrl.pathname.startsWith(ROUTES.REGISTER);
  // const isAppRoute = request.nextUrl.pathname.startsWith(ROUTES.APP_ROOT);
  // const isAppRoot = request.nextUrl.pathname === ROUTES.APP_ROOT;

  // console.log('Middleware - Path:', request.nextUrl.pathname); // Debug log
  // console.log('Middleware - Is Auth:', isAuth); // Debug log
  // console.log('Middleware - User ID:', session?.user?.id); // Debug log

  // // Handle API routes first
  // if (isApiRoute) {
  //   // Allow access to public API routes with specific methods
  //   if (isPublicApiRoute(request.nextUrl.pathname, request.method)) {
  //     return NextResponse.next();
  //   }

  //   // Require authentication for other API routes
  //   if (!isAuth || !session.user?.id) {
  //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  //   }
  //   return NextResponse.next();
  // }

  // // Handle auth and register pages
  // if (isAuthPage || isRegisterPage) {
  //   // If user is already authenticated, redirect to employee dashboard
  //   if (isAuth && session.user?.id) {
  //     return NextResponse.redirect(new URL(ROUTES.EMPLOYEE, request.url));
  //   }
  //   // Allow access to auth and register pages for unauthenticated users
  //   return NextResponse.next();
  // }

  // // Require authentication for all other routes
  // if (!isAuth || !session.user?.id) {
  //   console.log('Middleware - Redirecting to login - Missing auth or user ID'); // Debug log
  //   return NextResponse.redirect(new URL('/auth/login', request.url));
  // }

  // // Handle app routes
  // if (isAppRoute) {
  //   // Redirect /app to /app/employee
  //   if (isAppRoot) {
  //     return NextResponse.redirect(new URL(ROUTES.EMPLOYEE, request.url));
  //   }

  //   // Check if the user is trying to access a protected route
  //   const path = request.nextUrl.pathname;
  //   if (path.startsWith(ROUTES.SUPER_ADMIN) || path.startsWith(ROUTES.COMPANY_ADMIN)) {
  //     // Let the page components handle the role-based access control
  //     return NextResponse.next();
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except:
    // - Static files (_next/static, _next/image)
    // - Favicon
    // - Public files (public directory)
    // "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};