'use client';

import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut } from 'lucide-react';

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const avatarUrl = "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup on unmount or when open changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="relative group" onClick={() => setOpen(!open)}>
        <img
          src={avatarUrl}
          alt={'user.name'}
          className="inline-block size-10 rounded-full ring-2 ring-white cursor-pointer"
        />
      </div>

      {open && (
        <div
          tabIndex={0}
          className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-lg shadow-md dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="/account"
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <User className="w-5 h-5 mr-2" />
                Account Info
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <Settings className="w-5 h-5 mr-2" />
                Settings
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  console.log('Logging out...');
                  // Add your logout logic here
                }}
                className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
