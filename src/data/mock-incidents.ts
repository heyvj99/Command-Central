export interface Incident {
  id: string;
  timestamp: string;
  ticketId: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  severity: "High" | "Medium" | "Low";
  status: "In Progress" | "Pending" | "Resolved" | "Critical";
  statusColor: string;
  needsHelp: boolean;
}

export const mockIncidents: Incident[] = [
  {
    id: "1",
    timestamp: "14 Nov, 2023 10:00 AM",
    ticketId: "BA74957",
    address: "785 Charles St",
    city: "Seattle",
    state: "WA",
    zipCode: "761004",
    description: "Smoke seen from the roof. Multiple witnesses reported seeing dark smoke emerging from the ventilation system.",
    severity: "High",
    status: "In Progress",
    statusColor: "#6366F1",
    needsHelp: true,
  },
  {
    id: "2",
    timestamp: "14 Nov, 2023 09:45 AM",
    ticketId: "BA74958",
    address: "1234 Pike Place",
    city: "Seattle",
    state: "WA",
    zipCode: "761005",
    description: "Water leak in basement affecting electrical systems. Building manager requesting immediate assistance.",
    severity: "Medium",
    status: "Pending",
    statusColor: "#F59E0B",
    needsHelp: false,
  },
  {
    id: "3",
    timestamp: "14 Nov, 2023 08:30 AM",
    ticketId: "BA74959",
    address: "567 Rainier Ave",
    city: "Seattle",
    state: "WA",
    zipCode: "761006",
    description: "Gas leak detected in kitchen area. Restaurant evacuated, emergency response needed.",
    severity: "High",
    status: "Critical",
    statusColor: "#DC2626",
    needsHelp: true,
  },
  {
    id: "4",
    timestamp: "14 Nov, 2023 08:15 AM",
    ticketId: "BA74960",
    address: "890 Madison St",
    city: "Bellevue",
    state: "WA",
    zipCode: "761007",
    description: "Minor structural damage reported after vehicle collision with building corner.",
    severity: "Low",
    status: "Resolved",
    statusColor: "#10B981",
    needsHelp: false,
  },
  {
    id: "5",
    timestamp: "14 Nov, 2023 07:45 AM",
    ticketId: "BA74961",
    address: "432 Union St",
    city: "Redmond",
    state: "WA",
    zipCode: "761008",
    description: "Fire alarm system malfunction on floors 3-5. Building security requesting technical support.",
    severity: "Medium",
    status: "In Progress",
    statusColor: "#6366F1",
    needsHelp: true,
  }
]; 