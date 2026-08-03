import Container from "@/components/shared/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-lg transition-all">
          {/* Animated Icon Header */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <XCircle className="h-10 w-10 animate-pulse" />
          </div>

          {/* Heading & Context */}
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Payment Cancelled
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Your transaction was not completed. No charges were made to your
            account.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild size="lg" className="w-full gap-2">
              <Link href="/tenant">
                <ArrowLeft className="h-4 w-4" />
                Back To Dashboard
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full gap-2"
            >
              <Link href="/tenant/rental-requests">
                <RefreshCw className="h-4 w-4" />
                Try Payment Again
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
