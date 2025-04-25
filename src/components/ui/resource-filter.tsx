import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ResourceFilterProps {
  icon: LucideIcon;
  label: string;
  count?: number;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ResourceFilter({
  icon: Icon,
  label,
  count,
  isActive = false,
  onClick,
  className,
}: ResourceFilterProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors whitespace-nowrap shrink-0",
        "hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent text-accent-foreground",
        className
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="text-sm font-medium">{label}</span>
      {count !== undefined && (
        <span className="ml-auto text-sm text-muted-foreground">{count}</span>
      )}
    </button>
  );
}
