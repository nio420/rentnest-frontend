import Link from "next/link";
import { Button } from "@/components/ui/button";

const GlobalNotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold text-primary">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">Access Denied</h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        You do not have permission to access this page or it does not exist.
      </p>

      <Button asChild className="mt-8">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default GlobalNotFoundPage;
