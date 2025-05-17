import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/app-sidebar";
import AuthGuard from "@/components/custom-components/auth-guard";
import { UserProfileMenu } from "@/components/custom-components/user-profile-menu";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        <AuthGuard>
            <TooltipProvider>
                <div className="flex h-screen overflow-hidden">
                    <AppSidebar />
                    <div className="flex-1 overflow-auto">
                        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <div className="flex h-16 items-center justify-between px-6">
                                <div className="flex items-center gap-2">
                                    <SidebarTrigger />
                                    <h1 className="text-xl font-semibold">Dashboard</h1>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    {/* You can add notification bell, search, etc. here */}
                                    <UserProfileMenu />
                                </div>
                            </div>
                        </header>
                        
                        <main className="p-6">
                            <div className="mx-auto max-w-7xl">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </TooltipProvider>
        </AuthGuard>
    );
}
