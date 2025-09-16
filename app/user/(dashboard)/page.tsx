"use client";
import OverviewCard from "@/app/components/ui/OverviewCard";
import Profile from "./Profile";
import Skills from "./Skills";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { useSkillStore } from "@/store/skillStore";
import { useUserStore } from "@/store/userStore";

export default function Page() {
  const currentUser = useUserStore((state) => state.user);
  // Grab the whole object once
  const skillsByUser = useSkillStore((state) => state.skillsByUser);

  // extract skills for the current user
  const skillsCount = skillsByUser[currentUser?.username || ""] || [];

  const stats = {
    skillsByUser: skillsCount.length,
    totalCategories: new Set(skillsCount.map((skill) => skill.category)).size,
  };
  return (
    <main className="flex flex-col gap-3 app-container">
      {" "}
      <Profile />
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <OverviewCard
          title="Skills"
          value={stats.skillsByUser.toString()}
          icon={<FaGraduationCap className="text-brand-primary text-5xl" />}
        />
        <OverviewCard
          title="Categories"
          value={stats.totalCategories.toString()}
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
