"use client";

import { Button } from "@/components/ui/button";
import StatusBadge from "../shared/StatusBadge";
import { updateUserStatus } from "@/services/admin/admin.client.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UserCardProps } from "@/lib/adminTypes";

const UserCard = ({ user }: UserCardProps) => {
  const router = useRouter();

  const handleStatus = async (id: string, status: "ACTIVE" | "INACTIVE") => {
    const result = await updateUserStatus(id, status);

    if (result.success) {
      toast.success(result.message);
      router.refresh();
      return;
    }

    toast.error(result.message);
  };

  return (
    <div className="rounded-lg border bg-background p-5 shadow-sm">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Name</p>
          <p className="font-semibold">{user.name}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="break-all">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Role</p>
          <p>{user.role}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Status</p>

          <StatusBadge status={user.status} />
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Joined</p>

          <p>{new Date(user.createdAt).toLocaleDateString()}</p>
        </div>

        <Button
          className="w-full cursor-pointer"
          variant={user.status === "ACTIVE" ? "destructive" : "default"}
          onClick={() =>
            handleStatus(
              user.id,
              user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
            )
          }
        >
          {user.status === "ACTIVE" ? "Ban" : "Unban"}
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
