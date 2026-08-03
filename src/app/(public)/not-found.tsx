import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Property Not Found
      </h2>

      <p className="mt-3 text-muted-foreground">
        The page you are looking for does not exist.
      </p>

      <Button
        asChild
        className="mt-6"
      >
        <Link href="/">
          Back Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;