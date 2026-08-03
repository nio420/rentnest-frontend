"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createPaymentSession } from "@/services/payment/payment.service";

const PayNowButton = ({ rentalId }: { rentalId: string }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const result = await createPaymentSession(rentalId);

    setLoading(false);

    if (result.success) {
      window.location.href = result.data.paymentUrl;
      return;
    }

    toast.error(result.message);
  };

  return (
    <Button
      size="sm"
      onClick={handlePayment}
      disabled={loading}
      className="cursor-pointer"
    >
      {loading ? "Redirecting..." : "Pay Now"}
    </Button>
  );
};

export default PayNowButton;
