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
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: Transition.ease1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default MotionFade;
