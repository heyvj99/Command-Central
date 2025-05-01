import { ResourceType } from "@/types/resource";
import {
  Building2,
  Triangle,
  Square,
  Star,
  ArrowUpDown,
  Droplets,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface Resource {
  type: ResourceType;
  label: string;
  icon: React.ElementType;
  count: number;
  position: { x: number; y: number };
}

const resources: Resource[] = [
  {
    type: "stations",
    label: "Stations",
    icon: Building2,
    count: 12,
    position: { x: 0, y: 0 },
  },
  {
    type: "fireTrucks",
    label: "Fire Trucks",
    icon: Triangle,
    count: 8,
    position: { x: 0, y: 0 },
  },
  {
    type: "fireEngines",
    label: "Fire Engines",
    icon: Square,
    count: 15,
    position: { x: 0, y: 0 },
  },
  {
    type: "battalions",
    label: "Battalions",
    icon: Star,
    count: 4,
    position: { x: 0, y: 0 },
  },
  {
    type: "ladderTrucks",
    label: "Ladder Trucks",
    icon: ArrowUpDown,
    count: 6,
    position: { x: 0, y: 0 },
  },
  {
    type: "waterTankers",
    label: "Water Tankers",
    icon: Droplets,
    count: 10,
    position: { x: 0, y: 0 },
  },
];

interface ResourceMapProps {
  selectedResources: ResourceType[];
}

export function ResourceMap({ selectedResources }: ResourceMapProps) {
  // Generate random positions only once when component mounts
  const positionedResources = useMemo(() => {
    return resources.flatMap((resource) => {
      return Array.from({ length: resource.count }, (_, index) => ({
        ...resource,
        position: {
          x: Math.random() * 80 + 10, // Random x position between 10% and 90%
          y: Math.random() * 80 + 10, // Random y position between 10% and 90%
        },
      }));
    });
  }, []); // Empty dependency array means this only runs once

  return (
    <div className="relative w-full h-full">
      {positionedResources.map((resource, index) => {
        const Icon = resource.icon;
        const isHighlighted =
          selectedResources.length === 0 ||
          selectedResources.includes(resource.type);

        return (
          <div
            key={`${resource.type}-${index}`}
            className={cn(
              "absolute w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300",
              isHighlighted ? "opacity-100" : "opacity-20",
              {
                "bg-blue-700": resource.type === "stations",
                "bg-red-900": resource.type === "fireTrucks",
                "bg-orange-700": resource.type === "fireEngines",
                "bg-purple-800": resource.type === "battalions",
                "bg-green-800": resource.type === "ladderTrucks",
                "bg-cyan-600": resource.type === "waterTankers",
              }
            )}
            style={{
              left: `${resource.position.x}%`,
              top: `${resource.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
        );
      })}
    </div>
  );
}
