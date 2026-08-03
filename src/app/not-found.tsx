import Link from "next/link";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const RouteNotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <Search className="h-12 w-12 text-primary" />
          </div>

          {/* Error */}
          <h1 className="mt-8 text-7xl font-bold text-primary">404</h1>

          <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

          <p className="mt-4 text-muted-foreground">
            Sorry, the page you are looking for does not exist or may have been
            moved. Let’s get you back to finding your perfect home.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back Home
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RouteNotFound;
