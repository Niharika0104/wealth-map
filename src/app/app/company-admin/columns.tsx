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

export type Employee = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "employee";
  status: "active" | "inactive";
  lastActive: Date;
  twoFactorEnabled: boolean;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return (
        <div className="capitalize">
          {role}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className={`capitalize ${
          status === "active" ? "text-green-600" : "text-red-600"
        }`}>
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "twoFactorEnabled",
    header: "2FA",
    cell: ({ row }) => {
      const enabled = row.getValue("twoFactorEnabled") as boolean;
      return (
        <div className={enabled ? "text-green-600" : "text-red-600"}>
          {enabled ? "Enabled" : "Disabled"}
        </div>
      );
    },
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
    cell: ({ row }) => {
      return new Date(row.getValue("lastActive")).toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original;

      const handleStatusToggle = async () => {
        try {
          const response = await fetch(`/api/employees/${employee.id}/status`, {
            method: 'PATCH',
          });
          if (!response.ok) throw new Error('Failed to update status');
          window.location.reload();
        } catch (error) {
          console.error('Status update error:', error);
        }
      };

      const handleRoleToggle = async () => {
        try {
          const response = await fetch(`/api/employees/${employee.id}/role`, {
            method: 'PATCH',
          });
          if (!response.ok) throw new Error('Failed to update role');
          window.location.reload();
        } catch (error) {
          console.error('Role update error:', error);
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
              onClick={() => navigator.clipboard.writeText(employee.id)}
            >
              Copy employee ID
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => window.location.href = `/app/company-admin/employees/${employee.id}`}
            >
              View details
            </DropdownMenuItem>
            <DropdownMenuItem
              className={employee.status === "active" ? "text-red-600" : "text-green-600"}
              onClick={handleStatusToggle}
            >
              {employee.status === "active" ? "Deactivate" : "Activate"}
            </DropdownMenuItem>
            <DropdownMenuItem
              className={employee.role === "admin" ? "text-red-600" : "text-green-600"}
              onClick={handleRoleToggle}
            >
              {employee.role === "admin" ? "Remove Admin" : "Make Admin"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]; 