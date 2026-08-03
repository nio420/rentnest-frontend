"use server";

import { cookies } from "next/headers";
import { jwtUtils } from "../../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

export const getRefreshToken = async () => {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return {
      success: false,
      statusCode: 401,
      message: "User not logged in.",
    };
  }

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
      cache: "no-store",
    },
  );

  return response.json();
};

export const isAccessTokenExist = async () => {
  const cookieStore = await cookies();

  let accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!accessToken && !refreshToken) {
    return null;
  }

  const decodedAccessToken = accessToken
    ? (jwtUtils.verifyToken(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string,
      ) as JwtPayload)
    : null;

  const decodedRefreshToken = refreshToken
    ? (jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      ) as JwtPayload)
    : null;

  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    const result = await getRefreshToken();

    if (result.success) {
      accessToken = result.data.accessToken;

      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });
    }
  }

  return accessToken;
};
