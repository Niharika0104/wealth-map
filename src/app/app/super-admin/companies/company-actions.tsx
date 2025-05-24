"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Ban, CheckCircle2 } from "lucide-react";

export default function CompanyActions({ companyId, status }: { companyId: string; status: string }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<"suspend" | "activate" | null>(null);

  const handleSuspend = async () => {
    // TODO: Call API to suspend company
    setOpen(false);
  };
  const handleActivate = async () => {
    // TODO: Call API to activate company
    setOpen(false);
  };

  return (
    <>
      {status === "active" ? (
        <Button size="sm" variant="destructive" onClick={() => { setOpen(true); setAction("suspend"); }}>
          <Ban className="h-4 w-4 mr-1" /> Suspend
        </Button>
      ) : (
        <Button size="sm" variant="default" onClick={() => { setOpen(true); setAction("activate"); }}>
          <CheckCircle2 className="h-4 w-4 mr-1" /> Activate
        </Button>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{action === "suspend" ? "Suspend Company" : "Activate Company"}</DialogTitle>
          </DialogHeader>
          <div>
            {action === "suspend"
              ? "Are you sure you want to suspend this company?"
              : "Are you sure you want to activate this company?"}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            {action === "suspend" ? (
              <Button variant="destructive" onClick={handleSuspend}>Suspend</Button>
            ) : (
              <Button variant="default" onClick={handleActivate}>Activate</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
} 