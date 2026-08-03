import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const getAdminUsers = async (page = 1, limit = 10, searchTerm = "") => {
  const cookieStore = await cookies();

  const response = await fetch(
    `${API_URL}/api/admin/users?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
    {
      headers: {
        Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
      },
      cache: "no-store",
    },
  );
  const data = await response.json();

  return data;
};

export const updateUserStatus = async (
  id: string,
  status: "ACTIVE" | "BLOCKED",
) => {
  const cookieStore = await cookies();

  const response = await fetch(`${API_URL}/api/admin/users/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
    },

    body: JSON.stringify({
      status,
    }),
  });
  const data = await response.json();

  return data;
};

export const getAdminProperties = async (page = 1, limit = 10) => {
  const cookieStore = await cookies();

  const response = await fetch(
    `${API_URL}/api/admin/properties?page=${page}&limit=${limit}`,
    {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    },
  );

  return response.json();
};

export const getAdminRentals = async (page = 1, limit = 10) => {
  const cookieStore = await cookies();

  const response = await fetch(
    `${API_URL}/api/admin/rentals?page=${page}&limit=${limit}`,
    {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    },
  );

  return response.json();
};

export const getAdminDashboardStats = async () => {
  const cookieStore = await cookies();

  const response = await fetch(`${API_URL}/api/admin/dashboard`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  return response.json();
};
