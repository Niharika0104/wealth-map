import { DataTable } from "@/components/custom-components/data-table";
import { columns } from "./columns";
import { getCompanies } from "./actions";

export default async function SuperAdminDashboard() {
  const companies = await getCompanies();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Companies Overview</h1>
        <div className="flex gap-4">
          <button className="btn btn-primary">Export Data</button>
          <button className="btn btn-secondary">Generate Report</button>
        </div>
      </div>
      <DataTable columns={columns} data={companies} />
    </div>
  );
} 