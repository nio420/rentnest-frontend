import Container from "@/components/shared/Container";
import TenantRequestTable from "@/components/tenant/TenantRequestTable";
import { TenantRequest } from "@/lib/tenantType";
import { getTenantRequests } from "@/services/tenant/tenant.service";

const MyRentalsPage = async () => {
  const result = await getTenantRequests();

  const requests: TenantRequest[] = result.data || [];

  return (
    <Container>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Rentals</h1>

          <p className="text-muted-foreground">
            View your rental requests, payment status and reviews.
          </p>
        </div>

        <TenantRequestTable requests={requests} />
      </div>
    </Container>
  );
};

export default MyRentalsPage;
