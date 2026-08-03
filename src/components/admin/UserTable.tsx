"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import StatusBadge from "../shared/StatusBadge";
import { UserTableProps } from "@/lib/adminTypes";
import { updateUserStatusAction } from "@/app/(dashboard)/admin/action/admin-action";

const UserTable = ({ users }: UserTableProps) => {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleStatus = async (id: string, status: "ACTIVE" | "INACTIVE") => {
    try {
      setLoadingId(id);

      const result = await updateUserStatusAction(id, status);

      if (result.success) {
        toast.success(result.message);

        router.refresh();

        return;
      }

      toast.error(result.message);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden w-full overflow-x-auto rounded-lg border md:block">
        <div className="min-w-225">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Joined</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-4 font-medium">{user.name}</td>

                  <td className="p-4">{user.email}</td>

                  <td className="p-4">{user.role}</td>

                  <td className="p-4">
                    <StatusBadge status={user.status} />
                  </td>

                  <td className="p-4">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <Button
                      size="sm"
                      disabled={loadingId === user.id}
                      variant={
                        user.status === "ACTIVE" ? "destructive" : "default"
                      }
                      onClick={() =>
                        handleStatus(
                          user.id,
                          user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
                        )
                      }
                    >
                      {loadingId === user.id
                        ? "Updating..."
                        : user.status === "ACTIVE"
                          ? "Ban"
                          : "Unban"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile + Tablet Cards */}
      <div className="space-y-4 md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border bg-background p-5 shadow-sm"
          >
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
                className="w-full"
                disabled={loadingId === user.id}
                variant={user.status === "ACTIVE" ? "destructive" : "default"}
                onClick={() =>
                  handleStatus(
                    user.id,
                    user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
                  )
                }
              >
                {loadingId === user.id
                  ? "Updating..."
                  : user.status === "ACTIVE"
                    ? "Ban"
                    : "Unban"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserTable;
