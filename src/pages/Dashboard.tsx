import { MonthlyIncidents } from "@/components/monthly-incidents";

export default function Dashboard() {
  return (
    <div className="dashboard-container w-full p-4 h-full overflow-y-scroll">
      <MonthlyIncidents />
    </div>
  );
}
