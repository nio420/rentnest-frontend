import LandlordHeader from "@/components/landlord/LandlordHeader";
import Footer from "@/components/shared/Footer";
import TenantSidebar from "@/components/tenant/TenantSidebar";

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <TenantSidebar />

      <div className="flex flex-1 flex-col">
        <LandlordHeader title="Tenant Dashboard" />

        <main className="flex-1 p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
