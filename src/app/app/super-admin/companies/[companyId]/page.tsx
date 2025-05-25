import { PrismaClient } from "@/generated/prisma";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CompanyActions from "../company-actions";
import CompanyIdCopy from "./company-id-copy";

const prisma = new PrismaClient();

export default async function CompanyDetailsPage({ params }: { params: { companyId: string } }) {
  const company = await prisma.organization.findUnique({
    where: { id: params.companyId },
    include: {
      members: {
        include: { user: true },
      },
    },
  });

  if (!company) {
    return <div className="p-8">Company not found.</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <Link href="/app/super-admin/companies">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Company Details</h2>
        <div className="ml-auto flex gap-2">
          <CompanyActions companyId={company.id} status={company.status} />
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{company.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">Status:</span>
            <Badge variant={company.status === "active" ? "default" : "destructive"}>
              {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Company ID:</span>
            <span className="font-mono text-xs bg-muted px-2 py-1 rounded">{company.id}</span>
            <CompanyIdCopy id={company.id} />
          </div>
          <div><span className="font-medium">Email:</span> {company.metadata ? JSON.parse(company.metadata).billingEmail : "N/A"}</div>
          <div><span className="font-medium">Created:</span> {company.createdAt.toLocaleDateString()}</div>
          <div><span className="font-medium">Members:</span> {company.members.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Email</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {company.members.map((member: any) => (
                <tr key={member.id}>
                  <td className="px-4 py-2">{member.user?.name || "Unnamed User"}</td>
                  <td className="px-4 py-2">{member.user?.email || "N/A"}</td>
                  <td className="px-4 py-2">{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
} 