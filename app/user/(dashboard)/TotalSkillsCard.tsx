import { FaGraduationCap } from "react-icons/fa";
import OverviewCard from "../../components/ui/OverviewCard";

export default function TotalSkillsCard() {
  return (
    <OverviewCard
      title="Skills"
      value="22"
      icon={<FaGraduationCap className="text-brand-primary text-5xl" />}
    />
  );
}
