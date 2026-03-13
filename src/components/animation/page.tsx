"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedText({ children, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      // 'once: false' se ye har baar scroll par repeat hoga
      viewport={{ once: false, amount: 0.3 }} 
      transition={{
        type: "spring",
        damping: 15,     // Control karta hai ki kitna "bounce" hoga
        stiffness: 100,  // Animation ki speed/tightness
        duration: 0.8,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}