"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function CompanyIdCopy({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy company ID">
      <Copy className="h-4 w-4" />
      <span className="sr-only">Copy</span>
      {copied && <span className="ml-2 text-xs text-green-600">Copied!</span>}
    </Button>
  );
} 