"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSkillStore } from "@/store/skillStore";
import { Skills } from "@/types/skills";
import { ReactNode, useState } from "react";
import FormButton from "@/app/components/forms/FormButton";

export default function AddProgressModal({
  children,
  skill,
}: {
  children: ReactNode;
  skill: Skills;
}) {
  const updateProgress = useSkillStore((state) => state.updateProgress);
  const [progress, setProgress] = useState(skill.progress || 0);

  const handleSubmit = () => {
    updateProgress(skill.userId, skill._id, progress);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <h2 className="text-lg font-semibold">Update Progress</h2>
        <p className="text-sm text-gray-500">
          Set your progress for <span className="font-medium">{skill.skill}</span>
        </p>

        {/* Progress input */}
        <input
          type="number"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          min={0}
          max={100}
          className="w-full border rounded-md px-3 py-2 mt-4"
          placeholder="Enter progress (0-100)"
        />

        {/* Save button */}
        <FormButton
          onClick={handleSubmit}
          className="btn btn-primary w-full rounded-md mt-5 !py-3"
        >
          Save Progress
        </FormButton>
      </DialogContent>
    </Dialog>
  );
}
