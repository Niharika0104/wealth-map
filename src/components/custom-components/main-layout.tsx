"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Searchbar from "@/components/custom-components/searchbar";
import UserDropdown from "@/components/custom-components/UserProfile";
import { Bell, Filter } from "lucide-react";
import { useUIStore } from "@/stores/UIStore";
import FilterPopup from "./FilterPopUp";
import { HorizontalNav } from "./HorizontalNavbar";
import React from "react";

export default function MainLayoutShell({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const isRootPath = pathname === "/app";
  const { openFilterDialog } = useUIStore();
  const [controlHeight, setControlHeight] = useState(0);

  const searchRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLButtonElement>(null);
  const bellRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  
  const navitem = [
    { label: "Home", href: "/app" },
    { label: "Owners", href: "/app/owners" },
    { label: "Reports", href: "/app/Reports" },
    { label: "Trending Properties", href: "/app/trending" },
  ];

  useEffect(() => {
    const heights = [
      searchRef.current?.offsetHeight || 0,
      filterRef.current?.offsetHeight || 0,
      bellRef.current?.offsetHeight || 0,
      userRef.current?.offsetHeight || 0,
    ];
    setControlHeight(Math.max(...heights));
  }, [search]);

  const sharedControlClasses = `flex items-center justify-center rounded-md transition-all duration-300`;

  return (
    <main className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-white rounded-lg shadow-md px-6 py-3">
          <HorizontalNav navItems={navitem} />

          <div className="flex items-center gap-5" style={{ minHeight: `${controlHeight}px` }}>
            {isRootPath && (
              <>
                <div ref={searchRef} className={`${sharedControlClasses} w-[320px]`}>
                  <Searchbar
                    value={search}
                    onChange={setSearch}
                    onSearch={(val) => {
                      // handle search
                    }}
                    placeholder="Search properties, owners..."
                  />
                </div>

                <button
                  ref={filterRef}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-5 py-2 rounded-lg shadow-md font-semibold text-sm transition-colors duration-300"
                  onClick={openFilterDialog}
                  aria-label="Open filter dialog"
                >
                  <Filter className="h-7" />
                  <span>Filter</span>
                </button>
              </>
            )}

            <div
              ref={bellRef}
              className="p-2 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-300 rounded-full hover:bg-gray-100"
              aria-label="Notifications"
              role="button"
              tabIndex={0}
            >
              <Bell className="h-7 w-7" />
            </div>

            <div ref={userRef}>
              <UserDropdown />
            </div>

            <FilterPopup />
          </div>
        </div>

        {/* Page content (children) */}
        <section className="bg-white rounded-lg shadow-lg p-8 min-h-[400px]">
          {children}
        </section>
      </div>
    </main>
  );
}
