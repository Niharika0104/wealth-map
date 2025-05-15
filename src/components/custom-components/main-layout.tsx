"use client";

import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Searchbar from "@/components/custom-components/searchbar";
import UserDropdown from "@/components/custom-components/UserProfile";
import { Bell, Filter } from "lucide-react";

export default function MainLayoutShell({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");

  return (
    <main className="flex w-full p-4 gap-4">
      {/* Sidebar Trigger */}
      <div>
        <SidebarTrigger />
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-full flex justify-end gap-2 items-center">
            <Searchbar
              value={search}
              onChange={setSearch}
              onSearch={(val) => {
                // handle search
              }}
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>

            <Bell className="cursor-pointer text-gray-600 hover:text-black" />
            <UserDropdown />
          </div>
        </div>

        {/* Page Children */}
        <div>{children}</div>
      </div>
    </main>
  );
}
