import PropertyCard from "./property-card";
import PropertyCardSkeleton from "./property-skeleton";
import { IProperty } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PropertyGridProps {
  properties: IProperty[];
  isLoading?: boolean;
}

const PropertyGrid = ({
  properties,
  isLoading = false,
}: PropertyGridProps) => {
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <PropertyCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-20 text-center">
        <h2 className="text-2xl font-semibold">
          No Properties Found
        </h2>

        <p className="mt-2 max-w-md text-muted-foreground">
          We are unable to find any property matching your filters.
          Try changing your search criteria.
        </p>

        <Button
          asChild
          className="mt-6"
        >
          <Link href="/properties">
            Clear Filters
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
};

export default PropertyGrid;