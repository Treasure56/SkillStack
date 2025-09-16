import { FaGraduationCap } from "react-icons/fa";
import OverviewCard from "../../components/ui/OverviewCard";
import { useSkillStore } from "@/store/skillStore";
import { useUserStore } from "@/store/userStore";

export default function TotalSkillsCard() {
   const currentUser = useUserStore((state) => state.user);
    const skillsCount = useSkillStore((state) => state.skillsByUser[currentUser?.username || ""] || []);
  
    const skills = {
      skillsByUser: skillsCount.length,
    };
  return (
    <OverviewCard
      title="Total Skills"
      value={skills.skillsByUser.toString()}
      icon={<FaGraduationCap className="text-brand-primary text-5xl" />}
    />
  );
}
