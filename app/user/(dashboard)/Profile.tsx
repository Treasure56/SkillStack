"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/store/userStore";

export default function Profile() {
  const user = useUserStore()
  const initials = user.user?.username?.slice(0, 2).toUpperCase();
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center py-6">
      <Avatar className="h-24 w-24 md:h-32 md:w-32 bg-gray-700">
        <AvatarImage src="" />
        <AvatarFallback className="bg-neutral-600 font-bold text-white md:text-3xl">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{user.user?.username}</h1>
        <p className="text-gray-600">{user.user?.email}</p>
      </div>
    </div>
  );
}
