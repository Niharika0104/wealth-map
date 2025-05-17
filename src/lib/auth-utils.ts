"use client";

import { authClient } from "./auth-client";

/**
 * Check if a session requires two-factor authentication
 * This handles all the different property names that might be used
 */
export function sessionRequires2FA(session: any): boolean {
  if (!session) return false;
  
  const user = session.user;
  if (!user) return false;
  
  // Check various possible property names for 2FA requirement
  const needs2FA = !!(
    user.requiresTwoFactor ||
    user.requires2FA ||
    user.needsVerification ||
    user.twoFactorRequired ||
    (typeof window !== 'undefined' && sessionStorage.getItem('auth_waiting_for_2fa') === 'true')
  );
  
  return needs2FA;
}

/**
 * Check if a user has two-factor authentication enabled
 */
export function userHas2FAEnabled(user: any): boolean {
  if (!user) return false;
  
  // Check various possible property names for 2FA status
  return !!(
    user.twoFactorEnabled ||
    user.has2FA ||
    user.has2faEnabled
  );
}

/**
 * Check if the current session is fully authenticated
 * (logged in and passed 2FA if required)
 */
export async function isFullyAuthenticated(): Promise<boolean> {
  try {
    // Get the current session
    const session = await authClient.getSession();
    
    // If no session, not authenticated
    if (!session) return false;
    
    // Check if 2FA is required
    const needs2FA = sessionRequires2FA(session);
    
    // If 2FA is not required, user is fully authenticated
    if (!needs2FA) return true;
    
    // If 2FA is required, check if the user completed it
    // We use sessionStorage to track this
    return typeof window !== 'undefined' && 
           sessionStorage.getItem('auth_session_verified') === 'true';
  } catch (error) {
    console.error("Error checking authentication status:", error);
    return false;
  }
}

/**
 * Check if the current session is in the middle of a 2FA flow
 */
export function isInTwoFactorFlow(): boolean {
  return typeof window !== 'undefined' && 
    sessionStorage.getItem('auth_waiting_for_2fa') === 'true';
}

/**
 * Mark the current session as having completed 2FA
 */
export function markTwoFactorComplete(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('auth_waiting_for_2fa');
    sessionStorage.setItem('auth_session_verified', 'true');
  }
}

/**
 * Clear all authentication-related session storage
 */
export function clearAuthSessionStorage(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('auth_waiting_for_2fa');
    sessionStorage.removeItem('auth_email');
    sessionStorage.removeItem('auth_session_verified');
  }
}
