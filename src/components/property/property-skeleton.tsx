import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PropertyCardSkeleton = () => {
  return (
    <Card className="overflow-hidden pt-0">
      <Skeleton className="h-56 w-full rounded-none" />

      <CardContent className="space-y-4">
        <Skeleton className="h-6 w-3/4" />

        <Skeleton className="h-4 w-1/2" />

        <div className="flex justify-between">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>

        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
};

export default PropertyCardSkeleton;