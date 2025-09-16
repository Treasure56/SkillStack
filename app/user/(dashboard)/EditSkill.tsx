"use client";
import AppInput from "@/app/components/forms/AppInput";
import AppSelect from "@/app/components/forms/AppSelect";
import FormButton from "@/app/components/forms/FormButton";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useSkillStore } from "@/store/skillStore";
import { useUserStore } from "@/store/userStore";
import { Skills } from "@/types/skills";
import { FormEvent, ReactNode, useState } from "react";

export default function EditSkill({
  skillToEdit,
  children,
}: { skillToEdit: Skills; children: ReactNode }) {
  const editSkill = useSkillStore((state) => state.editSkill);
  const currentUser = useUserStore((state) => state.user);

  const [message, setMessage] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const skill = formData.get("skill")?.toString();
    const category = formData.get("category")?.toString();

    if (!skill || !category) {
      setMessage({ type: "error", message: "All fields are required" });
      return;
    }

    const userId = currentUser?.username || currentUser?.email;
    if (!userId) {
      setMessage({ type: "error", message: "You must be logged in." });
      return;
    }

    const updatedSkill: Skills = {
      ...skillToEdit,     // keep same _id and createdAt
      skill,
      category,
      userId,
    };

    try {
      editSkill(userId, updatedSkill._id, { skill, category });
      setMessage({ type: "success", message: "Skill updated successfully" });
      e.currentTarget.reset();
    } catch (error) {
      setMessage({ type: "error", message: "Failed to update skill" });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-2xl">Edit Skill</DialogTitle>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <AppInput
            name="skill"
            label="Skill Name"
            defaultValue={skillToEdit.skill}
            placeholder="e.g. JavaScript"
          />
          <AppSelect
            name="category"  // ✅ make sure formData works
            label="Category"
            options={[
              { label: "Technology", value: "technology" },
              { label: "Business", value: "business" },
              { label: "Design", value: "design" },
            ]}
            defaultValue={skillToEdit.category}
          />

          {message && (
            <p className={`text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {message.message}
            </p>
          )}

          <FormButton className="btn btn-primary w-full rounded-md mt-5 !py-3">
            Submit
          </FormButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
