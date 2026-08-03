"use server";

import { cookies } from "next/headers";

export const getTenantRequests = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/rentals`,
    {
      headers: {
        cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    },
  );
  const result = await res.json();

  return result;
};

export const getTenantPayments = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/payments`,
    {
      headers: {
        cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  return result;
};

export const getTenantActivity = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/rentals/tenant/activity`,
    {
      headers: {
        cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    },
  );
  const result = await res.json();

  return result;
};
