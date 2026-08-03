import Pagination from "@/components/shared/Pagination";
import PropertyTable from "@/components/admin/PropertyTable";
import { getAdminProperties } from "@/services/admin/admin.service";

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

const AdminPropertiesPage = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const response = await getAdminProperties(currentPage);
  const properties = response?.data || [];
  const meta = response?.meta;

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Property Management</h1>

        <p className="text-muted-foreground">
          View and monitor all platform properties.
        </p>
      </div>

      <PropertyTable properties={properties} />

      {meta && <Pagination page={meta.page} totalPage={meta.totalPage} limit={meta.limit} />}
    </section>
  );
};

export default AdminPropertiesPage;
