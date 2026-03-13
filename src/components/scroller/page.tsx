"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const ScrollReveal = ({ children, width = "100%" }: ScrollRevealProps) => {
  return (
    <div style={{ position: "relative", width: width, overflow: "hidden" }}>
      <motion.div
        initial={{
          opacity: 0,
          y: 75,
          filter: "blur(10px)",
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
        }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          damping: 25,
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
