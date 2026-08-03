"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth/logout";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();

    window.location.href = "/login";
  };

  return (
    <Button
      variant="destructive"
      className="cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
