import React from "react";
import { motion } from "framer-motion";
import Animation from "../Animation";

function MotionFade({ children }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" whileInView="whileInView">
      {children}
    </motion.div>
  );
}

export default MotionFade;
