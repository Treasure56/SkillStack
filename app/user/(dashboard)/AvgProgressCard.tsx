import { IoStatsChart } from "react-icons/io5";
import OverviewCard from "../../components/ui/OverviewCard";

export default function AvgProgressCard() {
  return (
    <OverviewCard
         title="Average Progress"
         value="76%"
         icon={<IoStatsChart className="text-brand-primary text-5xl" />}
       />
  );
}