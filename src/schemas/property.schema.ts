import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  location: z.string().min(2, "Location is required"),
  address: z.string().min(3, "Address is required"),
  rentPrice: z.number().min(1, "Rent price is required"),
  bedrooms: z.number().min(1, "Minimum 1 bedroom"),
  bathrooms: z.number().min(1, "Minimum 1 bathroom"),
  image: z.url("Enter a valid image URL"),
  amenities: z.string().min(2, "Amenities are required"),
  categoryId: z.string().min(1, "Category is required"),
});
