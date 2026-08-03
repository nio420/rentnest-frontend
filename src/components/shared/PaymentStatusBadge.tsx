import { Badge } from "@/components/ui/badge";
import { PaymentStatus } from "@/lib/tenantType";

const PaymentStatusBadge = ({ status }: { status: PaymentStatus }) => {
  const statusStyle = {
    PAID: "bg-green-100 text-green-700",
    UNPAID: "bg-yellow-100 text-yellow-700",
    FAILED: "bg-red-100 text-red-700",
  };

  return <Badge className={statusStyle[status]}>{status}</Badge>;
};

export default PaymentStatusBadge;
