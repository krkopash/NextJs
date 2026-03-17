"use client";

import { motion } from "framer-motion";

export default function AboutTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{x: -50, opacity: 0 }}
      animate={{x: 0, opacity: 1 }}
      exit={{x:50, opacity: 0 }}
      transition={{ duration: 0.6}}
      style={{ border: "2px dashed black", padding: "20px" }} whileHover={{scale:0.8}}>
      <h2> User Template (About Section)</h2>
      {children}
    </motion.div>
  );
}