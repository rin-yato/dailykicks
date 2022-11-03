import React from "react";
import { motion } from "framer-motion";
import Animation from "../Animation";

function MotionFade({ children }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export default MotionFade;
