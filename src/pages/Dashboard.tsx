import { MonthlyIncidents } from "@/components/dashboard/monthly-incidents";
import MetricCards from "@/components/dashboard/metric-cards";
import ResponseTime from "@/components/dashboard/response-time";
import BarGraph from "@/components/dashboard/bar-graph";
import DonutChart from "@/components/dashboard/donut-chart";

export default function Dashboard() {
  return (
    <div className="dashboard-container w-full p-4 h-full overflow-y-scroll flex flex-col gap-4">
      <MetricCards />
      <div className="flex flex-row gap-2 w-full">
        <div className="flex-1">
          <BarGraph />
        </div>
        <div className="flex-1 h-full">
          <DonutChart />
        </div>
      </div>
      <MonthlyIncidents />
      <ResponseTime />
    </div>
  );
}
