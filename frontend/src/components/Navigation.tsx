'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';

export default function Navigation() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get role code from the full role name (e.g., USER_ROLE_ADMIN -> ADMIN)
  const userRole = user?.role.split('_').pop();
  
  // Define navigation links based on user role
  const navLinks = [
    { name: 'Dashboard', href: '/dashboard', roles: ['SUPERADMIN', 'ADMIN', 'USER', 'EMPLOYEE'] },
    { name: 'Pending Users', href: '/dashboard/pending-users', roles: ['SUPERADMIN'] },
    { name: 'Manage Employees', href: '/dashboard/employees', roles: ['ADMIN'] },
    { name: 'Profile', href: '/dashboard/profile', roles: ['SUPERADMIN', 'ADMIN', 'USER', 'EMPLOYEE'] },
    { name: 'Setup MFA', href: '/dashboard/setup-mfa', roles: ['SUPERADMIN', 'ADMIN', 'USER', 'EMPLOYEE'] },
  ];

  // Filter links based on user role
  const filteredLinks = navLinks.filter(
    link => userRole && link.roles.includes(userRole)
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/dashboard" className="text-xl font-bold text-blue-600">
                Wealth App
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {filteredLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                    pathname === link.href
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative ml-3">
              <div className="flex items-center">
                <span className="mr-4 text-sm font-medium text-gray-700">
                  {user?.name} ({userRole})
                </span>
                <button
                  onClick={() => logout()}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 pt-2 pb-3">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                pathname === link.href
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm font-medium text-white">
                {user?.name.charAt(0)}
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">{user?.name}</div>
              <div className="text-sm font-medium text-gray-500">{user?.email}</div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <button
              onClick={() => logout()}
              className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
