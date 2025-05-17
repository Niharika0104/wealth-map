"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function TwoFactorDebug() {
  const [methods, setMethods] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Get all methods on the twoFactor client
    if (authClient.twoFactor) {
      const methodNames = Object.getOwnPropertyNames(authClient.twoFactor)
        .filter(name => typeof (authClient.twoFactor as any)[name] === 'function');
      setMethods(methodNames);
    } else {
      setError("twoFactor client not available");
    }
  }, []);

  const handleClick = (methodName: string) => {
    setLoading(true);
    try {
      // Log the method details
      console.log(`Method: ${methodName}`, (authClient.twoFactor as any)[methodName]);
      toast.success(`Logged method '${methodName}' to console`);
    } catch (err) {
      console.error(`Error examining method ${methodName}:`, err);
      setError(`Error with method ${methodName}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Two-Factor Client Debug</h1>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 mb-4 rounded-md">
          {error}
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Available Methods:</h2>
        {methods.length === 0 ? (
          <p className="text-gray-500">No methods found</p>
        ) : (
          <div className="space-y-2">
            {methods.map((method) => (
              <div key={method} className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">{method}</code>
                <Button 
                  size="sm" 
                  variant="outline" 
                  disabled={loading}
                  onClick={() => handleClick(method)}
                >
                  Examine
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2">Debug Information:</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          {JSON.stringify({
            twoFactorClient: !!authClient.twoFactor,
            methods
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
}
