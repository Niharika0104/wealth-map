'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { RoleGuard } from '@/components/auth/RoleGuard';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  region: string;
  created_date: string;
}

export default function DashboardPage() {
  const { user, token } = useAuth();
  const [pendingUsers, setPendingUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const fetchPendingUsers = async () => {
    if (!user || !token) return;
    
    try {
      setLoading(true);
      const response = await api.get('/auth/pending-users');
      setPendingUsers(response.data);
    } catch (error) {
      console.error('Error fetching pending users:', error);
      setError('Failed to fetch pending users');
    } finally {
      setLoading(false);
    }
  };

  const approveUser = async (userId: string, newRole: string) => {
    if (!user || !token) return;
    
    try {
      setLoading(true);
      await api.post('/auth/change-role', {
        userId,
        role: newRole,
      });
      
      // Remove approved user from pending list
      setPendingUsers(pendingUsers.filter(user => user.id !== userId));
      setSuccessMessage('User approved successfully');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Error approving user:', error);
      setError('Failed to approve user');
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only super admins should fetch pending users
    if (user && user.role.includes('SUPERADMIN')) {
      fetchPendingUsers();
    }
  }, [user, token]);

  // Get role code from the full role name (e.g., USER_ROLE_ADMIN -> ADMIN)
  const userRole = user?.role.split('_').pop();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
          
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Welcome, {user?.name}</h2>
            <p className="text-gray-600">
              You are logged in as a <span className="font-medium">{userRole}</span>.
            </p>
          </div>
          
          {/* Admin Section - Only visible to Super Admins */}
          <RoleGuard allowedRoles={['SUPERADMIN']}>
            <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">User Approval</h2>
              
              {successMessage && (
                <div className="mb-4 rounded-md bg-green-50 p-4">
                  <p className="text-green-700">{successMessage}</p>
                </div>
              )}
              
              {error && (
                <div className="mb-4 rounded-md bg-red-50 p-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              
              {loading ? (
                <p className="text-gray-600">Loading...</p>
              ) : pendingUsers.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Region
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Registered
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {pendingUsers.map((pendingUser) => (
                        <tr key={pendingUser.id}>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {pendingUser.name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm text-gray-500">
                              {pendingUser.email}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm text-gray-500">
                              {pendingUser.region}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm text-gray-500">
                              {new Date(pendingUser.created_date).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <button
                              onClick={() => approveUser(pendingUser.id, 'USER_ROLE_ADMIN')}
                              className="mr-2 rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
                              disabled={loading}
                            >
                              Approve as Admin
                            </button>
                            <button
                              onClick={() => approveUser(pendingUser.id, 'USER_ROLE_USER')}
                              className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                              disabled={loading}
                            >
                              Approve as User
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600">No pending users to approve.</p>
              )}
            </div>
          </RoleGuard>
          
          {/* Admin Section - Only visible to Admins */}
          <RoleGuard allowedRoles={['ADMIN']}>
            <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Admin Panel</h2>
              <p className="text-gray-600">
                As an Admin, you can manage employees and perform administrative tasks.
              </p>
              <button
                className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Manage Employees
              </button>
            </div>
          </RoleGuard>
          
          {/* User Section - Visible to all authenticated users */}
          <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Account Information</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="font-semibold">Name:</p>
                <p>{user?.name}</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>{user?.email}</p>
              </div>
              <div>
                <p className="font-semibold">Role:</p>
                <p>{userRole}</p>
              </div>
              <div>
                <p className="font-semibold">Region:</p>
                <p>{user?.region || 'Not specified'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
