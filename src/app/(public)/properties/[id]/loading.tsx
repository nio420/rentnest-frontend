import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto space-y-6 py-10">
      <Skeleton className="h-100 w-full rounded-xl" />

      <Skeleton className="h-10 w-2/3" />

      <div className="grid gap-6 md:grid-cols-3">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  );
};

export default Loading;