import { LucideIcon } from "lucide-react";

export interface EmptyStateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText?: string;
  buttonHref?: string;
}