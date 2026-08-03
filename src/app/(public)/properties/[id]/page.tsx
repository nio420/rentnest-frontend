/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSingleProperty } from "@/services/property/property.service";
import StatusBadge from "@/components/shared/StatusBadge";
import { getMe } from "@/services/auth/getMe";
import LoginRequestButton from "@/components/shared/LoginRequestButton";
import RentalRequestButton from "@/components/property/RentalRequestButton";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FadeIn from "@/components/shared/fade-in";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const PropertyDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const user = await getMe();

  const response = await getSingleProperty(id);

  if (!response?.data) {
    notFound();
  }
  const property = response.data;

  const handleRequestButton = () => {
    if (!user.success) {
      return <LoginRequestButton />;
    }
    if (user.data.role === "TENANT") {
      return <RentalRequestButton propertyId={property.id} />;
    }

    return null;
  };

  return (
    <section className="py-10">
      <Container>
        <Breadcrumb title={property.title} />
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <div>
            <FadeIn delay={0.5} direction="right">
              <Image
                src={property.image}
                alt={property.title}
                width={800}
                height={600}
                className="h-100 w-full rounded-xl object-cover"
              />
            </FadeIn>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <FadeIn delay={0.5} direction="left">
                <h1 className="text-3xl font-bold">{property.title}</h1>

                <p className="mt-3 text-muted-foreground">
                  {property.description}
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <FadeIn delay={0.5} direction="left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{property.location}</p>
                </FadeIn>
              </div>

              <div>
                <FadeIn delay={0.5} direction="left">
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">{property.address}</p>
                </FadeIn>
              </div>

              <div>
                <FadeIn delay={0.5} direction="left">
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                  <p className="font-medium">{property.bedrooms}</p>
                </FadeIn>
              </div>

              <div>
                <FadeIn delay={0.5} direction="left">
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                  <p className="font-medium">{property.bathrooms}</p>
                </FadeIn>
              </div>
            </div>

            <div>
              <FadeIn delay={0.5} direction="left">
                <p className="text-sm text-muted-foreground">Rent Price</p>
                <p className="text-2xl font-bold">
                  ৳ {property.rentPrice}/month
                </p>
              </FadeIn>
            </div>

            <div className="flex gap-5">
              <FadeIn
                delay={0.5}
                direction="left"
                className="flex items-center gap-2"
              >
                <Badge>{property.category.name}</Badge>
                <StatusBadge status={property.status} />
              </FadeIn>
            </div>

            {/* Request CTA */}
            <FadeIn delay={0.5} direction="right">
              {property.status === "AVAILABLE" ? (
                handleRequestButton()
              ) : (
                <Button size="lg" disabled>
                  Currently Unavailable
                </Button>
              )}
            </FadeIn>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-12">
          <FadeIn delay={0.5} direction="down">
            <h2 className="text-2xl font-bold">Amenities</h2>{" "}
          </FadeIn>

          <div className="mt-4 flex flex-wrap gap-3">
            {property.amenities.map((item: string) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Landlord */}
        <div className="mt-12 rounded-xl border p-6">
          <FadeIn delay={0.5} direction="left">
            <h2 className="text-2xl font-bold">Landlord Information</h2>{" "}
          </FadeIn>

          <div className="mt-5 space-y-2">
            <FadeIn delay={0.5} direction="left">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {property.landlord.name}
              </p>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                {property.landlord.email}
              </p>

              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {property.landlord.phone || "N/A"}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12">
          <FadeIn delay={0.5} direction="down">
            <h2 className="text-2xl font-bold">Reviews</h2>{" "}
          </FadeIn>

          {property.reviews.length === 0 ? (
            <FadeIn delay={0.5} direction="left">
              <p className="mt-4 text-muted-foreground">No reviews yet.</p>{" "}
            </FadeIn>
          ) : (
            <div className="mt-4 space-y-4">
              {property.reviews.map((review: any) => (
                <div key={review.id} className="rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <span>⭐ {review.rating}/5</span>
                  </div>

                  <p className="mt-2 text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PropertyDetailsPage;
