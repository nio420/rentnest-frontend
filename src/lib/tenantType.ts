type IStatus = "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED";
export type PaymentStatus = "PAID" | "UNPAID" | "FAILED";

export interface TenantRequest {
  id: string;
  moveInDate: string;
  rentalMonths: number;
  totalAmount: number;
  status: IStatus

  property: {
    id: string;
    title: string;
    location: string;
    image: string;

    reviews?: {
      id: string;
    }[];
  };
}

export interface TenantPayment {
  id: string;
  amount: number;
  transactionId: string;
  status: PaymentStatus;
  paidAt: string;

  rentalRequest: {
    property: {
      title: string;
      location: string;
    };
  };
}
