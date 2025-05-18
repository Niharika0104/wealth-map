import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/app-sidebar";
import AuthGuard from "@/components/custom-components/auth-guard";
import { UserProfileMenu } from "@/components/custom-components/user-profile-menu";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayoutShell from "@/components/custom-components/main-layout";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@/lib/styles/styles.css";
import { X, Send, Loader2, Square, RefreshCw, Copy, ThumbsUp, ThumbsDown, Upload, Sparkles } from "lucide-react";

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
        <CopilotSidebar
            icons={{
                openIcon: <Sparkles className="h-5 w-5" />,
                closeIcon: <X className="h-5 w-5" />,
                headerCloseIcon: <X className="h-5 w-5" />,
                sendIcon: <Send className="h-5 w-5" />,
                activityIcon: <Loader2 className="h-5 w-5 animate-spin" />,
                spinnerIcon: <Loader2 className="h-5 w-5 animate-spin" />,
                stopIcon: <Square className="h-5 w-5" />,
                regenerateIcon: <RefreshCw className="h-5 w-5" />,
                copyIcon: <Copy className="h-5 w-5" />,
                thumbsUpIcon: <ThumbsUp className="h-5 w-5" />,
                thumbsDownIcon: <ThumbsDown className="h-5 w-5" />,
                uploadIcon: <Upload className="h-5 w-5" />
            }}
            defaultOpen={true}
            instructions={"You are a wealth management and property portfolio advisor. You help users with their financial decisions, property investments, and portfolio management. You can provide insights on market trends, property valuations, investment strategies, and wealth optimization. While you don't have access to users' personal information, you can provide relevant market data, trends, and general advice. For specific queries, you can use realistic market data and scenarios to illustrate your points. You're knowledgeable about real estate markets, investment vehicles, tax implications, and wealth management strategies."}
            labels={{
                title: "Wealth Map Advisor",
                initial: "How can I help you with your wealth and property portfolio today?",
            }}
        >
            <SidebarProvider>
                <AppSidebar />
                <MainLayoutShell>{children}</MainLayoutShell>
            </SidebarProvider>
        </CopilotSidebar>
    );
}