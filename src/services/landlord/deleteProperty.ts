"use server";

import { isAccessTokenExist } from "../auth/refreshToken";

export const deleteProperty = async (id: string) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/landlord/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const result = await res.json();

  return result;
};
