import Container from "@/components/shared/Container";
import PropertyCardSkeleton from "@/components/property/property-skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="mb-10">
          <div className="h-10 w-80 animate-pulse rounded bg-muted" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Loading;