import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayoutShell from "@/components/custom-components/main-layout";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@/lib/styles/styles.css";
import { X, Send, Loader2, Square, RefreshCw, Copy, ThumbsUp, ThumbsDown, Upload, Sparkles } from "lucide-react";

// app/layout.tsx
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        uploadIcon: <Upload className="h-5 w-5" />,
      }}
      defaultOpen={false}
      instructions={"You are a wealth management and property portfolio advisor..."}
      labels={{
        title: "Wealth Map Advisor",
        initial: "How can I help you with your wealth and property portfolio today?",
      }}
    >
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto p-4 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </div>
    </CopilotSidebar>
  );
}
