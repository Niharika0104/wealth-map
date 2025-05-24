"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CompanyAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user) {
      router.push("/auth/signin");
      return;
    }

    // Redirect super admins to their dashboard
    if (session.user.role === "SUPER_ADMIN") {
      router.push("/app/super-admin");
      return;
    }

    // Allow both COMPANY_ADMIN and EMPLOYEE roles
    const isCompanyAdmin = session.user.role === "COMPANY_ADMIN";
    const isEmployee = session.user.role === "EMPLOYEE";

    if (!isCompanyAdmin && !isEmployee) {
      router.push("/app/employee");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-y-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
} 