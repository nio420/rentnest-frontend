import LandlordHeader from "@/components/landlord/LandlordHeader";
import LandlordSidebar from "@/components/landlord/LandlordSidebar";
import Footer from "@/components/shared/Footer";

export default function LandlordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col md:flex-row">
        <LandlordSidebar />
        <div className="flex flex-1 flex-col">
          <LandlordHeader title="Landlord Dashboard" />

          <main className="flex-1 p-6">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
