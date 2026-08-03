"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const updateUserStatusAction = async (
  id: string,
  status: "ACTIVE" | "INACTIVE",
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const response = await fetch(`${API_URL}/api/admin/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      status,
    }),
  });

  return response.json();
};
