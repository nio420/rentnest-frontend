import DashboardCard from "@/components/landlord/DashboardCard";
import LandlordStatsChart from "@/components/shared/LandlordStatsChart";
import { getLandlordDashboard } from "@/services/landlord/landlord.service";

export default async function LandlordDashboard() {
  const result = await getLandlordDashboard();

  const stats = result?.data || {
    totalProperties: 0,
    activeRequests: 0,
    TotalEarnings: 0,
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <DashboardCard title="Total Properties" value={stats.totalProperties} />

        <DashboardCard title="Active Requests" value={stats.activeRequests} />

        <DashboardCard
          title="Total Earnings"
          value={`৳${stats.TotalEarnings}`}
        />

        {/* Spans across all 3 columns and prevents grid overflow */}
        <div className="md:col-span-3 min-w-0">
          <LandlordStatsChart
            totalProperties={stats.totalProperties}
            activeRequests={stats.activeRequests}
            totalEarnings={stats.TotalEarnings}
          />
        </div>
      </div>
    </div>
  );
}
