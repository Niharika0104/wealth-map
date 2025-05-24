import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayoutShell from "@/components/custom-components/main-layout";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@/lib/styles/styles.css";
import { X, Send, Loader2, Square, RefreshCw, Copy, ThumbsUp, ThumbsDown, Upload, Sparkles } from "lucide-react";
import { FloatingChatButton } from "@/components/FloatingChatButton";

// app/layout.tsx
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <FloatingChatButton />
    </div>
  );
}
