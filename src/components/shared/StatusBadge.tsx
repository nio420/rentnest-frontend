import { Badge } from "@/components/ui/badge";

type Status = "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED" | "INACTIVE" | "AVAILABLE" | "RENTED" | "PAID";

const StatusBadge = ({ status }: { status: Status }) => {
  const statusStyle = {
    PENDING: "bg-yellow-100 text-yellow-700",
    APPROVED: "bg-blue-100 text-blue-700",
    REJECTED: "bg-red-100 text-red-700",
    ACTIVE: "bg-green-100 text-green-700",
    COMPLETED: "bg-gray-100 text-gray-700",
    INACTIVE: "bg-gray-100 text-gray-700",
    AVAILABLE: "bg-green-100 text-green-700",
    RENTED: "bg-purple-100 text-purple-700",
    PAID: "bg-green-100 text-green-700",
  };

  return <Badge className={statusStyle[status]}>{status}</Badge>;
};

export default StatusBadge;
