"use client";
import AppInput from "@/app/components/forms/AppInput";
import AppSelect from "@/app/components/forms/AppSelect";
import FormButton from "@/app/components/forms/FormButton";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

export default function EdithSkill({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-2xl">Edit Skill</DialogTitle>
        <form className="flex flex-col gap-4">
          <AppInput
            name="skill"
            label="Skill Name"
            placeholder="e.g. JavaScript"
          />
          <AppSelect
            label="Category"
            options={[
              { label: "Technology", value: "technology" },
              { label: "Business", value: "business" },
              { label: "Design", value: "design" },
            ]}
          />

          <FormButton className="btn btn-primary w-full rounded-md mt-5 !py-3skil">
            Submit
          </FormButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
