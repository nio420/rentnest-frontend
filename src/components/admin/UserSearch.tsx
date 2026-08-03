"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

const UserSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || "",
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);

      if (searchTerm.trim()) {
        params.set("searchTerm", searchTerm.trim());
        params.set("page", "1");
      } else {
        params.delete("searchTerm");
      }

      const query = params.toString();

      const newUrl = query ? `/admin/users?${query}` : "/admin/users";

      if (window.location.pathname + window.location.search !== newUrl) {
        router.replace(newUrl, {
          scroll: false,
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, router]);

  return (
    <div className="flex justify-start">
      <Input
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          h-9
          w-64
          rounded-lg
          border-muted-foreground/20
          bg-background
          pr-4
          text-sm
          shadow-sm
          transition
          focus-visible:ring-2
          focus-visible:ring-primary/30
        "
      />
    </div>
  );
};

export default UserSearch;
