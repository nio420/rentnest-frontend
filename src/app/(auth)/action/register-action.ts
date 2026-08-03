"use server";

import { cookies } from "next/headers";
import { IRegisterResponse } from "@/lib/authTypes";

export const registerAction = async (
  prevState: IRegisterResponse | null,
  formData: FormData,
) => {
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    profilePhoto: formData.get("profilePhoto"),
    password: formData.get("password"),
    role: formData.get("role"),
  };

  // Register
  const registerRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const registerResult = await registerRes.json();

  if (!registerResult.success) {
    return registerResult;
  }

  // Auto Login
  const loginRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    },
  );

  const loginResult = await loginRes.json();

  if (!loginResult.success) {
    return {
      success: false,
      statusCode: 400,
      message: "Registration successful. Please login.",
    };
  }

  // Save Cookies
  const cookieStore = await cookies();

  cookieStore.set("accessToken", loginResult.data.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  cookieStore.set("refreshToken", loginResult.data.refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return loginResult;
};
