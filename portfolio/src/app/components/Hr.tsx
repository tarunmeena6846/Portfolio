import { motion } from "framer-motion";

export default function Hr({ myProjectSection }: { myProjectSection: boolean }) {
  return (
    <div className={`flex justify-center flex-col mt-5 ml-10 md:ml-5 ${myProjectSection ? "items-end" : ""}`}>
      <motion.div
        className={`bg-white w-20 h-1 rounded-full mb-2 ${myProjectSection ? "order-2 mb-0" : "order-1"}`}
        initial={{
          opacity: 0,
          x: -45,
        }}
        whileInView={{
          opacity: 1,
          x: -40,
        }}
        transition={{
          delay: 0.2,
          type: "spring",
        }}
      ></motion.div>
      <motion.div
        className={`bg-white w-20 h-1 rounded-full ${myProjectSection ? "order-1 mb-2" : "order-2"}`}
        initial={{
          opacity: 0,
          x: 150,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.3,

          type: "spring",
        }}
      ></motion.div>
    </div>
  );
}
