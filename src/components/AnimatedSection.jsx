'use client'
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay, className, initial, whileInView, transition, viewport }) => {
  return (
    <motion.div
      className={className}
      initial={initial || { opacity: 0, scale: 0.9 }}
      whileInView={whileInView || {
        opacity: 1,
        scale: 1,
      }}
      transition={transition || {
        delay: delay || 0,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={viewport || { once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
