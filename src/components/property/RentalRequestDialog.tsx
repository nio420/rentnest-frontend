"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createRentalRequest } from "@/services/rental/createRentalRequest";

const rentalSchema = z.object({
  moveInDate: z.string().min(1, "Move in date is required"),
  rentalMonths: z.number().min(1, "Rental months must be at least 1"),
});

type RentalFormValues = z.infer<typeof rentalSchema>;

const RentalRequestDialog = ({
  propertyId,
  setRequested,
}: {
  propertyId: string;
  setRequested: (value: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RentalFormValues>({
    resolver: zodResolver(rentalSchema),
    defaultValues: {
      moveInDate: "",
      rentalMonths: 1,
    },
  });

  const onSubmit = async (data: RentalFormValues) => {
    setLoading(true);

    const result = await createRentalRequest({
      propertyId,
      moveInDate: data.moveInDate,
      rentalMonths: data.rentalMonths,
    });

    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      localStorage.setItem(`requested-${propertyId}`, "true");
      reset();
      setRequested(true);
      setOpen(false);
      return;
    }
    toast.error(result.message);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="cursor-pointer">
          Request to Rent
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit Rental Request</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Move In Date
            </label>

            <input
              type="date"
              {...register("moveInDate")}
              className="w-full rounded-md border p-2"
            />

            {errors.moveInDate && (
              <p className="mt-1 text-sm text-red-500">
                {errors.moveInDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Rental Duration (Months)
            </label>

            <input
              type="number"
              {...register("rentalMonths", {
                valueAsNumber: true,
              })}
              className="w-full rounded-md border p-2"
            />

            {errors.rentalMonths && (
              <p className="mt-1 text-sm text-red-500">
                {errors.rentalMonths.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RentalRequestDialog;
