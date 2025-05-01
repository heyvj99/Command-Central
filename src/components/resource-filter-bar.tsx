import { ResourceType } from "@/types/resource";
import {
  Building2,
  Triangle,
  Square,
  Star,
  ArrowUpDown,
  Droplets,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

interface ResourceFilterBarProps {
  onFilterChange: (filter: ResourceType) => void;
  selectedResources: ResourceType[];
  onClearAll: () => void;
}

export function ResourceFilterBar({
  onFilterChange,
  selectedResources,
  onClearAll,
}: ResourceFilterBarProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white border-b">
      <div className="flex items-center gap-2 flex-wrap">
        {resources.map((resource) => {
          const Icon = resource.icon;
          const isSelected = selectedResources.includes(resource.type);

          return (
            <button
              key={resource.type}
              onClick={() => onFilterChange(resource.type)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                isSelected
                  ? {
                      "bg-blue-500 text-white": resource.type === "stations",
                      "bg-red-500 text-white": resource.type === "fireTrucks",
                      "bg-orange-500 text-white":
                        resource.type === "fireEngines",
                      "bg-purple-500 text-white":
                        resource.type === "battalions",
                      "bg-green-500 text-white":
                        resource.type === "ladderTrucks",
                      "bg-cyan-500 text-white":
                        resource.type === "waterTankers",
                    }
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{resource.label}</span>
              <span className="text-xs opacity-80">({resource.count})</span>
            </button>
          );
        })}
      </div>
      {selectedResources.length > 0 && (
        <button
          onClick={onClearAll}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4" />
          <span>Clear All</span>
        </button>
      )}
    </div>
  );
}
