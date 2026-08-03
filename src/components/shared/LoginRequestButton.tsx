"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LoginRequestButton = () => {
  const router = useRouter();

  return (
    <Button
      size="lg"
      onClick={() => router.push("/login")}
      className="cursor-pointer"
    >
      Login to Request
    </Button>
  );
};

export default LoginRequestButton;