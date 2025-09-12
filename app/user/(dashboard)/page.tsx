"use client";
import OverviewCard from "@/app/components/ui/OverviewCard";
import Profile from "./Profile";
import Skills from "./Skills";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { useSkillStore } from "@/store/skillStore";

export default function Page() {
 const skills = useSkillStore();
  return (
    <main className="flex flex-col gap-3 app-container">
      {" "}
      <Profile />
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <OverviewCard
          title="Skills"
          value={skills.skills.length}
          icon={<FaGraduationCap className="text-brand-primary text-5xl" />}
        />
        <OverviewCard
          title="Categories"
          value="34"
          icon={<BiSolidCategoryAlt className="text-brand-primary text-5xl" />}
        />
        <OverviewCard
          title="Average Progress"
          value="76%"
          icon={<IoStatsChart className="text-brand-primary text-5xl" />}
        />
        {/* <SkillsDistributionCard /> */}
      </div>
      <Skills />
    </main>
  );
}
