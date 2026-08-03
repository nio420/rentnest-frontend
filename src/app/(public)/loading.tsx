import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto space-y-8 py-10">
      <Skeleton className="h-12 w-72" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-4 rounded-lg border p-4">
            <Skeleton className="h-52 w-full rounded-lg" />

            <Skeleton className="h-6 w-3/4" />

            <Skeleton className="h-4 w-1/2" />

            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
