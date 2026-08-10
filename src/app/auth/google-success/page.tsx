"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const GoogleSuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (!accessToken || !refreshToken) {
      toast.error("Google login failed.");
      router.replace("/login");
      return;
    }

    document.cookie = `accessToken=${accessToken}; path=/`;
    document.cookie = `refreshToken=${refreshToken}; path=/`;

    toast.success("Google login successful!");

    router.replace("/");
    router.refresh();
  }, [router, searchParams]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <p className="text-muted-foreground">Completing Google login...</p>
    </div>
  );
};

export default GoogleSuccessPage;
