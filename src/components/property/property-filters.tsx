/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category/category.service";
import { ICategory } from "@/lib/types";

const amenitiesList = ["WiFi", "Parking", "GYM"];

const PropertyFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const categories: ICategory[] = data?.data || [];

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || "",
  );

  const [location, setLocation] = useState(searchParams.get("location") || "");

  const [category, setCategory] = useState(searchParams.get("category") || "");

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");

  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const [amenities, setAmenities] = useState<string[]>(
    searchParams.get("amenities")
      ? searchParams.get("amenities")!.split(",")
      : [],
  );

  const updateURL = () => {
    const params = new URLSearchParams();

    if (searchTerm.trim()) params.set("searchTerm", searchTerm.trim());

    if (location.trim()) params.set("location", location.trim());

    if (category && category !== "all") params.set("category", category);

    if (minPrice) params.set("minPrice", minPrice);

    if (maxPrice) params.set("maxPrice", maxPrice);

    if (amenities.length > 0) params.set("amenities", amenities.join(","));

    router.replace(`/properties?${params.toString()}`, {
      scroll: false,
    });

    router.refresh();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateURL();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, location, category, minPrice, maxPrice, amenities]);

  return (
    <div className="mb-8 rounded-2xl border bg-muted/30 p-4 shadow-sm md:p-5">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Input
          placeholder="Search property..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-10 bg-background md:w-80"
        />

        <Button onClick={updateURL} className="h-10 px-6 cursor-pointer">
          Search
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="h-10 bg-background"
        />

        <Select
          value={category}
          onValueChange={(value) => setCategory(value === "all" ? "" : value)}
        >
          <SelectTrigger className="h-10 bg-background">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>

            {categories.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="h-10 bg-background"
        />

        <Input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="h-10 bg-background"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 rounded-xl bg-background p-3">
        {amenitiesList.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm">
            <Checkbox
             className="h-4 w-4 border-2 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground cursor-pointer"
              checked={amenities.includes(item)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setAmenities((prev) => [...prev, item]);
                } else {
                  setAmenities((prev) => prev.filter((a) => a !== item));
                }
              }}
            />

            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end">
        <Button
          variant="destructive"
          className="h-9 cursor-pointer px-6"
          onClick={() => {
            setSearchTerm("");
            setLocation("");
            setCategory("");
            setMinPrice("");
            setMaxPrice("");
            setAmenities([]);

            router.replace("/properties", {
              scroll: false,
            });

            router.refresh();
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilter;
