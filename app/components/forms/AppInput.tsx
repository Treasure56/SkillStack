import { ComponentPropsWithoutRef } from "react";

 export type AppInputProps = ComponentPropsWithoutRef<"input"> &{
    label: string;
 }
export default function AppInput({ label, ...props }: AppInputProps) {
  return (
     <div className=" flex flex-col gap-1 w-full">
        <label htmlFor="" className="font-medium">{label}</label>
        <input {...props} className="app-input w-full" />
      </div>
  );
}