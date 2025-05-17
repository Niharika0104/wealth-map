'use client'
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import Searchbar from "@/components/custom-components/searchbar";
import Map from "@/components/custom-components/Map";
import ListView from "@/components/custom-components/ListView";
import { Property ,ListViewProps} from '@/Models/models';
import { Filter } from "lucide-react";
const dummyProperties:ListViewProps[] = [
  {
    Region: "North America",
    Name: "Luxury Condo Downtown",
    Owners: [{
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "2,500 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']
  },
  {
    Region: "Europe",
    Name: "Beachfront Villa",
   Owners: [{
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "4,200 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']

  },
  {
    Region: "Asia",
    Name: "Sky Tower Penthouse",
    Owners: [{
      name:"John Doe",
      avatarUrl:'https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr'

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "3,100 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']

  },
  {
    Region: "Australia",
    Name: "Harbor View Apartment",
   Owners: [{
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "1,800 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']

  }
];
export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Welcome to Wealth Map</h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive solution for wealth management
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-4">
          {isLoading ? (
            <div>Loading authentication status...</div>
          ) : isAuthenticated ? (
            <div className="space-y-4 w-full">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-700">
                  You are logged in as <strong>{user?.email}</strong>
                </p>
              </div>
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => router.push("/app")}
              >
                Go to Dashboard
              </Button>
            </div>
          ) : (
            <div className="space-y-4 w-full">
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => router.push("/auth?tab=signin")}
              >
                Sign In
              </Button>
              <Button 
                className="w-full" 
                variant="outline" 
                size="lg"
                onClick={() => router.push("/auth?tab=signup")}
              >
                Create Account
              </Button>
            </div>
          )}
          
          <div className="pt-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.push("/debug")}
            >
              Debug Auth
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
