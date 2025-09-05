"use client";

import { paths } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardNav from "./DashboardNav";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const isUser = pathname?.startsWith(paths.user);

  return (
    <>
      {isUser ? (
        <DashboardNav />
      ) : (
        <div className="flex w-full border-b border-neutral-50">
          <header className="flex justify-between items-center app-container w-full">
            <Link href={paths.home} className="text-3xl font-bold">
              <Image
                alt="SkillStack Logo"
                width={120}
                height={120}
                src="/images/logo.png"
              />
            </Link>
            <nav className="flex gap-6">
              <Link
                href={paths.login}
                className="btn btn-primary !py-2 !px-3 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                href={paths.register}
                className="btn btn-primary-border !px-3 !py-2 rounded-lg"
              >
                Sign Up
              </Link>
            </nav>
          </header>
        </div>
      )}
    </>
  );
}
