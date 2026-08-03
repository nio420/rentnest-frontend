/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { getLandlordPropertyById } from "@/services/landlord/landlord.service";
import StatusBadge from "@/components/shared/StatusBadge";

interface Props {
  params: Promise<{
    propertyId: string;
  }>;
}

export default async function PropertyDetailsPage({ params }: Props) {
  const { propertyId } = await params;

  const result = await getLandlordPropertyById(propertyId);

  const property = result.data;

  if (!property) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-xl font-semibold">Property not found</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="space-y-8 py-8">
        {/* Back Button */}
        <Button asChild variant="outline">
          <Link href="/landlord/properties">← Back to Properties</Link>
        </Button>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold">{property.title}</h1>

          <p className="text-muted-foreground">{property.location}</p>
        </div>

        {/* Main Information */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-xl">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-5 rounded-xl border p-6">
            <div>
              <p className="text-sm text-muted-foreground">Category</p>

              <p className="font-semibold">
                {property.category?.name || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Location</p>

              <p className="font-semibold">{property.location}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Address</p>

              <p className="font-semibold">{property.address}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Monthly Rent</p>

              <p className="text-xl font-bold">৳{property.rentPrice}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Bedrooms</p>

                <p className="font-semibold">{property.bedrooms}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Bathrooms</p>

                <p className="font-semibold">{property.bathrooms}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Status</p>

              <StatusBadge status={property.status} />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-3 text-xl font-bold">Description</h2>

          <p className="text-muted-foreground">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-3 text-xl font-bold">Amenities</h2>

          <div className="flex flex-wrap gap-2">
            {property.amenities?.map((item: string) => (
              <span
                key={item}
                className="rounded-md bg-muted px-3 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-bold">Reviews</h2>

          {property.reviews?.length > 0 ? (
            <div className="space-y-4">
              {property.reviews.map((review: any) => (
                <div key={review.id} className="rounded-lg border p-4">
                  <p className="font-semibold">{review.tenant?.name}</p>

                  <p>⭐ {review.rating}/5</p>

                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No reviews yet.</p>
          )}
        </div>
      </div>
    </Container>
  );
}
