import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EmptyStateProps } from "@/lib/emptyStateTypes";


const EmptyState = ({
  title,
  description,
  icon: Icon,
  buttonText,
  buttonHref,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-10 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {description}
      </p>

      {buttonText && buttonHref && (
        <Button asChild className="mt-5">
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
