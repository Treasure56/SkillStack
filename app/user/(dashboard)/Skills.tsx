import SkillsCard from "@/app/components/ui/SkillsCard";
import { dummySkills } from "@/types/skills";
import { LuListPlus } from "react-icons/lu";
import AddSkill from "./AddSkill";

export default function Skills() {
  const skills = dummySkills;
  return (
    <div className="flex flex-col gap-3 py-12 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <AddSkill>
          <button className="btn btn-primary !py-2 !px-3 rounded-md inline-flex items-center">
          {" "}
          <LuListPlus className="text-base" />
          Add Skill
        </button>
        </AddSkill>
      </div>
      <div className="grid grid-cols-4 gap-5 py-5">
        {
          skills.map((s) => (
            <SkillsCard key={s._id} {...s} />
          ))
        }
      </div>
    </div>
  );
}
