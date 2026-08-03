import Container from "@/components/shared/Container";
import PropertyCardSkeleton from "@/components/property/property-skeleton";

const Loading = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Loading;