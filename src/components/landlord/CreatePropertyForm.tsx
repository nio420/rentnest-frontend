"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { propertySchema } from "@/schemas/property.schema";
import { createProperty } from "@/services/landlord/createProperty";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
}

export interface ICreatePropertyPayload {
  title: string;
  description: string;
  location: string;
  address: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  amenities: string;
  categoryId: string;
}

const CreatePropertyForm = ({ categories }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ICreatePropertyPayload>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      address: "",
      rentPrice: 0,
      bedrooms: 1,
      bathrooms: 1,
      image: "",
      amenities: "",
      categoryId: "",
    },
  });

  const onSubmit = async (data: ICreatePropertyPayload) => {
    const result = await createProperty(data);

    if (result.success) {
      toast.success(result.message);
      reset();
      router.replace("/landlord/properties");
      return;
    }

    toast.error(result.message);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 md:grid-cols-2"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">Title</label>
        <Input {...register("title")} placeholder="Property title" />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Location</label>
        <Input {...register("location")} placeholder="Dhaka" />
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium">Description</label>

        <textarea
          rows={4}
          {...register("description")}
          className="w-full rounded-md border p-3"
          placeholder="Write property description..."
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Address</label>

        <Input {...register("address")} placeholder="House, Road..." />

        {errors.address && (
          <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Monthly Rent</label>

        <Input
          type="number"
          {...register("rentPrice", { valueAsNumber: true })}
        />

        {errors.rentPrice && (
          <p className="mt-1 text-sm text-red-500">
            {errors.rentPrice.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Bedrooms</label>

        <Input
          type="number"
          {...register("bedrooms", { valueAsNumber: true })}
        />

        {errors.bedrooms && (
          <p className="mt-1 text-sm text-red-500">{errors.bedrooms.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Bathrooms</label>

        <Input
          type="number"
          {...register("bathrooms", { valueAsNumber: true })}
        />

        {errors.bathrooms && (
          <p className="mt-1 text-sm text-red-500">
            {errors.bathrooms.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Image URL</label>

        <Input {...register("image")} placeholder="https://..." />

        {errors.image && (
          <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Amenities</label>

        <Input {...register("amenities")} placeholder="Wifi, Parking, Gym" />

        {errors.amenities && (
          <p className="mt-1 text-sm text-red-500">
            {errors.amenities.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Category</label>

        <select
          {...register("categoryId")}
          className="w-fit rounded-md border p-2 cursor-pointer"
        >
          <option value="" >Select Category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id} className="cursor-pointer">
              {category.name}
            </option>
          ))}
        </select>

        {errors.categoryId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.categoryId.message}
          </p>
        )}
      </div>

      <div className="md:col-span-2">
        <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Property"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePropertyForm;
