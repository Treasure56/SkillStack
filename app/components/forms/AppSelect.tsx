import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";
import { AppInputProps } from "./AppInput";

export type AppSelectOptions = {
  label: ReactNode;
  value: string;
};

export type AppSelectProps = Omit<AppInputProps, "placeholder"> & {
  label: string;
  options: AppSelectOptions[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function AppSelect({
  label,
  name,
  options,
  placeholder = "Select an option",
  value,
  onChange,
}: AppSelectProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium">{label}</label>
      <Select name={name} value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full rounded-md border border-neutral-400 outline-brand-primary py-5">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="">
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
