"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import PropertyCard from "@/components/property/property-card";
import PropertyCardSkeleton from "@/components/property/property-skeleton";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/services/property/property.service";
import { useQuery } from "@tanstack/react-query";
import { IProperty } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import FadeIn from "../shared/fade-in";


const directions: Array<"left" | "up" | "right" | "down"> = [
  "left",
  "up",
  "right",
  "down",
];

const FeaturedProperties = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["featured-properties"],
    queryFn: () => getProperties(),
  });

  const featuredProperties: IProperty[] = data?.data?.slice(0, 6) || [];

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex items-center justify-between">
          {/* Header text - Slides down */}
          <FadeIn direction="down" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold">Featured Properties</h2>

              <p className="text-muted-foreground">
                Explore our latest rental listings.
              </p>
            </div>
          </FadeIn>

          {/* Action button - Slides in from right */}
          <FadeIn direction="right" delay={0.2}>
            <Button
              asChild
              variant="outline"
              className="group gap-2 border-primary/30 font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white shadow-sm"
            >
              <Link href="/properties">
                <span>View All</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        {/* Loading state - Skeletons enter from different directions */}
        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <FadeIn
                key={index}
                direction={directions[index % directions.length]}
                delay={0.1 * (index + 1)}
              >
                <PropertyCardSkeleton />
              </FadeIn>
            ))}
          </div>
        )}

        {/* Error state - Slides in from left */}
        {isError && (
          <FadeIn direction="left" delay={0.2}>
            <p className="text-center text-destructive">
              Failed to load properties.
            </p>
          </FadeIn>
        )}

        {/* Empty state - Slides up */}
        {!isLoading && !isError && featuredProperties.length === 0 && (
          <FadeIn direction="up" delay={0.2}>
            <p className="text-center text-muted-foreground">
              No properties found.
            </p>
          </FadeIn>
        )}

        {/* Properties grid - Each card slides in from a unique direction (left, up, right, down) */}
        {!isLoading && !isError && featuredProperties.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property, index) => (
              <FadeIn
                key={property.id}
                direction={directions[index % directions.length]}
                delay={0.1 * (index + 1)}
              >
                <PropertyCard property={property} />
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProperties;
