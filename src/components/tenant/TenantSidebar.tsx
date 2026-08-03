"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  CreditCard,
  User,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/tenant",
    icon: LayoutDashboard,
  },
  {
    label: "My Rentals",
    href: "/tenant/rentals",
    icon: ClipboardList,
  },
  {
    label: "Payments",
    href: "/tenant/payments",
    icon: CreditCard,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

const SidebarContent = () => {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {sidebarLinks.map((item) => {
        const Icon = item.icon;

        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition
            ${
              active
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted hover:text-primary"
            }
            `}
          >
            <Icon className="h-5 w-5" />

            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

const TenantSidebar = () => {
  return (
    <>
      {/* Desktop */}
      <aside className="hidden min-h-screen w-64 border-r bg-background p-5 md:block">
        <Link href="/" className="mb-8 flex items-center">
          <h2 className="text-2xl font-bold text-primary">RentNest</h2>
        </Link>

        <SidebarContent />
      </aside>

      {/* Mobile */}
      <div className="border-b p-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <div className="mb-8 text-2xl font-bold text-primary">RentNest</div>

            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default TenantSidebar;
