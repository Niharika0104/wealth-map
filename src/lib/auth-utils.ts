import { auth } from "@/lib/auth";

/**
 * Helper utility for handling permission checks in API routes
 * Provides a standardized way to:
 * 1. Check if a user is authenticated
 * 2. Check if a user has required permissions
 * 3. Handle public routes that don't need auth
 */
export async function checkPermission(permissionName?: string, options = { allowPublic: false }) {
  const session = await auth();
  
  // Case 1: No user session
  if (!session?.user) {
    return {
      isAuthorized: options.allowPublic,
      error: options.allowPublic ? null : "Unauthorized",
      session: null
    };
  }
  
  // Case 2: No permission required or public route
  if (!permissionName || options.allowPublic) {
    return {
      isAuthorized: true,
      error: null,
      session
    };
  }
  
  // Case 3: Permission required - SUPER_ADMIN always has access
  if (session.user.role === "SUPER_ADMIN") {
    return {
      isAuthorized: true,
      error: null,
      session
    };
  }
  
  // Case 4: Check specific permission
  const hasPermission = (() => {
    if (!session.user.permissions || !Array.isArray(session.user.permissions)) {
      return false;
    }
    
    // Direct match
    if (session.user.permissions.some(p => p.name === permissionName)) {
      return true;
    }
    
    // Wildcard match
    if (permissionName.includes(':')) {
      const [category] = permissionName.split(':');
      return session.user.permissions.some(p => 
        p.name === `${category}:*` || 
        (p.name.startsWith(`${category}:`) && p.name.endsWith('*'))
      );
    }
    
    return false;
  })();
  
  return {
    isAuthorized: hasPermission,
    error: hasPermission ? null : "Forbidden: Missing required permission",
    session
  };
}
