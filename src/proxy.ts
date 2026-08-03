import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { getRefreshToken } from "./services/auth/refreshToken";

const authRoutes = ["/login", "/register"];
const publicRoutes = ["/", "/about", "/contact", "/properties"];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const cookieStore = await cookies();

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken = accessToken
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
      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });

      accessToken = newAccessToken;

      decodedAccessToken = jwtUtils.verifyToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET as string,
      ) as JwtPayload;
    }
  }
  let userRole = null;

  if (!decodedAccessToken?.success) {
    cookieStore.delete("accessToken");
    accessToken = undefined;
  }

  if (decodedAccessToken?.success) {
    userRole = (decodedAccessToken.data as JwtPayload).role;
  }

  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  if (!accessToken && !isAuthRoute && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirectTo", pathname);

    return NextResponse.redirect(loginUrl);
  }

  if (decodedAccessToken?.success && isAuthRoute) {
    if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    if (userRole === "LANDLORD") {
      return NextResponse.redirect(new URL("/landlord", request.url));
    }

    if (userRole === "TENANT") {
      return NextResponse.redirect(new URL("/tenant", request.url));
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/global-not-found", request.url));
  }

  if (pathname.startsWith("/landlord") && userRole !== "LANDLORD") {
    return NextResponse.redirect(new URL("/global-not-found", request.url));
  }

  if (pathname.startsWith("/tenant") && userRole !== "TENANT") {
    return NextResponse.redirect(new URL("/global-not-found", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
