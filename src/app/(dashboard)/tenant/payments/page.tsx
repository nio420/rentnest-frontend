import Container from "@/components/shared/Container";
import EmptyState from "@/components/shared/EmptyState";
import PaymentStatusBadge from "@/components/shared/PaymentStatusBadge";
import { TenantPayment } from "@/lib/tenantType";
import { getTenantPayments } from "@/services/tenant/tenant.service";
import { CreditCard } from "lucide-react";

const PaymentsPage = async () => {
  const result = await getTenantPayments();
  const payments: TenantPayment[] = result.data || [];

  return (
    <Container>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Payment History</h1>

          <p className="text-muted-foreground">
            View all your completed rental payments.
          </p>
        </div>

        {/* MObile Cards */}
        <div className="space-y-4 md:hidden">
          {payments.length === 0 ? (
            <EmptyState
              title="No Payments Found"
              description="Your payment history will appear here after completing a rental payment."
              icon={CreditCard}
            />
          ) : (
            payments.map((payment) => (
              <div
                key={payment.id}
                className="rounded-xl border bg-background p-5 shadow-sm"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">
                    {payment.rentalRequest.property.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    📍 {payment.rentalRequest.property.location}
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Amount</span>

                    <span className="font-semibold">৳{payment.amount}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status</span>

                    <PaymentStatusBadge status={payment.status} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Paid On</span>

                    <span>{new Date(payment.paidAt).toLocaleDateString()}</span>
                  </div>

                  <div>
                    <p className="mb-1 text-muted-foreground">Transaction ID</p>

                    <p className="break-all rounded-md bg-muted p-2 font-mono text-xs">
                      {payment.transactionId}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/*  Desktop Table */}
        <div className="hidden overflow-x-auto rounded-xl border md:block">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left">Property</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Transaction</th>
                <th className="p-4 text-left">Paid On</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="p-8 text-center text-muted-foreground"
                  >
                    No payments found.
                  </td>
                </tr>
              ) : (
                payments.map((payment) => (
                  <tr key={payment.id} className="border-t">
                    <td className="p-4">
                      <div>
                        <p className="font-medium">
                          {payment.rentalRequest.property.title}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {payment.rentalRequest.property.location}
                        </p>
                      </div>
                    </td>

                    <td className="p-4 font-semibold">৳{payment.amount}</td>

                    <td className="p-4">
                      <span className="font-mono text-xs break-all">
                        {payment.transactionId}
                      </span>
                    </td>

                    <td className="p-4">
                      {new Date(payment.paidAt).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <PaymentStatusBadge status={payment.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default PaymentsPage;
