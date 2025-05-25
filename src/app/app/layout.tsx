"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayoutShell from "@/components/custom-components/main-layout";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@/lib/styles/styles.css";
import { X, Send, Loader2, Square, RefreshCw, Copy, ThumbsUp, ThumbsDown, Upload, Sparkles } from "lucide-react";
import { FloatingChatButton } from "@/components/FloatingChatButton";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/app";

  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <main
          className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
            isHome ? "overflow-hidden" : ""
          }`}
        >
        {children}
      </main>
      <FloatingChatButton />
    </div>
  );
}
