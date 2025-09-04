import { paths } from "@/utils/paths";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-4 w-full border-b border-neutral-50">
      <header className="flex justify-between items-center app-container w-full">
        <Link href={paths.home} className="text-3xl font-bold">SkillStack</Link>
        <nav className="flex gap-6">
          <Link href={paths.register}className="btn btn-primary !py-2 !px-3 rounded-lg">Sign In</Link>
          <Link href={paths.login} className=" btn btn-primary-border !px-3 !py-2 rounded-lg">Sign Up</Link>
        </nav>
      </header>
    </div>
  );
}