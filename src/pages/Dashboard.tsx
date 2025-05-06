import { MonthlyIncidents } from "@/components/dashboard/monthly-incidents";
import MetricCards from "@/components/dashboard/metric-cards";
import ResponseTime from "@/components/dashboard/response-time";
export default function Dashboard() {
  return (
    <div className="dashboard-container w-full p-4 h-full overflow-y-scroll flex flex-col gap-4">
      <MetricCards />
      <MonthlyIncidents />
      <ResponseTime />
    </div>
  );
}
