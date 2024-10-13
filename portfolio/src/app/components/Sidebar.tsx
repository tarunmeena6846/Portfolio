import { Folder, Home, Mail, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 text-white space-y-10 bg-white py-10 px-4  rounded-r-xl">
      {" "}
      <Home className="w-[48px] h-[48px] hover:animate-bounce  text-black" />
      <User className="w-[48px] h-[48px] hover:animate-bounce text-black" />
      <Folder className="w-[48px] h-[48px] hover:animate-bounce text-black" />
      <Mail className="w-[48px] h-[48px] hover:animate-bounce text-black" />
    </div>
  );
}
