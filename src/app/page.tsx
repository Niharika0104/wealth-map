'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, BarChart3, Building2, Globe, LineChart, Shield, Users } from "lucide-react";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="flex min-h-screen flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="absolute inset-0 bg-[url('/window.svg')] bg-repeat opacity-5"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                Transform Your Property Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive wealth management and property analytics platform for modern investors
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                onClick={() => router.push('/auth/login?tab=register')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg"
                onClick={() => router.push('/auth/login?tab=signin')}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools and insights to help you make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-green-600" />,
                title: "Advanced Analytics",
                description: "Get deep insights into your property portfolio with our powerful analytics tools"
              },
              {
                icon: <Building2 className="h-8 w-8 text-green-600" />,
                title: "Property Management",
                description: "Easily manage and track all your properties in one place"
              },
              {
                icon: <LineChart className="h-8 w-8 text-green-600" />,
                title: "Market Trends",
                description: "Stay ahead with real-time market data and trend analysis"
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Team Collaboration",
                description: "Work seamlessly with your team and stakeholders"
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Global Coverage",
                description: "Access property data and insights from around the world"
              },
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: "Secure Platform",
                description: "Your data is protected with enterprise-grade security"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-100 hover:border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Property Portfolio?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of successful investors who trust Wealth Map
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg"
              onClick={() => router.push('/auth/login?tab=register')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image src="/globe.svg" alt="Wealth Map Logo" width={32} height={32} />
                <span className="font-bold text-xl">Wealth Map</span>
              </div>
              <p className="text-gray-600">
                Your comprehensive solution for wealth management and property analytics
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookie Policy</li>
                <li>Licenses</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2024 Wealth Map. All rights reserved.</p>
        </div>
      </div>
      </footer>
    </div>
  );
}