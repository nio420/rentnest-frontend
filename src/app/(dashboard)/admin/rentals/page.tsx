import Pagination from "@/components/shared/Pagination";
import RentalTable from "@/components/admin/RentalTable";
import { getAdminRentals } from "@/services/admin/admin.service";

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

const AdminRentalsPage = async ({ searchParams }: Props) => {
  const { page } = await searchParams;

  const currentPage = Number(page) || 1;

  const response = await getAdminRentals(currentPage);

  const rentals = response?.data || [];

  const meta = response?.meta;

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Rental Requests</h1>

        <p className="text-muted-foreground">
          Monitor all rental activities on the platform.
        </p>
      </div>

      <RentalTable rentals={rentals} />

      {meta && <Pagination page={meta.page} totalPage={meta.totalPage} limit={meta.limit} />}
    </section>
  );
};

export default AdminRentalsPage;
