"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createReview } from "@/services/review/review.service";
import { useRouter } from "next/navigation";

const ReviewForm = ({ propertyId }: { propertyId: string }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await createReview({
      propertyId,
      rating,
      comment,
    });

    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      setComment("");
      router.push("/tenant");
      return;
    }
    toast.error(result.message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-5">
      <h2 className="text-xl font-bold">Leave a Review</h2>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="rounded-md border p-2"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <option key={item} value={item}>
            {item} Star
          </option>
        ))}
      </select>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your experience..."
        className="min-h-28 w-full rounded-md border p-3"
      />

      <Button disabled={loading} className="cursor-pointer">
        {loading ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default ReviewForm;
