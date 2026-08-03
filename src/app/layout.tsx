import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://rentnest.com",
  ),
  title: {
    default: "RentNest | Find & Rent Houses, Apartments & Flats",
    template: "%s | RentNest",
  },
  description:
    "RentNest makes renting effortless. Browse verified rental properties, submit online requests, and connect directly with trusted landlords.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "RentNest",
    "Rental Properties",
    "Apartments for Rent",
    "House Rentals",
    "Rent Homes",
    "Landlords",
    "Real Estate Rentals",
  ],
  authors: [{ name: "RentNest Team" }],
  creator: "RentNest",
  publisher: "RentNest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "RentNest | Find & Rent Houses, Apartments & Flats",
    description:
      "Browse verified rental properties, submit online requests, and connect directly with trusted landlords.",
    siteName: "RentNest",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentNest - Smart Property Rental Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentNest | Find & Rent Houses, Apartments & Flats",
    description:
      "Browse verified rental properties, submit online requests, and connect directly with trusted landlords.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader
          color="var(--primary)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <ThemeProvider>
          <Toaster richColors position="top-right" duration={2000} />
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
