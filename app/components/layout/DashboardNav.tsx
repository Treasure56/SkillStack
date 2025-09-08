"use client";
import { cn } from "@/lib/utils";
import { paths } from "@/utils/paths";
import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBadgeHelp, LuHouse, LuUser } from "react-icons/lu";

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
          {navlinks.map((v,i ) => (
            <Link
              key={i}
              href={v.href}
              className={
                cn(
                  "py-1 px-3 rounded-lg font-medium flex items-center gap-2",
                  isActive(v.href)
                    ? "btn btn-primary"
                    : "text-neutral-600 hover:text-neutral-900"
                )
              }
            >
              {v.icon}
              {v.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}

const navlinks = [
  { href: paths.dashboard, label: "Dashboard", icon:<LuHouse /> },
  { href: paths.profile, label: "Profile", icon :<LuUser/>},
  { href: paths.help, label: "Help & Support", icon:<LuBadgeHelp />},
];
