"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorTrail() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Disable custom cursor on mobile
        const isMobile = window.innerWidth < 768 || ('ontouchstart' in window);
        if (isMobile) return;

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // If hovering over a button or link, enlarge the cursor
            if (e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        // Hide default cursor completely to sell the effect
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, []);

    // Spring configuration for the lagging ring
    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
    };

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            {/* The primary tiny dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            
            {/* The trailing, morphing ring */}
            <motion.div
                className="fixed top-0 left-0 border-[1.5px] border-accent-cyan rounded-full shadow-[0_0_15px_rgba(0,0,0,0.02)]"
                animate={{
                    x: mousePosition.x - (isHovering ? 32 : 16),
                    y: mousePosition.y - (isHovering ? 32 : 16),
                    width: isHovering ? 64 : 32,
                    height: isHovering ? 64 : 32,
                    backgroundColor: isHovering ? "rgba(0,0,0,0.02)" : "transparent"
                }}
                transition={spring}
                style={{
                   backdropFilter: isHovering ? "blur(2px)" : "none" 
                }}
            />
        </div>
    );
}
