const LoadingCard = () => {
  return (
    <div className="rounded-xl border p-6">
      <div className="h-4 w-32 animate-pulse rounded bg-muted" />

      <div className="mt-4 h-8 w-16 animate-pulse rounded bg-muted" />
    </div>
  );
};

const TenantLoading = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="h-10 w-64 animate-pulse rounded bg-muted" />

      {/* Dashboard Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>

      {/* Table Skeleton */}
      <div className="rounded-xl border">
        <div className="border-b p-4">
          <div className="h-6 w-48 animate-pulse rounded bg-muted" />
        </div>

        <div className="space-y-4 p-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex gap-4">
              <div className="h-5 w-40 animate-pulse rounded bg-muted" />

              <div className="h-5 w-24 animate-pulse rounded bg-muted" />

              <div className="h-5 w-20 animate-pulse rounded bg-muted" />

              <div className="h-5 w-24 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TenantLoading;
