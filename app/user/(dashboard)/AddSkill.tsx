"use client";

import React, { FormEvent, ReactNode, useState } from "react";
import AppInput from "@/app/components/forms/AppInput";
import AppSelect from "@/app/components/forms/AppSelect";
import FormButton from "@/app/components/forms/FormButton";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// IMPORTANT: these two stores must exist in your project
import { useSkillStore } from "@/store/skillStore"; // expects addSkill(userId, skill) & getSkillsByUser(userId)
import { useUserStore } from "@/store/userStore";   // expects user object { username, email } or similar

import { Skills } from "@/types/skills";

export default function AddSkill({ children }: { children: ReactNode }) {
  // select only the functions we need from the skill store (avoids unnecessary re-renders)
  const addSkill = useSkillStore((s) => s.addSkill);
  const getSkillsByUser = useSkillStore((s) => s.getSkillsByUser);

  // get current logged-in user from your user store
  const currentUser = useUserStore((s) => s.user);

  // local UI feedback state
  const [message, setMessage] = useState<
    { type: "success" | "error"; text: string } | null
  >(null);

  // form submit handler
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get form values
    const form = e.currentTarget;
    const formData = new FormData(form);
    const skillName = formData.get("skill")?.toString().trim() ?? "";
    const category = formData.get("category")?.toString().trim() ?? "";

    // basic validation
    if (!skillName || !category) {
      setMessage({ type: "error", text: "Please fill all fields." });
      return;
    }

    // ensure a user is logged in (don't hardcode user)
    if (!currentUser) {
      setMessage({ type: "error", text: "You must be logged in to add a skill." });
      return;
    }

    // derive a userId from your user object. Adjust if your user model uses `id` instead.
    const userId = (currentUser as any).username ?? (currentUser as any).email ?? null;
    if (!userId) {
      setMessage({ type: "error", text: "Invalid user id. Check userStore." });
      return;
    }

    // Prevent adding exact duplicate (same skill name + category) for the same user
    const existing = getSkillsByUser(userId).some(
      (s) =>
        s.skill.toLowerCase() === skillName.toLowerCase() &&
        s.category.toLowerCase() === category.toLowerCase()
    );
    if (existing) {
      setMessage({ type: "error", text: "You already added this skill." });
      return;
    }

    // construct the new Skill object (matches your Skills type)
    const newSkill: Skills = {
      _id: crypto.randomUUID(),     // unique id
      skill: skillName,
      category,
      createdAt: new Date(),
      userId,                       // attach current user's id
    };

    try {
      // call your store method (store should be implemented as addSkill(userId, skill))
      addSkill(userId, newSkill);

      // success feedback
      setMessage({ type: "success", text: "Skill added successfully ✅" });

      // reset form fields
      form.reset();

      // clear the message after 2.5s
      setTimeout(() => setMessage(null), 2500);
    } catch (err) {
      console.error("Failed to add skill:", err);
      setMessage({ type: "error", text: "Something went wrong. Try again." });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-2xl">Add Skill</DialogTitle>

        {/* form uses a real <form> so .reset() works and keyboard submit (Enter) works */}
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <AppInput name="skill" label="Skill Name" placeholder="e.g. JavaScript" />

          {/* make sure your AppSelect forwards the `name` attribute so FormData picks it up */}
          <AppSelect
            name="category"
            label="Category"
            options={[
              { label: "Technology", value: "technology" },
              { label: "Business", value: "business" },
              { label: "Design", value: "design" },
            ]}
          />

          {/* feedback message */}
          {message && (
            <p
              className={`text-center font-medium ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </p>
          )}

          {/* ensure this button is a submit button */}
          <FormButton className="btn btn-primary w-full rounded-md mt-5 !py-3">
            Submit
          </FormButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
