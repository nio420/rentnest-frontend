const PaymentsLoading = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-10 w-64 animate-pulse rounded bg-muted" />

        <div className="h-4 w-80 animate-pulse rounded bg-muted" />
      </div>

      {/* Desktop Table Skeleton */}
      <div className="hidden overflow-hidden rounded-xl border md:block">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 border-b bg-muted p-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-5 animate-pulse rounded bg-muted-foreground/20"
            />
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-4 p-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, item) => (
                <div
                  key={item}
                  className="h-5 animate-pulse rounded bg-muted"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards Skeleton */}
      <div className="space-y-4 md:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-xl border p-5">
            <div className="space-y-4">
              <div className="h-6 w-48 animate-pulse rounded bg-muted" />

              <div className="h-4 w-32 animate-pulse rounded bg-muted" />

              <div className="h-4 w-full animate-pulse rounded bg-muted" />

              <div className="h-4 w-24 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsLoading;
