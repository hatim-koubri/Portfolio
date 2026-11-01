"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeInProps = HTMLMotionProps<"div">;

export function FadeIn({ children, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
