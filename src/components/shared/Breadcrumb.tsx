"use client";

import Link from "next/link";

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-primary">
        Home
      </Link>

      <span>/</span>

      <Link href="/properties" className="hover:text-primary">
        Properties
      </Link>

      <span>/</span>

      <span className="font-medium text-foreground">{title}</span>
    </div>
  );
};

export default Breadcrumb;
