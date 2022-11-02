import React from "react";
import { motion } from "framer-motion";

function MotionFade({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default MotionFade;
