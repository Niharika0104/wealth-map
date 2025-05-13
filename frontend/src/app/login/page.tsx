'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/components/providers/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define the form schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login, verifyMfa } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isMfaRequired, setIsMfaRequired] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [mfaMethod, setMfaMethod] = useState<string | null>(null);
  const [mfaCode, setMfaCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await login(data.email, data.password);
      
      if (response.mfaRequired) {
        // MFA verification required
        setIsMfaRequired(true);
        setUserId(response.userId);
        setMfaMethod(response.mfaMethod);
      } else {
        // Login successful, redirect to dashboard
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMfaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId) {
      return;
    }
    
    try {
      setIsLoading(true);
      setError(null);
      
      await verifyMfa(userId, mfaCode);
      
      // MFA verification successful, redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('MFA verification error:', error);
      setError('Invalid verification code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        {isMfaRequired ? (
          // MFA Form
          <form onSubmit={handleMfaSubmit} className="mt-8 space-y-6">
            <div>
              <label 
                htmlFor="mfaCode" 
                className="block text-sm font-medium text-gray-700"
              >
                {mfaMethod === 'MFA_METHOD_TOTP' 
                  ? 'Enter the code from your authenticator app' 
                  : mfaMethod === 'MFA_METHOD_SMS' 
                  ? 'Enter the code sent to your phone' 
                  : 'Enter the verification code'}
              </label>
              <input
                id="mfaCode"
                type="text"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="Verification code"
                required
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          </form>
        ) : (
          // Login Form
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="********"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>

            <div className="text-center text-sm">
              <span className="text-gray-600">Don&apos;t have an account? </span>
              <Link 
                href="/register" 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
