import Pagination from "@/components/shared/Pagination";
import UserTable from "@/components/admin/UserTable";
import { getAdminUsers } from "@/services/admin/admin.service";
import UserSearch from "@/components/admin/UserSearch";

interface Props {
  searchParams: Promise<{
    page?: string;
    searchTerm?: string;
  }>;
}

const AdminUsersPage = async ({ searchParams }: Props) => {
  const { page, searchTerm } = await searchParams;
  const currentPage = Number(page) || 1;
  const response = await getAdminUsers(currentPage, 10, searchTerm);
  const users = response?.data || [];
  const meta = response?.meta;

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Management</h1>

        <p className="text-muted-foreground">Manage all registered users.</p>
      </div>

      <UserSearch />

      <UserTable users={users} />

      {meta && (
        <Pagination
          page={meta.page}
          totalPage={meta.totalPage}
          limit={meta.limit}
        />
      )}
    </section>
  );
};

export default AdminUsersPage;
