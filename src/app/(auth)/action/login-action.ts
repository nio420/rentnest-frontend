"use server";

import { cookies } from "next/headers";
import { ILoginPayload } from "@/lib/authTypes";
import { redirect } from "next/navigation";

export const loginAction = async (redirectTo: string,  payload: ILoginPayload) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });
  }

  if(redirectTo && typeof redirectTo === "string"  && redirectTo.startsWith("/") && !redirectTo.startsWith("//")){
    redirect(redirectTo);
  }

  return result;
};
