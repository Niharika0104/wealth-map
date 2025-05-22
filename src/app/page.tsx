'use client'
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 w-full bg-gray-50">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Welcome to Wealth Map</h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive solution for wealth management
          </p>
        </div>
      </div>
    </div>
  );
}