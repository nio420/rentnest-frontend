"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  reset: () => void;
}

const Error = ({ reset }: ErrorProps) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold">
        Something went wrong!
      </h2>

      <p className="mt-3 text-muted-foreground">
        We could not load this page. Please try again.
      </p>

      <Button
        className="mt-6"
        onClick={() => reset()}
      >
        Try Again
      </Button>
    </div>
  );
};

export default Error;