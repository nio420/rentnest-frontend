/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLandlordProperties } from "@/services/landlord/landlord.service";
import Container from "@/components/shared/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PropertyActions from "@/components/landlord/PropertyActions";
import StatusBadge from "@/components/shared/StatusBadge";
import { Plus, MapPin, Building2, Eye } from "lucide-react";

export default async function PropertiesPage() {
  const result = await getLandlordProperties();
  const properties = result.data || [];

  return (
    <Container>
      {/* Header Section */}
      <div className="flex items-center justify-between py-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            My Properties
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Manage your listings, updates, and rental status.
          </p>
        </div>

        <Button asChild size="sm" className="gap-2 font-semibold shadow-sm">
          <Link href="/landlord/properties/new">
            <Plus className="h-4 w-4" />
            <span>Add Property</span>
          </Link>
        </Button>
      </div>

      {/* Empty State */}
      {properties.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-16 text-center bg-card/50">
          <Building2 className="h-12 w-12 text-muted-foreground/50 mb-3" />
          <h2 className="text-lg font-semibold text-foreground">
            No properties found
          </h2>
          <p className="text-xs text-muted-foreground mt-1 mb-4">
            You haven&apos;t listed any properties for rent yet.
          </p>
          <Button asChild size="sm" variant="outline">
            <Link href="/landlord/properties/new">Create Listing</Link>
          </Button>
        </div>
      ) : (
        /* Property Cards Grid */
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property: any) => (
            <div
              key={property.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card p-0 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                {/* Image & Category Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Card Info */}
                <div className="space-y-4 p-5">
                  {/* Title */}
                  <h2 className="line-clamp-1 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {property.title}
                  </h2>

                  {/* Rent (Left) ---------- Location (Right) */}
                  <div className="flex items-center justify-between border-y py-2.5 text-xs">
                    <div>
                      <span className="block text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                        Rent
                      </span>
                      <span className="text-sm font-extrabold text-primary">
                        ৳{property.rentPrice}
                        <span className="text-[10px] font-normal text-muted-foreground">
                          /mo
                        </span>
                      </span>
                    </div>

                    <div className="text-right max-w-[55%]">
                      <span className="block text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                        Location
                      </span>
                      <div className="flex items-center justify-end gap-1 font-semibold text-foreground mt-0.5">
                        <MapPin className="h-3 w-3 shrink-0 text-primary" />
                        <span className="line-clamp-1 text-xs">
                          {property.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Row */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-muted-foreground">
                      Status
                    </span>
                    <StatusBadge status={property.status} />
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="border-t bg-muted/20 p-4">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="gap-1.5 font-semibold text-xs border-primary/20 hover:bg-primary/5 hover:text-primary"
                  >
                    <Link href={`/landlord/properties/${property.id}`}>
                      <Eye className="h-3.5 w-3.5" />
                      <span>View</span>
                    </Link>
                  </Button>

                  <div className="flex items-center gap-2">
                    <PropertyActions property={property} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}