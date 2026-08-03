"use server";

import { RentalRequestPayload } from "@/lib/rentalTypes";
import { cookies } from "next/headers";

export const createRentalRequest = async (payload: RentalRequestPayload) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Please login first!",
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/rentals`,
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
