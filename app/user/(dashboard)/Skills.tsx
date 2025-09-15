"use client"
import SkillsCard from "@/app/components/ui/SkillsCard";
import { useSkillStore } from "@/store/skillStore";
import { LuListPlus } from "react-icons/lu";
import AddSkill from "./AddSkill";
import type { Skills } from "@/types/skills";

export default function Skills() {
  // example current userId (replace with your auth logic)
  const currentUserId = "userA";  

  // extract the function from store
  const getSkillsByUser = useSkillStore((state) => state.getSkillsByUser);

  // call the function to get the skills array for this user
  const skills: Skills [] = getSkillsByUser(currentUserId);

  return (
    <div className="flex flex-col gap-3 py-12 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <AddSkill>
          <button className="btn btn-primary !py-2 !px-3 rounded-md inline-flex items-center">
            <LuListPlus className="text-base" />
            Add Skill
          </button>
        </AddSkill>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5">
        {skills.length > 0 ? (
          skills.map((s) => <SkillsCard key={s._id} {...s} />)
        ) : (
          <p>No skills found.</p>
        )}
      </div>
    </div>
  );
}
