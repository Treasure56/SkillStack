import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center">
      <Avatar className="h-24 w-24 md:h-32 md:w-32 bg-gray-700">
        <AvatarImage src="" />
        <AvatarFallback className="bg-neutral-600 font-bold text-white md:text-3xl">
          CN
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Hi, Treasure</h1>
        <p className="text-gray-600">example@gmail.com</p>
      </div>
    </div>
  );
}
