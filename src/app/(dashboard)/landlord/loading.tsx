const LoadingCard = () => {
  return (
    <div className="rounded-xl border p-6">
      <div className="h-4 w-32 animate-pulse rounded bg-muted" />

      <div className="mt-4 h-8 w-20 animate-pulse rounded bg-muted" />
    </div>
  );
};

const LandlordLoading = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="h-10 w-56 animate-pulse rounded bg-muted" />

      {/* Dashboard Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <LoadingCard />

        <LoadingCard />

        <LoadingCard />
      </div>

      {/* Recent Section Placeholder */}
      <div className="rounded-xl border p-6">
        <div className="mb-5 h-6 w-48 animate-pulse rounded bg-muted" />

        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="h-5 w-40 animate-pulse rounded bg-muted" />

              <div className="h-5 w-20 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandlordLoading;
