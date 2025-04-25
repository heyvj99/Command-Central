import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IncidentCardProps {
  timestamp: string;
  ticketId: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  severity: "High" | "Medium" | "Low";
  status: string;
  statusColor?: string;
  needsHelp?: boolean;
  onClick?: () => void;
  className?: string;
}

export function IncidentCard({
  timestamp,
  ticketId,
  address,
  city,
  state,
  zipCode,
  description,
  severity,
  status,
  statusColor = "#6366F1",
  needsHelp = false,
  onClick,
  className,
}: IncidentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative flex flex-col gap-2 p-4 bg-background rounded-lg border cursor-pointer hover:shadow-md transition-shadow",
        className
      )}
      onClick={onClick}
      style={{
        borderLeft: `4px solid ${statusColor}`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{timestamp}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">#{ticketId}</div>
          <div className={cn(
            "px-2.5 py-0.5 rounded-full text-xs font-medium",
            severity === "High" ? "bg-red-100 text-red-700" :
            severity === "Medium" ? "bg-yellow-100 text-yellow-700" :
            "bg-green-100 text-green-700"
          )}>
            {severity} Severity
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{address}</h3>
        <p className="text-sm text-muted-foreground">
          {city}, {state}
        </p>
        <p className="text-sm text-muted-foreground">{zipCode}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="text-sm">{status}</span>
          </div>
        </div>
        {needsHelp && (
          <div className="flex items-center gap-1 text-red-600 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>More Help Required</span>
          </div>
        )}
      </div>
    </motion.div>
  );
} 