import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/app-sidebar";
import AuthGuard from "@/components/custom-components/auth-guard";
import { UserProfileMenu } from "@/components/custom-components/user-profile-menu";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayoutShell from "@/components/custom-components/main-layout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Wealth Map | Dashboard",
    description: "Manage your wealth and property portfolio",
};

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // The AuthGuard component will handle authentication and redirects
    // If the user isn't authenticated, it will show a loading state and redirect to /auth
    return (
       <SidebarProvider>
               <AppSidebar />
               <MainLayoutShell>{children}</MainLayoutShell>
             </SidebarProvider>
        
    );
}