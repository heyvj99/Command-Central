export interface Report {
  id: string;
  title: string;
  type: "Incident" | "Resource" | "Performance" | "Maintenance";
  createdAt: string;
  createdBy: string;
  status: "Draft" | "Published" | "Archived";
  description: string;
  thumbnail?: string;
  lastModified: string;
}

export const mockReports: Report[] = [
  {
    id: "R001",
    title: "Monthly Incident Summary",
    type: "Incident",
    createdAt: "2024-03-15",
    createdBy: "John Smith",
    status: "Published",
    description:
      "Comprehensive summary of all incidents reported in March 2024",
    lastModified: "2024-03-15",
  },
  {
    id: "R002",
    title: "Resource Utilization Report",
    type: "Resource",
    createdAt: "2024-03-14",
    createdBy: "Sarah Johnson",
    status: "Draft",
    description:
      "Analysis of fire department resource utilization and efficiency",
    lastModified: "2024-03-14",
  },
  {
    id: "R003",
    title: "Q1 Performance Metrics",
    type: "Performance",
    createdAt: "2024-03-13",
    createdBy: "Mike Brown",
    status: "Published",
    description: "Quarterly performance metrics and KPIs for Q1 2024",
    lastModified: "2024-03-13",
  },
  {
    id: "R004",
    title: "Equipment Maintenance Log",
    type: "Maintenance",
    createdAt: "2024-03-12",
    createdBy: "Lisa Chen",
    status: "Archived",
    description:
      "Detailed maintenance records for all fire department equipment",
    lastModified: "2024-03-12",
  },
];
