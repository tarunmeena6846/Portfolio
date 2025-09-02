import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButtons } from "../MagneticButtons";
import Curve from "./Curve";
import { menuSlide, slide } from "./anim";
import { usePathname } from "next/navigation";
export function Nav() {
  const pathname = usePathname();
  const routes = [
    { route: "/", name: "Home" },
    { route: "/about", name: "About" },
    { route: "/projects", name: "Projects" },
  ];

  return (
    <motion.div
      className="bg-white fixed top-0 right-0 z-[89] h-[100vh] w-screen md:w-[40%] p-10"
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* <div className="h-[100%] p-[100px]"> */}
      <div className="flex justify-center w-full mt-[80px] mb-[40px] border-b border-black p-10">
        <h1 className="uppercase">Navigation</h1>
      </div>
      {routes.filter(items => items.route !== pathname).map((route, index) => (
        <motion.div
          key={index}
          className="relative flex items-center space-y-5 ml-10"
          custom={index}
          variants={slide}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <MagneticButtons>
            <motion.div className="w-[10px] h-[10px] bg-black rounded-full "></motion.div>
          </MagneticButtons>
          <MagneticButtons>
            <Link href={route.route} className="ml-[20px] text-5xl">
              {route.name}
            </Link>
          </MagneticButtons>
        </motion.div>
        // </MagneticButtons>
      ))}
      <Curve />
      {/* </div> */}
    </motion.div>
  );
}
