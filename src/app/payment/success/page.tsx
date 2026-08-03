import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

interface Props {
  searchParams: Promise<{
    propertyId?: string;
  }>;
}

const PaymentSuccessPage = async ({ searchParams }: Props) => {
  const { propertyId } = await searchParams;

  return (
    <Container>
      <div className="flex min-h-[80vh] items-center justify-center py-10">
        <div className="w-full max-w-2xl rounded-2xl border bg-card p-8 text-center shadow-lg">
          {/* Success Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <span className="text-5xl">✅</span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold text-green-600">
            Payment Successful
          </h1>

          <p className="mt-3 text-lg text-muted-foreground">
            Thank you! Your rental payment has been completed successfully.
          </p>

          {/* Success Information */}
          <div className="mt-8 rounded-xl border bg-muted/40 p-6 text-left">
            <h2 className="mb-4 text-lg font-semibold">Payment Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Payment Status</span>

                <span className="font-semibold text-green-600">Successful</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Rental Status</span>

                <span className="font-semibold">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Confirmation</span>

                <span className="font-semibold">Sent Successfully</span>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-left">
            <p className="text-sm text-green-700">
              🎉 Your landlord has been notified about your payment. You can now
              manage your rental from your dashboard. If available, you can also
              leave a review for this property after your rental is completed.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-44">
              <Link href="/tenant">Go to Dashboard</Link>
            </Button>

            {propertyId && (
              <Button asChild size="lg" variant="outline" className="min-w-44">
                <Link href={`/tenant/reviews/${propertyId}`}>Leave Review</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PaymentSuccessPage;
