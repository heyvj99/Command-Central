import { useState } from "react";
import { mockReports } from "@/data/mock-reports";
import { LayoutGrid, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Reports() {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
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
      <div className="flex gap-4">
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
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReports.map((report) => (
            <Card
              key={report.id}
              className="p-4 hover:shadow-md transition-shadow"
            >
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
          ))}
        </div>
      ) : (
        <div className="border rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
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
                <tr key={report.id} className="border-b hover:bg-muted/50">
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
                  <td className="px-4 py-3 text-sm">{report.createdBy}</td>
                  <td className="px-4 py-3 text-sm">{report.createdAt}</td>
                  <td className="px-4 py-3 text-sm">{report.lastModified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredReports.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No reports found matching the current filters.
        </div>
      )}
    </div>
  );
}
