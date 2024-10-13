import { Folder, Home, Mail, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 text-white space-y-10 bg-gray-500 py-10 px-4  rounded-r-xl">
      {" "}
      <Home className="w-[48px] h-[48px] hover:animate-bounce hover:underline " />
      <User className="w-[48px] h-[48px] hover:animate-bounce" />
      <Folder className="w-[48px] h-[48px] hover:animate-bounce" />
      <Mail className="w-[48px] h-[48px] hover:animate-bounce" />
    </div>
  );
}
