"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Company = {
  id: string;
  name: string;
  email: string;
  status: string;
  memberCount: number;
  createdAt: Date;
};

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: "Company Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className={`capitalize ${
          status === "active" ? "text-green-600" :
          status === "suspended" ? "text-red-600" :
          "text-yellow-600"
        }`}>
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "memberCount",
    header: "Members",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return new Date(row.getValue("createdAt")).toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const company = row.original;

      const handleStatusToggle = async () => {
        try {
          const response = await fetch(`/api/organizations/${company.id}/status`, {
            method: 'PATCH',
          });
          if (!response.ok) throw new Error('Failed to update status');
          window.location.reload();
        } catch (error) {
          console.error('Status update error:', error);
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(company.id)}
            >
              Copy company ID
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => window.location.href = `/app/super-admin/companies/${company.id}`}
            >
              View details
            </DropdownMenuItem>
            <DropdownMenuItem
              className={company.status === "active" ? "text-red-600" : "text-green-600"}
              onClick={handleStatusToggle}
            >
              {company.status === "active" ? "Suspend" : "Activate"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]; 