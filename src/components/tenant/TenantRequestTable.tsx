"use client";

import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/shared/StatusBadge";
import EmptyState from "@/components/shared/EmptyState";
import { TenantRequest } from "@/lib/tenantType";
import PayNowButton from "./PayNowButton";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

interface TenantRequestTableProps {
  requests: TenantRequest[];
}

const TenantRequestTable = ({ requests }: TenantRequestTableProps) => {
  const router = useRouter();

  const ActionButton = ({ request }: { request: TenantRequest }) => {
    if (request.status === "APPROVED") {
      return <PayNowButton rentalId={request.id} />;
    }

    if (
      request.status === "COMPLETED" &&
      (request.property.reviews?.length ?? 0) === 0
    ) {
      return (
        <Button
          size="sm"
          variant="outline"
          className="cursor-pointer"
          onClick={() => router.push(`/tenant/reviews/${request.property.id}`)}
        >
          Leave Review
        </Button>
      );
    }

    if (
      request.status === "COMPLETED" &&
      (request.property.reviews?.length ?? 0) > 0
    ) {
      return (
        <Button size="sm" variant="secondary" disabled>
          Review Done
        </Button>
      );
    }

    return <span className="text-sm text-muted-foreground">No action</span>;
  };

  return (
    <div className="mt-8">
      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {requests.length === 0 ? (
          <EmptyState
            title="No Rentals Yet"
            description="You haven't requested any rental property yet. Explore available properties and find your next home."
            icon={Home}
            buttonText="Browse Properties"
            buttonHref="/properties"
          />
        ) : (
          requests.map((request) => (
            <div key={request.id} className="rounded-xl border p-5 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  {request.property.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  📍 {request.property.location}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Move In</span>

                  <span>
                    {new Date(request.moveInDate).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>

                  <span>{request.rentalMonths} Months</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>

                  <span className="font-semibold">৳{request.totalAmount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>

                  <StatusBadge status={request.status} />
                </div>

                <div className="pt-3">
                  <ActionButton request={request} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-lg border md:block">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted">
            <tr>
              <th className="p-4 text-left">Property</th>

              <th className="p-4 text-left">Move In</th>

              <th className="p-4 text-left">Duration</th>

              <th className="p-4 text-left">Amount</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6">
                  <EmptyState
                    title="No Rentals Yet"
                    description="You haven't requested any rental property yet. Explore available properties and find your next home."
                    icon={Home}
                    buttonText="Browse Properties"
                    buttonHref="/properties"
                  />
                </td>
              </tr>
            ) : (
              requests.map((request) => (
                <tr key={request.id} className="border-b">
                  <td className="p-4">
                    <p className="font-medium">{request.property.title}</p>

                    <p className="text-xs text-muted-foreground">
                      {request.property.location}
                    </p>
                  </td>

                  <td className="p-4">
                    {new Date(request.moveInDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">{request.rentalMonths} Months</td>

                  <td className="p-4">৳{request.totalAmount}</td>

                  <td className="p-4">
                    <StatusBadge status={request.status} />
                  </td>

                  <td className="p-4">
                    <ActionButton request={request} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantRequestTable;
