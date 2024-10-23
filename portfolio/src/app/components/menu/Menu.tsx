import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"; // Assuming you're using Radix UI or any other icon library
import { MagneticButtons } from "../MagneticButtons";
import { AnimatePresence } from "framer-motion";
import { Nav } from "./Nav";

export function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <MenuButton handleMenuToggle={handleMenuToggle} isActive={isActive} />
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}

const MenuButton = ({ handleMenuToggle, isActive }) => {
  return (
    <div className="fixed top-5 right-4 z-[90]">
      <MagneticButtons>
        <div
          onClick={handleMenuToggle}
          className="cursor-pointer bg-white p-5 rounded-full hover:bg-red-700"
        >
          <div className="relative w-8 h-8 flex items-center justify-center ">
            <span
              className={`block absolute bg-black  w-6 h-0.5 transition-transform duration-300 ease-in-out  ${
                isActive ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`block absolute bg-black w-6 h-0.5 transition-opacity duration-300 ease-in-out ${
                // isActive ? "opacity-0" : "opacity-100"
                isActive ? "-rotate-45 " : "translate-y-2"
              }`}
            ></span>
            <span
              className={`block absolute bg-black w-6 h-0.5 transition-transform duration-300 ease-in-out ${
                // isActive ? "-rotate-45 " : "translate-y-2"
                isActive ? "opacity-0" : "opacity-100"
              }`}
            ></span>
          </div>
        </div>
      </MagneticButtons>
    </div>
  );
};
