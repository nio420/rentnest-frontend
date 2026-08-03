const PropertiesLoading = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-9 w-52 animate-pulse rounded bg-muted" />

        <div className="h-10 w-32 animate-pulse rounded bg-muted" />
      </div>

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-xl border">
            {/* Image */}
            <div className="h-52 w-full animate-pulse bg-muted" />

            <div className="space-y-4 p-4">
              {/* Title */}
              <div className="h-6 w-40 animate-pulse rounded bg-muted" />

              {/* Description */}
              <div className="h-4 w-full animate-pulse rounded bg-muted" />

              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />

              {/* Info */}
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, item) => (
                  <div
                    key={item}
                    className="h-12 animate-pulse rounded bg-muted"
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <div className="h-9 flex-1 animate-pulse rounded bg-muted" />

                <div className="h-9 flex-1 animate-pulse rounded bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesLoading;
