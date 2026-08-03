"use client";

import { Button } from "@/components/ui/button";

const ErrorPage = ({
  reset,
}: {
  reset: () => void;
}) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">
        Something went wrong
      </h2>

      <Button onClick={reset}>
        Try Again
      </Button>
    </div>
  );
};

export default ErrorPage;