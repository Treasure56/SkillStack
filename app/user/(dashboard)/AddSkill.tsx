"use client"
import AppInput from "@/app/components/forms/AppInput";
import AppSelect from "@/app/components/forms/AppSelect";
import FormButton from "@/app/components/forms/FormButton";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useSkillStore } from "@/store/skillStore";
import { Skills } from "@/types/skills";
import { FormEvent, ReactNode, useState } from "react";

export default function AddSkill({ children }: { children: ReactNode }) {
  const {addSkill} = useSkillStore()
   const [message, setMessage] = useState<{ type: "success" | "error"; message: string } | null>(null);


    const handleFormSubmit = (e:FormEvent) =>{
      e.preventDefault() // to stop page reload
      const formData = new FormData(e.currentTarget as unknown as HTMLFormElement)
      const skill =  formData.get("skill")?.toString()
      const category = formData.get("category")?.toString()
  
      if(!skill|| !category){
        setMessage({
          type: "error",
          message: "All fields are required"
        })
        return
      }
  
      // construct a new user object 
      const newSkill: Skills = {
        _id: crypto.randomUUID(),
        skill, 
        category,
        createdAt: new Date(),
      };

      try{
        addSkill(newSkill);
        setMessage({
          type: "success",
          message: "Skill added successfully"
        })
        // clear form
        if(e.currentTarget instanceof HTMLFormElement){
          e.currentTarget.reset()
        }
      }catch(err){
        setMessage({
          type: "error",
          message: "Something went wrong"})
      }
      // // save in zustand
      // addSkill(newSkill)

      console.log({newSkill})

      // router.push(paths.home)
      
  
  
      // e.currentTarget.clea
    }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-2xl">Add Skill</DialogTitle>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <AppInput
            name="skill"
            label="Skill Name"
            placeholder="e.g. JavaScript"
          />
          <AppSelect
          name="category"
            label="Category"
            options={[
              { label: "Technology", value: "technology" },
              { label: "Business", value: "business" },
              { label: "Design", value: "design" },
            ]}
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
