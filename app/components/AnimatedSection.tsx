"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({
  classNames,
  children,
  styles,
}: {
  classNames: string;
  children: ReactNode;
  styles: any;
}) {
  return (
    <motion.section
      className={`flex py-10 px-24 items-center justify-center w-full ${classNames}`}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
      style={{ ...styles, height: "85vh" }}
    >
      {children}
    </motion.section>
  );
}
