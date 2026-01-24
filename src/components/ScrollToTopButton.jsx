'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full glass-container text-white shadow-glow-purple hover:shadow-glow-cyan z-[9999] border-2 border-accent-purple-500/50 hover:border-accent-cyan-500 hover:scale-110 active:scale-95 cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.5 }}
          whileHover={{ y: -5 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
