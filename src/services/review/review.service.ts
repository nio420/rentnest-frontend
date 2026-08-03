"use server";

import { cookies } from "next/headers";

type IReviewPayload = {
  propertyId: string;
  rating: number;
  comment: string;
};

export const createReview = async (payload: IReviewPayload) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/reviews`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${token}`,
      },

      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();
  return result;
};
