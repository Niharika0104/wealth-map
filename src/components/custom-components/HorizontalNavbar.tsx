"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

interface HorizontalNavProps {
  navItems: NavItem[];
}

export function HorizontalNav({ navItems }: HorizontalNavProps) {
  return (
    <NavigationMenu className="w-full px-6 py-3 flex justify-between items-center bg-white">
      {/* Logo */}
      <Link href="/">
        <img
          src="https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bknDQjybQqPvSr9wEOR5WAN7dcYG2tHfylU4I"
          alt="Site Logo"
          width={48}
          height={48}
          className="h-12 w-auto"
        />
      </Link>

      {/* Navigation Links */}
      <NavigationMenuList className="flex space-x-8">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              asChild
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
