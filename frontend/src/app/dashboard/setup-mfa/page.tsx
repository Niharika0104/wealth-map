'use client';

import { useState } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import axios from 'axios';
import Image from 'next/image';

export default function SetupMfaPage() {
  const { user, token } = useAuth();
  const [method, setMethod] = useState('MFA_METHOD_TOTP');
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Select method, 2: Verify, 3: Success

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const setupMfa = async () => {
    if (!user || !token) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.post('/auth/setup-mfa', { method });
      
      if (method === 'MFA_METHOD_TOTP') {
        setQrCode(response.data.qrCodeUrl);
        setSecret(response.data.secret);
      }
      
      setStep(2); // Move to verification step
    } catch (error) {
      console.error('Error setting up MFA:', error);
      setError('Failed to set up MFA. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyMfa = async () => {
    if (!user || !token) return;
    
    try {
      setLoading(true);
      setError(null);
      
      // Verify the MFA setup
      await api.post('/auth/verify-mfa-setup', {
        code: verificationCode,
        secret: secret,
      });
      
      setSuccess('MFA has been successfully set up.');
      setStep(3); // Move to success step
    } catch (error) {
      console.error('Error verifying MFA:', error);
      setError('Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-3xl font-bold">Set Up Multi-Factor Authentication</h1>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            {step === 1 && (
              <>
                <h2 className="mb-4 text-xl font-semibold">Choose MFA Method</h2>
                
                <div className="mb-6">
                  <p className="mb-4 text-gray-600">
                    Multi-factor authentication adds an extra layer of security to your account.
                  </p>
                  
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="MFA_METHOD_TOTP"
                        checked={method === 'MFA_METHOD_TOTP'}
                        onChange={(e) => setMethod(e.target.value)}
                        className="mr-2"
                      />
                      <span>Authenticator App (Google Authenticator, Authy, etc.)</span>
                    </label>
                  </div>
                  
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="MFA_METHOD_EMAIL"
                        checked={method === 'MFA_METHOD_EMAIL'}
                        onChange={(e) => setMethod(e.target.value)}
                        className="mr-2"
                      />
                      <span>Email-based verification</span>
                    </label>
                  </div>
                  
                  {user?.phone_number && (
                    <div className="mb-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="MFA_METHOD_SMS"
                          checked={method === 'MFA_METHOD_SMS'}
                          onChange={(e) => setMethod(e.target.value)}
                          className="mr-2"
                        />
                        <span>SMS-based verification</span>
                      </label>
                    </div>
                  )}
                </div>
                
                {error && (
                  <div className="mb-4 rounded-md bg-red-50 p-4">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
                
                <button
                  onClick={setupMfa}
                  disabled={loading}
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {loading ? 'Setting up...' : 'Set Up MFA'}
                </button>
              </>
            )}
            
            {step === 2 && (
              <>
                <h2 className="mb-4 text-xl font-semibold">Verify MFA Setup</h2>
                
                {method === 'MFA_METHOD_TOTP' && qrCode && (
                  <div className="mb-6 text-center">
                    <p className="mb-4 text-gray-600">
                      Scan the QR code below with your authenticator app.
                    </p>
                    <div className="mx-auto mb-4 h-64 w-64 overflow-hidden rounded-lg">
                      <img 
                        src={qrCode} 
                        alt="QR Code for authenticator app" 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    {secret && (
                      <div className="mb-4">
                        <p className="mb-2 text-gray-600">
                          Or enter this code manually in your authenticator app:
                        </p>
                        <code className="rounded bg-gray-100 px-2 py-1">{secret}</code>
                      </div>
                    )}
                  </div>
                )}
                
                {method === 'MFA_METHOD_EMAIL' && (
                  <p className="mb-6 text-gray-600">
                    We've sent a verification code to your email address. Please check your inbox.
                  </p>
                )}
                
                {method === 'MFA_METHOD_SMS' && (
                  <p className="mb-6 text-gray-600">
                    We've sent a verification code to your phone. Please check your messages.
                  </p>
                )}
                
                <div className="mb-6">
                  <label
                    htmlFor="verificationCode"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Verification Code
                  </label>
                  <input
                    id="verificationCode"
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter the verification code"
                  />
                </div>
                
                {error && (
                  <div className="mb-4 rounded-md bg-red-50 p-4">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    disabled={loading}
                    className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={verifyMfa}
                    disabled={loading || !verificationCode}
                    className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                  >
                    {loading ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              </>
            )}
            
            {step === 3 && success && (
              <>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="mb-4 text-xl font-semibold text-green-600">MFA Setup Complete</h2>
                  <p className="mb-6 text-gray-600">
                    {success}
                  </p>
                  <p className="mb-6 text-gray-600">
                    From now on, you will need to provide a verification code when logging in.
                  </p>
                  <a
                    href="/dashboard"
                    className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Return to Dashboard
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
