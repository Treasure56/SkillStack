import AppInput, { AppInputProps } from "@/app/components/forms/AppInput";
import FormButton from "@/app/components/forms/FormButton";
import { paths } from "@/utils/paths";
import Link from "next/link";

export default function RegisterForm() {
  return (
      <form action="" className=" flex flex-col gap-4 mt-4">
        <div className=" flex flex-col gap-4">
          {formfields.map((field, i) => (
          <AppInput key={i} {...field} />
        ))}
        </div>
        <FormButton className="btn-primary !px-4 py-3 w-full font-medium rounded-md">
          Sign Up
        </FormButton>
        <p>Already have and account? <Link href={paths.register} className="text-brand-primary">Sign In</Link></p>
      </form>
  );
}

const formfields: AppInputProps[] = [
  {
    label: "User Name",
    placeholder: "John Doe",
    name: "username",
  },
  {
    label: "Email",
    placeholder: "example@gmail.com",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "********",
    type: "password",
    name: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "********",
    type: "password",
    name: "confirmPassword",
  }
];
