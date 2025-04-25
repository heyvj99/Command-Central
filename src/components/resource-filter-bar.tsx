import { useState } from "react";
import {
  Building2,
  Triangle,
  Square,
  Star,
  ArrowUpDown,
  Droplets,
} from "lucide-react";
import { ResourceFilter } from "@/components/ui/resource-filter";
import { cn } from "@/lib/utils";

export type ResourceType =
  | "stations"
  | "fireTrucks"
  | "fireEngines"
  | "battalions"
  | "ladderTrucks"
  | "waterTankers";

interface ResourceFilterBarProps {
  onFilterChange?: (filter: ResourceType) => void;
  className?: string;
}

const resources = [
  {
    type: "stations" as ResourceType,
    label: "Stations",
    icon: Building2,
    count: 12,
  },
  {
    type: "fireTrucks" as ResourceType,
    label: "Fire Trucks",
    icon: Triangle,
    count: 8,
  },
  {
    type: "fireEngines" as ResourceType,
    label: "Fire Engines",
    icon: Square,
    count: 15,
  },
  {
    type: "battalions" as ResourceType,
    label: "Battalions",
    icon: Star,
    count: 4,
  },
  {
    type: "ladderTrucks" as ResourceType,
    label: "Ladder Trucks",
    icon: ArrowUpDown,
    count: 6,
  },
  {
    type: "waterTankers" as ResourceType,
    label: "Water Tankers",
    icon: Droplets,
    count: 10,
  },
];

export function ResourceFilterBar({
  onFilterChange,
  className,
}: ResourceFilterBarProps) {
  const [activeFilter, setActiveFilter] = useState<ResourceType | null>(null);

  const handleFilterClick = (type: ResourceType) => {
    const newFilter = activeFilter === type ? null : type;
    setActiveFilter(newFilter);
    onFilterChange?.(type);
  };

  return (
    <div
      className={cn(
        "p-4 border-b bg-background w-full overflow-hidden",
        className
      )}
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max">
          {resources.map((resource) => (
            <ResourceFilter
              key={resource.type}
              icon={resource.icon}
              label={resource.label}
              count={resource.count}
              isActive={activeFilter === resource.type}
              onClick={() => handleFilterClick(resource.type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
