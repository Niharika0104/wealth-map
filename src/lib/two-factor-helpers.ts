"use client";

import { authClient } from "./auth-client";

/**
 * Helper function to verify a two-factor authentication code
 * This tries multiple possible method names to maximize compatibility
 */
export async function verifyTwoFactorCode(
  code: string, 
  method: "totp" | "email" | "sms" = "totp",
  options: {
    onError?: (ctx: any) => void;
    onSuccess?: () => void;
  } = {}
): Promise<boolean> {
  try {
    // Create a type-safe reference to the twoFactor client that allows dynamic access
    const twoFactorClient = authClient.twoFactor as any;
    
    // Log available methods for debugging
    const availableMethods = Object.keys(twoFactorClient)
      .filter(key => typeof twoFactorClient[key] === 'function');
    console.log(`Available 2FA methods: ${availableMethods.join(', ')}`);
    
    // Try the enable method first
    if (typeof twoFactorClient.enable === 'function') {
      await twoFactorClient.enable({
        code,
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
    
    // Try validateCode method
    if (typeof twoFactorClient.validateCode === 'function') {
      await twoFactorClient.validateCode({
        code,
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
    
    // Try confirm method
    if (typeof twoFactorClient.confirm === 'function') {
      await twoFactorClient.confirm({
        code,
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
    
    // Fall back to verify method
    if (typeof twoFactorClient.verify === 'function') {
      await twoFactorClient.verify({
        code,
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
    
    // If no method is found, throw an error
    throw new Error("No suitable 2FA verification method found");
  } catch (error) {
    // Log the error and re-throw
    console.error("2FA verification error:", error);
    throw error;
  }
}

/**
 * Helper function to request a new two-factor authentication code
 */
export async function requestNewTwoFactorCode(
  method: "email" | "sms" = "email",
  options: {
    onError?: (ctx: any) => void;
    onSuccess?: () => void;
  } = {}
): Promise<boolean> {
  try {    // Create a type-safe reference to the twoFactor client that allows dynamic access
    const twoFactorClient = authClient.twoFactor as any;
    
    // Log available methods for debugging
    const availableMethods = Object.keys(twoFactorClient)
      .filter(key => typeof twoFactorClient[key] === 'function');
    console.log(`Available 2FA methods: ${availableMethods.join(', ')}`);
    
    // Try resendCode method first
    if (typeof twoFactorClient.resendCode === 'function') {
      await twoFactorClient.resendCode({
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
    
    // Try sendNewCode method
    if (typeof twoFactorClient.sendNewCode === 'function') {
      await twoFactorClient.sendNewCode({
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
    
    // Try requestCode method
    if (typeof twoFactorClient.requestCode === 'function') {
      await twoFactorClient.requestCode({
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
      // Try requestNewCode method - this may not exist in the type definitions
    // but we check at runtime to support possible API variations
    if (typeof twoFactorClient.requestNewCode === 'function') {
      await twoFactorClient.requestNewCode({
        method,
        fetchOptions: {
          onError: options.onError,
          onSuccess: options.onSuccess
        }
      });
      return true;
    }
    
    // If no method is found, throw an error
    throw new Error("No suitable method to request a new 2FA code");
  } catch (error) {
    // Log the error and re-throw
    console.error("Error requesting new 2FA code:", error);
    throw error;
  }
}
