"use server";

import { cookies } from "next/headers";

export const createPaymentSession = async (rentalId: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized!",
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/payments/create`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${token}`,
      },

      body: JSON.stringify({
        rentalId,
      }),
    },
  );

  const result = await res.json();

  return result;
};
