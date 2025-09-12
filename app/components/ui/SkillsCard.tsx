"use client";

import { getCategoryColor, getCategoryIcon } from "@/app/data";
import DeleteModal from "@/app/user/(dashboard)/DeleteModal";
import EdithSkill from "@/app/user/(dashboard)/EditSkill";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Skills } from "@/types/skills";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";

export default function SkillsCard({ skill, category }: Skills) {
  const categoryIcon = getCategoryIcon(category);
  const categoryColorClass = getCategoryColor(category);

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]",
        categoryColorClass
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{categoryIcon}</span>
          <div className="flex flex-col">
            <h3 className="font-semibold text-base text-foreground leading-tight">
              {skill}
            </h3>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiOutlineDotsVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2">
            <DeleteModal
              skill={{ _id: crypto.randomUUID(), skill, category, createdAt: new Date() }}
            >
              <button className="text-brand-primary bg-red-100 rounded-lg p-2 w-full">
                Delete
              </button>
            </DeleteModal>

            <EdithSkill>
              <button className="text-sky-500 w-full">Edit</button>
            </EdithSkill>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-between items-center">
        <Badge variant="outline" className="text-xs w-fit mt-1 px-2 py-0">
          {category}
        </Badge>

        <span className="text-xs font-medium inline-flex items-center btn btn-primary-border rounded-3xl !py-1">
          <LuPlus /> Add Progress
        </span>
      </div>
    </div>
  );
}
