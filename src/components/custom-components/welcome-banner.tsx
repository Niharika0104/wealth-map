"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export function WelcomeBanner() {
  const { user, isLoading } = useAuth();
  
  // Get part of the day for welcome message
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };
  
  // Generate initials from name
  const getInitials = () => {
    if (!user?.name) return "?";
    return user.name
      .split(" ")
      .map(part => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-8 w-[250px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-[350px]" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-[400px]" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8 border-l-4 border-l-primary">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            {user?.image ? (
              <AvatarImage src={user.image} alt={user?.name || "User"} />
            ) : (
              <AvatarFallback className="text-lg">{getInitials()}</AvatarFallback>
            )}
          </Avatar>
          <span>Good {getTimeOfDay()}, {user?.name?.split(' ')[0] || 'there'}!</span>
        </CardTitle>
        <CardDescription>
          Welcome to your Wealth Map dashboard.
        </CardDescription>
      </CardHeader>      <CardContent>
        <p className="text-sm text-muted-foreground">
          You're signed in as <strong>{user?.email}</strong>.
          {user?.role && (
            <span> Your account has the role: <strong>{user.role}</strong>.</span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}
