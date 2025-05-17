import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types/auth';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface RoleAssignmentProps {
  userId: string;
  currentRole: Role;
  companyId?: string;
  onRoleAssigned?: () => void;
}

export function RoleAssignment({ userId, currentRole, companyId, onRoleAssigned }: RoleAssignmentProps) {
  const { canAssignRoleTo, getAvailableRoles } = useAuth();
  const [selectedRole, setSelectedRole] = useState<Role>(currentRole);
  const [isLoading, setIsLoading] = useState(false);

  const availableRoles = getAvailableRoles();

  const handleRoleAssignment = async () => {
    if (!canAssignRoleTo(selectedRole)) {
      toast.error('You do not have permission to assign this role');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/assign-role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          role: selectedRole,
          companyId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to assign role');
      }

      toast.success('Role assigned successfully');
      onRoleAssigned?.();
    } catch (error) {
      toast.error('Failed to assign role');
      console.error('Role assignment error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Select
        value={selectedRole}
        onValueChange={(value) => setSelectedRole(value as Role)}
        disabled={isLoading}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent>
          {availableRoles.map((role) => (
            <SelectItem key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1).replace('_', ' ')}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={handleRoleAssignment}
        disabled={isLoading || selectedRole === currentRole}
      >
        {isLoading ? 'Assigning...' : 'Assign Role'}
      </Button>
    </div>
  );
} 