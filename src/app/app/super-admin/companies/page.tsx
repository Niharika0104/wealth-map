import { getCompanies } from "../actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Eye } from "lucide-react";
import CompanyActions from "./company-actions";
import Link from "next/link";

export default async function CompaniesPage() {
  const companies = await getCompanies();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Companies</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Email</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Status</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Members</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Created</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {companies.map((company: any) => (
                  <tr key={company.id}>
                    <td className="px-4 py-2 font-medium flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      {company.name}
                    </td>
                    <td className="px-4 py-2">{company.email || <span className="text-muted-foreground">N/A</span>}</td>
                    <td className="px-4 py-2">
                      <Badge variant={company.status === "active" ? "default" : "destructive"}>
                        {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-4 py-2">{company.memberCount}</td>
                    <td className="px-4 py-2">{new Date(company.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-2 space-x-2">
                      <Link href={`/app/super-admin/companies/${company.id}`}>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                      </Link>
                      <CompanyActions companyId={company.id} status={company.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 