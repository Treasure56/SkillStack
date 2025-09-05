"use client";
import { cn } from "@/lib/utils";
import { paths } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;
  return (
    <div className="flex w-full border-b border-neutral-50">
      <header className="flex justify-between items-center app-container w-full">
        <Link href={paths.home} className="text-3xl font-bold">
          <Image
            alt="skillStack Logo"
            width={120}
            height={120}
            src="/images/logo.png"
          />
        </Link>
        <nav className="flex gap-6">
          {navlinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                cn(
                  "py-3 px-2 rounded-lg font-medium",
                  isActive(href)
                    ? "btn btn-primary"
                    : "text-neutral-600 hover:text-neutral-900"
                )
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}

const navlinks = [
  { href: paths.dashboard, label: "Dashboard" },
  { href: paths.profile, label: "Profile" },
  { href: paths.help, label: "Help & Support" },
];
