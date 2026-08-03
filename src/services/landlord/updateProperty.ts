"use server";

import { isAccessTokenExist } from "../auth/refreshToken";

export const updateProperty = async (id: string, payload: unknown) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/landlord/properties/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${accessToken}`,
      },

      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  return result;
};
