"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

type StaggerContainerProps = HTMLMotionProps<"div">;

const variants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export function StaggerContainer({
  children,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
