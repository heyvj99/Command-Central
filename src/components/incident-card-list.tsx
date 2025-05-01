import { useState } from "react";
import { motion } from "framer-motion";
import { IncidentCard } from "@/components/ui/incident-card";
import type { Incident } from "@/data/mock-incidents";

interface IncidentCardListProps {
  incidents: Incident[];
  onCardClick?: (incident: Incident) => void;
  className?: string;
}

export function IncidentCardList({
  incidents,
  onCardClick,
}: IncidentCardListProps) {
  const [sortBy, setSortBy] = useState<"time" | "severity">("time");
  const [filterBySeverity, setFilterBySeverity] = useState<
    "All" | "High" | "Medium" | "Low"
  >("All");

  // Sort and filter incidents
  const filteredAndSortedIncidents = incidents
    .filter(
      (incident) =>
        filterBySeverity === "All" || incident.severity === filterBySeverity
    )
    .sort((a, b) => {
      if (sortBy === "time") {
        return (
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      } else {
        const severityOrder = { High: 3, Medium: 2, Low: 1 };
        return severityOrder[b.severity] - severityOrder[a.severity];
      }
    });

  return (
    <div className="flex flex-col h-full">
      {/* Controls */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center gap-4">
          <select
            className="px-3 py-1 border rounded-md bg-background text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "time" | "severity")}
          >
            <option value="time">Sort by Time</option>
            <option value="severity">Sort by Severity</option>
          </select>
          <select
            className="px-3 py-1 border rounded-md bg-background text-sm"
            value={filterBySeverity}
            onChange={(e) =>
              setFilterBySeverity(
                e.target.value as "All" | "High" | "Medium" | "Low"
              )
            }
          >
            <option value="All">All Severities</option>
            <option value="High">High Severity</option>
            <option value="Medium">Medium Severity</option>
            <option value="Low">Low Severity</option>
          </select>
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredAndSortedIncidents.length} incidents
        </div>
      </div>

      {/* Cards */}
      <motion.div className="flex-1 grid gap-4 overflow-y-auto min-h-0" layout>
        {filteredAndSortedIncidents.map((incident) => (
          <motion.div
            key={incident.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <IncidentCard
              timestamp={incident.timestamp}
              ticketId={incident.ticketId}
              address={incident.address}
              city={incident.city}
              state={incident.state}
              zipCode={incident.zipCode}
              description={incident.description}
              severity={incident.severity}
              status={incident.status}
              statusColor={incident.statusColor}
              needsHelp={incident.needsHelp}
              onClick={() => onCardClick?.(incident)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredAndSortedIncidents.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No incidents found matching the current filters.
        </div>
      )}
    </div>
  );
}
