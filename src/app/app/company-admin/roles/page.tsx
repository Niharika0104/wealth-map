"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

const PERMISSIONS = {
  Property: [
    { id: "property.view", name: "View Properties", description: "Can view property details" },
    { id: "property.create", name: "Create Properties", description: "Can create new properties" },
    { id: "property.edit", name: "Edit Properties", description: "Can edit property details" },
    { id: "property.delete", name: "Delete Properties", description: "Can delete properties" },
  ],
  Units: [
    { id: "unit.view", name: "View Units", description: "Can view unit details" },
    { id: "unit.create", name: "Create Units", description: "Can create new units" },
    { id: "unit.edit", name: "Edit Units", description: "Can edit unit details" },
    { id: "unit.delete", name: "Delete Units", description: "Can delete units" },
  ],
  Tenants: [
    { id: "tenant.view", name: "View Tenants", description: "Can view tenant details" },
    { id: "tenant.create", name: "Create Tenants", description: "Can create new tenants" },
    { id: "tenant.edit", name: "Edit Tenants", description: "Can edit tenant details" },
    { id: "tenant.delete", name: "Delete Tenants", description: "Can delete tenants" },
  ],
  Leases: [
    { id: "lease.view", name: "View Leases", description: "Can view lease details" },
    { id: "lease.create", name: "Create Leases", description: "Can create new leases" },
    { id: "lease.edit", name: "Edit Leases", description: "Can edit lease details" },
    { id: "lease.delete", name: "Delete Leases", description: "Can delete leases" },
  ],
  Payments: [
    { id: "payment.view", name: "View Payments", description: "Can view payment details" },
    { id: "payment.create", name: "Create Payments", description: "Can create new payments" },
    { id: "payment.edit", name: "Edit Payments", description: "Can edit payment details" },
    { id: "payment.delete", name: "Delete Payments", description: "Can delete payments" },
  ],
  Reports: [
    { id: "report.view", name: "View Reports", description: "Can view reports" },
    { id: "report.create", name: "Create Reports", description: "Can create new reports" },
    { id: "report.edit", name: "Edit Reports", description: "Can edit reports" },
    { id: "report.delete", name: "Delete Reports", description: "Can delete reports" },
  ],
};

type CustomRole = {
  id: string;
  name: string;
  description: string | null;
  permissions: {
    id: string;
    name: string;
    category: string;
    description: string | null;
  }[];
};

export default function RolesPage() {
  const [roles, setRoles] = useState<CustomRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newRole, setNewRole] = useState({
    name: "",
    description: "",
    permissions: [] as string[],
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await fetch("/api/company-admin/roles");
      if (!response.ok) throw new Error("Failed to fetch roles");
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error("Error fetching roles:", error);
      toast({
        title: "Error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRole = async () => {
    try {
      const response = await fetch("/api/company-admin/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRole),
      });

      if (!response.ok) throw new Error("Failed to create role");

      await fetchRoles();
      setIsCreateDialogOpen(false);
      setNewRole({ name: "", description: "", permissions: [] });
      toast({
        title: "Success",
      });
    } catch (error) {
      console.error("Error creating role:", error);
      toast({
        title: "Error",
        variant: "destructive",
      });
    }
  };

  const handleDeleteRole = async (roleId: string) => {
    try {
      const response = await fetch(`/api/company-admin/roles/${roleId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete role");

      await fetchRoles();
      toast({
        title: "Success",
      });
    } catch (error) {
      console.error("Error deleting role:", error);
      toast({
        title: "Error",
        variant: "destructive",
      });
    }
  };

  const togglePermission = (permissionId: string) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter((id) => id !== permissionId)
        : [...prev.permissions, permissionId],
    }));
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Roles & Permissions</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create Role</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Role Name</Label>
                <Input
                  id="name"
                  value={newRole.name}
                  onChange={(e) =>
                    setNewRole((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newRole.description}
                  onChange={(e) =>
                    setNewRole((prev) => ({ ...prev, description: e.target.value }))
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label>Permissions</Label>
                <ScrollArea className="h-[400px] rounded-md border p-4">
                  {Object.entries(PERMISSIONS).map(([category, permissions]) => (
                    <div key={category} className="mb-6">
                      <h3 className="font-semibold mb-2">{category}</h3>
                      <div className="grid gap-2">
                        {permissions.map((permission) => (
                          <div
                            key={permission.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={permission.id}
                              checked={newRole.permissions.includes(permission.id)}
                              onCheckedChange={() => togglePermission(permission.id)}
                            />
                            <Label
                              htmlFor={permission.id}
                              className="text-sm font-normal"
                            >
                              {permission.name}
                              <p className="text-sm text-muted-foreground">
                                {permission.description}
                              </p>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateRole}>Create Role</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{role.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteRole(role.id)}
                >
                  Delete
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {role.description}
              </p>
              <div className="space-y-2">
                {Object.entries(PERMISSIONS).map(([category, permissions]) => {
                  const rolePermissions = role.permissions.filter((p) =>
                    permissions.some((perm) => perm.id === p.id)
                  );
                  if (rolePermissions.length === 0) return null;
                  return (
                    <div key={category}>
                      <h4 className="text-sm font-medium mb-1">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {rolePermissions.map((permission) => (
                          <Badge key={permission.id} variant="secondary">
                            {permission.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 