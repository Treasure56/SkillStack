import FormButton from "@/app/components/forms/FormButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { dummySkills } from "@/types/skills";
import { ReactNode } from "react";

const skill = dummySkills[0];

export default function DeleteModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        {" "}
        <h2 className="text-lg font-semibold">Are you sure yoy want to delete {skill.skill}?</h2>
        <p className="text-sm text-gray-500 px-0.5 bg-red-100 py-1 rounded">
          This action cannot be undone
        </p>
        <FormButton className="btn btn-primary w-full rounded-md mt-5 !py-3skil">
          Delete
        </FormButton>
      </DialogContent>
    </Dialog>
  );
}
