"use server";

import { cookies } from "next/headers";
import { ICreatePropertyPayload, IStatus } from "@/lib/landlordType";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const getLandlordProperties = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API_URL}/api/landlord/properties`, {
    headers: {
      cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });
  const result = await res.json();
  return result;
};

export const getLandlordPropertyById = async (id: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API_URL}/api/properties/${id}`, {
    headers: {
      cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  return result;
};

export const createProperty = async (payload: ICreatePropertyPayload) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API_URL}/api/landlord/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};

export const getLandlordRequests = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/landlord/requests`,
    {
      method: "GET",
      headers: {
        cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  return result;
};

export const updateRequestStatus = async (id: string, status: IStatus) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/landlord/requests/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${token}`,
      },
      body: JSON.stringify({
        status,
      }),
    },
  );

  const result = await res.json();

  return result;
};

export const getLandlordDashboard = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/landlord/dashboard`,
    {
      method: "GET",
      headers: {
        cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  return result;
};
