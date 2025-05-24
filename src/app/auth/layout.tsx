import React from "react";
import Image from "next/image";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Login/Signup form */}
      <div className="w-full lg:w-[50%] flex items-center justify-center p-4 bg-white">
        <div className="max-w-md w-full">
          {children}
        </div>
      </div>
      
      {/* Right side - Decorative background, hidden on mobile */}
      <div className="hidden lg:flex lg:w-[50%] bg-gradient-to-br from-blue-500 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Pattern or subtle background texture */}
          <div className="absolute w-full h-full bg-[url('/window.svg')] bg-repeat opacity-5"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <div className="mb-8">
            <Image src="/globe.svg" alt="Wealth Map Logo" width={80} height={80} />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Wealth Map</h1>
          <p className="text-xl text-center opacity-90 mb-8">Your comprehensive solution for wealth management and property analytics</p>
          <div className="rounded-lg bg-white/10 backdrop-blur-md p-6 w-full max-w-md">
            <p className="text-sm mb-4">"Wealth Map has completely transformed our property portfolio management. The insights and analytics are game-changing."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-xs opacity-80">CEO, Johnson Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 