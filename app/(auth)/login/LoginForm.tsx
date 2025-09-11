"use client"
import AppInput, { AppInputProps } from "@/app/components/forms/AppInput";
import FormButton from "@/app/components/forms/FormButton";
import { useUserStore } from "@/store/userStore";
import { paths } from "@/utils/paths";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent} from "react";

export default function LoginForm() {
  // extract the store action
  const { setUser } = useUserStore();

  //Local state for controlled input
const router = useRouter()
  const handleFormSubmit = (e:FormEvent) =>{
    e.preventDefault() // to stop page reload
    const formData = new FormData(e.currentTarget as unknown as HTMLFormElement)
    const username =  formData.get("username")?.toString()
    const email = formData.get("email")?.toString()

    if(!username || !email) return

    // construct a new user object 
    const newUser = {username, email};
    // save in zustand
    setUser(newUser)

    router.push(paths.user)

    // e.currentTarget.clea
  }

  return (
      <form onSubmit={handleFormSubmit} action="" className=" flex flex-col gap-4 mt-4">
        <div className=" flex flex-col gap-4">
          {formfields.map((field, i) => (
          <AppInput key={i} {...field} />
        ))}
        </div>
        <FormButton  className="btn-primary !px-4 py-3 w-full font-medium rounded-md">
          Login
        </FormButton>
        <p>Don&apos;t have an account? <Link href={paths.register} className="text-brand-primary">Sign Up</Link></p>
      </form>
  );
}

const formfields: AppInputProps[] = [
  {
    label: "User Name",
    placeholder: "tee",
    name: "username",
  },
  {
    label: "Email",
    placeholder: "example@gmail.com",
    name: "email",
  },
];
