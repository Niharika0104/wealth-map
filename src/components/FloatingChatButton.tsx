"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PropertyQuery } from "@/components/PropertyQuery";
import { MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className={cn(
              "h-14 w-14 rounded-full shadow-lg transition-all duration-200",
              "bg-primary hover:bg-primary/90",
              "flex items-center justify-center"
            )}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary-foreground" />
            ) : (
              <MessageSquare className="h-6 w-6 text-primary-foreground" />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-[400px] sm:w-[540px] p-0"
        >
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-xl font-semibold">
              AI Property Assistant
            </SheetTitle>
          </SheetHeader>
          <div className="h-[calc(100vh-4rem)]">
            <PropertyQuery />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 