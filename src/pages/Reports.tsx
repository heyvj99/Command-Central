import { useState } from "react";
import { mockReports } from "@/data/mock-reports";
import { LayoutGrid, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Reports() {
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "Incident":
        return "bg-red-100 text-red-700";
      case "Resource":
        return "bg-blue-100 text-blue-700";
      case "Performance":
        return "bg-purple-100 text-purple-700";
      case "Maintenance":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-500";
      case "Draft":
        return "bg-yellow-500";
      case "Archived":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredReports = mockReports.filter((report) => {
    const typeMatch = selectedType === "All" || report.type === selectedType;
    const statusMatch =
      selectedStatus === "All" || report.status === selectedStatus;
    return typeMatch && statusMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center shrink-0">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("table")}
          >
            <Table className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 shrink-0 mt-6">
        <select
          className="px-3 py-1.5 border rounded-md bg-background text-sm"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Incident">Incident Reports</option>
          <option value="Resource">Resource Reports</option>
          <option value="Performance">Performance Reports</option>
          <option value="Maintenance">Maintenance Reports</option>
        </select>
        <select
          className="px-3 py-1.5 border rounded-md bg-background text-sm"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
          <option value="Archived">Archived</option>
        </select>
      </div>

      {/* Content */}
      <div className="mt-6 flex-1 min-h-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto pr-2"
            >
              {filteredReports.map((report) => (
                <motion.div
                  key={report.id}
                  variants={itemVariants}
                  layout
                  className="h-full"
                >
                  <Card className="p-4 hover:shadow-md transition-shadow h-full">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{report.title}</h3>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={cn(
                              "w-2 h-2 rounded-full",
                              getStatusColor(report.status)
                            )}
                          />
                          <span className="text-sm text-muted-foreground">
                            {report.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {report.description}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full",
                            getTypeStyles(report.type)
                          )}
                        >
                          {report.type}
                        </span>
                        <span className="text-muted-foreground">
                          {report.createdAt}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="table"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="border rounded-lg h-full overflow-hidden flex flex-col"
            >
              <div className="overflow-y-auto">
                <table className="w-full">
                  <thead className="sticky top-0 bg-muted/100 z-10">
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Title
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Created By
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Created At
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Last Modified
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReports.map((report) => (
                      <motion.tr
                        key={report.id}
                        variants={itemVariants}
                        layout
                        className="border-b hover:bg-muted/50"
                      >
                        <td className="px-4 py-3">
                          <div>
                            <div className="font-medium">{report.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {report.description}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={cn(
                              "px-2 py-1 rounded-full text-xs",
                              getTypeStyles(report.type)
                            )}
                          >
                            {report.type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={cn(
                                "w-2 h-2 rounded-full",
                                getStatusColor(report.status)
                              )}
                            />
                            <span className="text-sm text-muted-foreground">
                              {report.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {report.createdBy}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {report.createdAt}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {report.lastModified}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredReports.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No reports found matching the current filters.
          </div>
        )}
      </div>
    </div>
  );
}
