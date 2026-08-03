/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { isAccessTokenExist } from "../auth/refreshToken";

export const createProperty = async (payload: any) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/landlord/properties`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${accessToken}`,
      },

      body: JSON.stringify({
        ...payload,

        amenities: payload.amenities
          .split(",")
          .map((item: string) => item.trim()),
      }),
    },
  );

  const result = await res.json();
  return result;
};
