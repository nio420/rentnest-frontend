import Container from "@/components/shared/Container";
import TenantRequestChart from "@/components/shared/TenantRequestChart";
import RecentActivity from "@/components/tenant/RecentActivity";
import { TenantPayment, TenantRequest } from "@/lib/tenantType";
import {
  getTenantPayments,
  getTenantRequests,
} from "@/services/tenant/tenant.service";

const TenantDashboard = async () => {
  const requestsResponse = await getTenantRequests();
  console.log("REQUESTS RESPONSE:", requestsResponse);
  const paymentsResponse = await getTenantPayments();
  console.log("PAYMENTS RESPONSE:", paymentsResponse);

  const requests: TenantRequest[] = requestsResponse.data || [];
  const payments: TenantPayment[] = paymentsResponse.data || [];

  const approvedRequests = requests.filter(
    (item) => item.status === "APPROVED",
  );

  const pendingRequests = requests.filter((item) => item.status === "PENDING");

  const rejectedRequests = requests.filter(
    (item) => item.status === "REJECTED",
  );

  const completedRequests = requests.filter(
    (item) => item.status === "COMPLETED",
  );

  const totalPayments = payments.reduce(
    (total, item) => total + item.amount,
    0,
  );

  return (
    <Container>
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6 shadow-sm">
          <p className="text-muted-foreground">Total Requests</p>

          <h2 className="mt-2 text-3xl font-bold">{requests.length}</h2>
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <p className="text-muted-foreground">Approved Requests</p>

          <h2 className="mt-2 text-3xl font-bold">{approvedRequests.length}</h2>
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <p className="text-muted-foreground">Total Payments</p>

          <h2 className="mt-2 text-3xl font-bold">৳{totalPayments}</h2>
        </div>
        <RecentActivity
          activities={[
            ...payments.slice(0, 3).map((payment) => ({
              id: payment.id,
              title: "Payment Completed",
              description: `Payment of ৳${payment.amount} completed`,
              icon: "payment" as const,
            })),

            ...requests
              .filter((item) => item.status === "COMPLETED")
              .slice(0, 2)
              .map((request) => ({
                id: request.id,
                title: "Rental Completed",
                description: `${request.property.title} rental completed`,
                icon: "rental" as const,
              })),
          ]}
        />

        <div className="md:col-span-2">
          <TenantRequestChart
            pending={pendingRequests.length}
            approved={approvedRequests.length}
            rejected={rejectedRequests.length}
            completed={completedRequests.length}
          />
        </div>
      </div>
    </Container>
  );
};

export default TenantDashboard;
