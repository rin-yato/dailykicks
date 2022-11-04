import React from "react";
import { motion } from "framer-motion";
import Animation from "../Animation";
import Transition from "../Transition";

function MotionFade({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      whileInView="whileInView"
      transition="transition"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ { opacity: 0 } }
        transition={{ duration: 0.15, ease: Transition.ease4 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default MotionFade;
