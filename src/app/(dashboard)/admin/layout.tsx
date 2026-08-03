import AdminSidebar from "@/components/admin/AdminSidebar";
import LandlordHeader from "@/components/landlord/LandlordHeader";
import Footer from "@/components/shared/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background md:flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content & Footer Wrapper */}
      <div className="flex flex-1 flex-col justify-between overflow-x-hidden">
        <div>
          {/* Header if needed */}
          <LandlordHeader title="Admin Dashboard" />

          {/* Page Content */}
          <main className="p-5 md:p-8">{children}</main>
        </div>

        {/* Footer sticks to bottom */}
        <Footer />
      </div>
    </div>
  );
}
