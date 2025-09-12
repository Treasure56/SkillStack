"use client";
import FormButton from "@/app/components/forms/FormButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSkillStore } from "@/store/skillStore";
import { Skills } from "@/types/skills";
import { ReactNode } from "react";

export default function DeleteModal({
  children,
  skill,
}: {
  children: ReactNode;
  skill: Skills;
}) {
  const deleteSkill = useSkillStore((state) => state.deleteSkill);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        {" "}
        <h2 className="text-lg font-semibold">
          Are you sure yoy want to delete {skill.skill}?
        </h2>
        <p className="text-sm text-gray-500 px-0.5 bg-red-100 py-1 rounded">
          This action cannot be undone
        </p>
        <FormButton onClick={() => deleteSkill(skill._id)} className="btn btn-primary w-full rounded-md mt-5 !py-3skil">
          Delete
        </FormButton>
      </DialogContent>
    </Dialog>
  );
}
