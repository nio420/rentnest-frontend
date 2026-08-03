"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { updateRequestStatus } from "@/services/landlord/landlord.service";
import { RequestTableProps } from "@/lib/landlordType";
import StatusBadge from "../shared/StatusBadge";

const RequestTable = ({ requests }: RequestTableProps) => {
  const router = useRouter();

  const handleStatus = async (id: string, status: "APPROVED" | "REJECTED") => {
    const result = await updateRequestStatus(id, status);

    if (result.success) {
      toast.success(result.message);

      router.refresh();

      return;
    }

    toast.error(result.message);
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg border">
      <div className="min-w-225">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted">
            <tr>
              <th className="p-4 text-left">Property</th>
              <th className="p-4 text-left">Tenant</th>
              <th className="p-4 text-left">Move In Date</th>
              <th className="p-4 text-left">Duration</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-b">
                <td className="p-4">
                  <p className="font-medium">{request.property?.title}</p>

                  <p className="text-xs text-muted-foreground">
                    {request.property?.location}
                  </p>
                </td>

                <td className="p-4">
                  <p className="font-medium">{request.tenant?.name}</p>

                  <p className="text-xs text-muted-foreground">
                    {request.tenant?.email}
                  </p>
                </td>

                <td className="p-4">
                  {new Date(request.moveInDate).toLocaleDateString()}
                </td>

                <td className="p-4">{request.rentalMonths} Months</td>

                <td className="p-4">
                  <StatusBadge status={request.status} />
                </td>

                <td className="flex gap-2 p-4">
                  <Button
                    size="sm"
                    disabled={request.status === "COMPLETED"}
                    onClick={() => handleStatus(request.id, "APPROVED")}
                    className={
                      request.status === "COMPLETED"
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }
                  >
                    Approve
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={request.status === "COMPLETED"}
                    onClick={() => handleStatus(request.id, "REJECTED")}
                    className={
                      request.status === "COMPLETED"
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;
