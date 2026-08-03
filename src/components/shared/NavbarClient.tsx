/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Menu, User, LayoutDashboard, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Container from "./Container";
import { logout } from "@/services/auth/logout";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useState } from "react";
import ThemeToggle from "@/components/shared/ThemeToggle";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Properties",
    href: "/properties",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

interface Props {
  user: any;
}

const NavbarClient = ({ user }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isLoggedIn = user?.success;

  const handleLogout = async () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("requested-")) {
        localStorage.removeItem(key);
      }
    });
    await logout();
    toast.success("Logged out successfully");
    router.push("/login");
    router.refresh();
  };

  const dashboardRoute =
    user?.data?.role === "TENANT"
      ? "/tenant"
      : user?.data?.role === "LANDLORD"
        ? "/landlord"
        : "/admin";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            RentNest
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {/* Desktop Theme Toggle */}
            <ThemeToggle />

            {!isLoggedIn ? (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>

                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.data.profilePhoto || ""} />

                    <AvatarFallback>{user.data.name[0]}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56 p-2">
                  <div className="px-3 py-2">
                    <p className="font-semibold">{user.data.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {user.data.email}
                    </p>
                  </div>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="cursor-pointer py-2"
                    onClick={() => router.push("/profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="cursor-pointer py-2"
                    onClick={() => router.push(dashboardRoute)}
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="cursor-pointer text-destructive py-2"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-0">
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-5">
                  <h2 className="text-xl font-bold text-primary">RentNest</h2>
                </div>

                {/* Navigation */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-2 px-6 py-6">
                    {navLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-3 py-3 text-base font-medium transition ${pathname === item.href ? "bg-secondary text-primary" : "hover:bg-muted hover:text-primary"}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t px-6 py-6 space-y-4">
                    {/* Mobile Theme Toggle Row */}
                    <div className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2">
                      <span className="text-sm font-medium">Appearance</span>
                      <ThemeToggle />
                    </div>

                    {!isLoggedIn ? (
                      <div className="space-y-3">
                        <Button asChild className="w-full">
                          <Link href="/login">Login</Link>
                        </Button>

                        <Button asChild variant="outline" className="w-full">
                          <Link href="/register">Register</Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => {
                            setOpen(false);
                            router.push("/profile");
                          }}
                        >
                          <User className="mr-2 h-4 w-4" />
                          My Profile
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => {
                            setOpen(false);
                            router.push(dashboardRoute);
                          }}
                        >
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          Dashboard
                        </Button>

                        <Button
                          variant="destructive"
                          className="w-full justify-start"
                          onClick={handleLogout}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
};

export default NavbarClient;
