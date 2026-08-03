"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if(!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "User not logged in!",
        }
    }
    console.log(accessToken);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/me`, {
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            cookie: `accessToken=${accessToken}`,
        },

        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24, // 24 hours
            tags: ["my-profile"],
        }
    })

    const result = await res.json();
    console.log(result);

    return result;
} 

