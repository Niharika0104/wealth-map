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
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Permission = {
  id: string;
  name: string;
  description: string;
  category: string;
};

type PermissionCategory = {
  category: string;
  permissions: Permission[];
};

type GroupedPermissions = Record<string, Permission[]>;

const PERMISSION_NAMES = {
  System: ["system:*"],
  Companies: ["companies:*", "company:manage"],
  Users: ["users:*", "employees:*", "permissions:assign"],
  Property: ["property:*", "property:view", "property:search"],
  Reports: ["reports:*", "reports:create", "reports:share", "reports:view"],
};

type CustomRole = {
  id: string;
  name: string;
  description: string;
  baseRole: string;
  permissions: Permission[];
};

export default function RolesPage() {
  const [roles, setRoles] = useState<CustomRole[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newRole, setNewRole] = useState({
    name: "",
    description: "",
    permissions: [] as string[],
    baseRole: "EMPLOYEE",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchRoles();
    fetchPermissions();
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

  const fetchPermissions = async () => {
    try {
      const response = await fetch("/api/company-admin/permissions");
      if (!response.ok) throw new Error("Failed to fetch permissions");
      const data = await response.json();
      setPermissions(data);
    } catch (error) {
      console.error("Error fetching permissions:", error);
      toast({
        title: "Error",
        description: "Failed to fetch permissions",
        variant: "destructive",
      });
    }
  };

  // Group permissions by category
  const groupedPermissions = permissions.reduce<GroupedPermissions>((acc, permission) => {
    const category = permission.category.charAt(0).toUpperCase() + permission.category.slice(1);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(permission);
    return acc;
  }, {});

  const handleCreateRole = async () => {
    try {
      const response = await fetch("/api/company-admin/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRole),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create role");
      }

      await fetchRoles();
      setIsCreateDialogOpen(false);
      setNewRole({ name: "", description: "", permissions: [], baseRole: "EMPLOYEE" });
      toast({
        title: "Success",
        description: "Role created successfully",
      });
    } catch (error) {
      console.error("Error creating role:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create role",
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

  const togglePermission = (permissionName: string) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permissionName)
        ? prev.permissions.filter((name) => name !== permissionName)
        : [...prev.permissions, permissionName],
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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
              <DialogDescription>
                Create a new custom role with specific permissions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Role Name</Label>
                <Input
                  id="name"
                  value={newRole.name}
                  onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                  placeholder="Enter role name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newRole.description}
                  onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                  placeholder="Enter role description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="baseRole">Base Role</Label>
                <Select
                  value={newRole.baseRole}
                  onValueChange={(value) => setNewRole({ ...newRole, baseRole: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select base role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EMPLOYEE">Employee</SelectItem>
                    <SelectItem value="COMPANY_ADMIN">Company Admin</SelectItem>
                    <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  The base role determines the minimum permissions for this role
                </p>
              </div>
              <div className="grid gap-2">
                <Label>Permissions</Label>
                <ScrollArea className="h-[400px] rounded-md border p-4">
                  {Object.entries(groupedPermissions).map(([category, categoryPermissions]) => (
                    <div key={category} className="mb-6">
                      <h3 className="font-semibold mb-2">{category}</h3>
                      <div className="grid gap-2">
                        {categoryPermissions.map((permission) => (
                          <div
                            key={permission.name}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={permission.name}
                              checked={newRole.permissions.includes(permission.name)}
                              onCheckedChange={() => togglePermission(permission.name)}
                            />
                            <Label
                              htmlFor={permission.name}
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
                {Object.entries(groupedPermissions).map(([category, categoryPermissions]) => {
                  const rolePermissions = role.permissions.filter((p) =>
                    categoryPermissions.some((perm) => perm.name === p.name)
                  );
                  if (rolePermissions.length === 0) return null;
                  return (
                    <div key={category}>
                      <h4 className="text-sm font-medium mb-1">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {rolePermissions.map((permission) => (
                          <Badge key={permission.name} variant="secondary">
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