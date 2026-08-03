import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPage: number;
  limit?: number;
}

const Pagination = ({ page, totalPage, limit = 10 }: PaginationProps) => {
  if (totalPage <= 1) return null;

  const pages: (number | "...")[] = [];

  if (totalPage <= 7) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPage - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPage - 2) {
      pages.push("...");
    }

    pages.push(totalPage);
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <Button asChild variant="outline" size="icon" disabled={page === 1}>
        <Link href={`?page=${page - 1}&limit=${limit}`}>
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>

      {pages.map((item, index) =>
        item === "..." ? (
          <span key={index} className="px-2 text-muted-foreground">
            ...
          </span>
        ) : (
          <Button
            key={item}
            asChild
            variant={item === page ? "default" : "outline"}
            className="h-9 w-9 p-0"
          >
            <Link href={`?page=${item}&limit=${limit}`}>{item}</Link>
          </Button>
        ),
      )}

      <Button
        asChild
        variant="outline"
        size="icon"
        disabled={page === totalPage}
      >
        <Link href={`?page=${page + 1}&limit=${limit}`}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export default Pagination;
