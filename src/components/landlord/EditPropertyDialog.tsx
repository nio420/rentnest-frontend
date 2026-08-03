"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateProperty } from "@/services/landlord/updateProperty";
import { Property } from "@/lib/propertyTypes";


const EditPropertyDialog = ({ property }: { property: Property  }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: property.title,
    description: property.description,
    location: property.location,
    address: property.address,
    rentPrice: property.rentPrice,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    image: property.image,
    amenities: property.amenities.join(", "),
    categoryId: property.categoryId,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await updateProperty(property.id, {
      ...formData,
      rentPrice: Number(formData.rentPrice),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),

      amenities: formData.amenities.split(",").map((item) => item.trim()),
    });

    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      setOpen(false);
      router.refresh();
      return;
    }

    toast.error(result.message);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size='sm' className="flex-1 cursor-pointer">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Property</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="min-h-28 w-full rounded-md border p-3"
            placeholder="Description"
          />

          <Input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />

          <Input
            type="number"
            name="rentPrice"
            value={formData.rentPrice}
            onChange={handleChange}
            placeholder="Rent Price"
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="Bedrooms"
            />

            <Input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="Bathrooms"
            />
          </div>

          <Input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />

          <Input
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            placeholder="WiFi, Parking, Gym"
          />


          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Property"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPropertyDialog;
