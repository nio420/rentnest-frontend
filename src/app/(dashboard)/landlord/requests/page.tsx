import Container from "@/components/shared/Container";
import RequestTable from "@/components/landlord/RequestTable";
import { getLandlordRequests } from "@/services/landlord/landlord.service";

export default async function LandlordRequestsPage() {
  const result = await getLandlordRequests();

  const requests = result.data || [];

  return (
    <Container>
      <div className="py-6">
        <h1 className="text-2xl font-bold">
          Rental Requests
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage incoming rental requests from tenants
        </p>
      </div>

      {requests.length === 0 ? (
        <div className="rounded-lg border py-20 text-center">
          <h2 className="text-lg font-semibold">
            No rental requests found
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            You do not have any pending rental requests yet.
          </p>
        </div>
      ) : (
        <RequestTable requests={requests} />
      )}
    </Container>
  );
}