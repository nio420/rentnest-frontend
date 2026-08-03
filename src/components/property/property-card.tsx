import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IProperty } from "@/lib/types";
import { Bed, Bath, MapPin, ArrowRight } from "lucide-react";

interface PropertyCardProps {
  property: IProperty;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div>
        {/* Flush Image Container with Zero Top Padding */}
        <div className="relative h-56 w-full overflow-hidden bg-muted">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark Overlay Gradient for High Text Visibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

          {/* Floating Category Tag */}
          <div className="absolute left-3.5 top-3.5">
            <Badge className="bg-background/90 text-xs font-semibold text-foreground backdrop-blur-md shadow-sm border border-white/20">
              {property.category.name}
            </Badge>
          </div>

          {/* High Contrast Floating Price Tag */}
          <div className="absolute bottom-3.5 right-3.5 rounded-xl bg-black/70 px-3 py-1.5 text-white shadow-md backdrop-blur-md border border-white/10">
            <span className="text-base font-extrabold text-white">
              ৳{property.rentPrice}
            </span>
            <span className="text-[11px] font-medium text-white/80"> / mo</span>
          </div>
        </div>

        {/* Card Content with Clear Contrast & Layout */}
        <CardContent className="space-y-4 p-5">
          {/* Title & Location */}
          <div className="space-y-1.5">
            <h3 className="line-clamp-1 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {property.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="line-clamp-1">
                {property.location}, {property.address}
              </span>
            </div>
          </div>

          {/* Property Specifications */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex items-center gap-1.5 rounded-lg border bg-muted/40 px-3 py-1.5 text-xs font-semibold text-foreground">
              <Bed className="h-4 w-4 text-primary" />
              <span>{property.bedrooms} Beds</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-lg border bg-muted/40 px-3 py-1.5 text-xs font-semibold text-foreground">
              <Bath className="h-4 w-4 text-primary" />
              <span>{property.bathrooms} Baths</span>
            </div>
          </div>

          {/* Amenity Badges */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {property.amenities.slice(0, 3).map((amenity) => (
                <Badge
                  key={amenity}
                  variant="secondary"
                  className="rounded-md font-medium text-[11px] px-2.5 py-0.5"
                >
                  {amenity}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </div>

      {/* Footer Action Button */}
      <div className="px-5 pb-5 pt-0">
        <Button
          asChild
          className="group/btn w-full gap-2 font-semibold shadow-sm"
        >
          <Link href={`/properties/${property.id}`}>
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default PropertyCard;
