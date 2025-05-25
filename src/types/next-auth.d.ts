import { Permission } from "@/hooks/usePermissions";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: "SUPER_ADMIN" | "COMPANY_ADMIN" | "EMPLOYEE";
      permissions?: Permission[];
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    permissions?: Permission[];
  }
} 