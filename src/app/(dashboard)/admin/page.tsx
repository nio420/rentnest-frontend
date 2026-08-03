import AdminStats from "@/components/admin/AdminStats";
import { getAdminDashboardStats } from "@/services/admin/admin.service";

const AdminDashboardPage = async () => {
  const response = await getAdminDashboardStats();
  const stats = response?.data || {
    totalUsers: 0,
    totalProperties: 0,
    pendingRequests: 0,
    completedRentals: 0,
  };

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold"> Dashboard</h1>

        <p className="text-muted-foreground">
          Monitor RentNest platform activity.
        </p>
      </div>

      <AdminStats stats={stats} />
    </section>
  );
};

export default AdminDashboardPage;
