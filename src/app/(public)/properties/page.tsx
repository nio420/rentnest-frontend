import PropertyFilter from "@/components/property/property-filters";
import PropertyGrid from "@/components/property/property-grid";
import Container from "@/components/shared/Container";
import FadeIn from "@/components/shared/fade-in";
import { IProps } from "@/lib/types";
import { getProperties } from "@/services/property/property.service";
import Link from "next/link";

const PropertiesPage = async ({ searchParams }: IProps) => {
  const params = await searchParams;

  const query = new URLSearchParams();

  if (params.searchTerm) query.set("searchTerm", params.searchTerm);

  if (params.location) query.set("location", params.location);

  if (params.category) query.set("category", params.category);

  if (params.minPrice) query.set("minPrice", params.minPrice);

  if (params.maxPrice) query.set("maxPrice", params.maxPrice);

  if (params.amenities) query.set("amenities", params.amenities);

  const data = await getProperties(query.toString());

  const allProperties = data.data || [];

  // Pagination
  const currentPage = Number(params.page) || 1;

  const itemsPerPage = 9;

  const totalPages = Math.ceil(allProperties.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const properties = allProperties.slice(startIndex, startIndex + itemsPerPage);

  const createPageUrl = (page: number) => {
    const newParams = new URLSearchParams(query.toString());

    newParams.set("page", page.toString());

    return `/properties?${newParams.toString()}`;
  };

  return (
    <section className="py-10">
      <Container>
        <div className="mb-8">
          <FadeIn delay={0.5} direction="down">
            <h1 className="text-3xl font-bold">Browse Properties</h1>
          </FadeIn>
          <FadeIn delay={0.5} direction="left">
            <p className="mt-2 text-muted-foreground">
              Find your perfect rental property.
            </p>
          </FadeIn>
        </div>
        <PropertyFilter />
        <PropertyGrid properties={properties} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={createPageUrl(currentPage - 1)}
                className="rounded-md border px-4 py-2 hover:bg-muted"
              >
                Previous
              </Link>
            )}

            {Array.from({
              length: totalPages,
            }).map((_, index) => {
              const page = index + 1;

              return (
                <Link
                  key={page}
                  href={createPageUrl(page)}
                  className={`rounded-md px-4 py-2 border transition ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {page}
                </Link>
              );
            })}

            {currentPage < totalPages && (
              <Link
                href={createPageUrl(currentPage + 1)}
                className="rounded-md border px-4 py-2 hover:bg-muted"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default PropertiesPage;
