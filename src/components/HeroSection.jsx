"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Scene from "./canvas/Scene";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative flex flex-col h-full w-full bg-transparent overflow-hidden" id="about">

      {/* Cyber Grid Pattern Background */}
      <div className="bg-cyber-grid pointer-events-none opacity-60"></div>

      {/* Content Overlay */}
      <motion.section 
        style={{ scale, opacity }}
        className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen px-4 md:px-12 lg:px-20 z-[20] pt-[100px] md:pt-[120px] pb-[100px] max-w-[1400px] mx-auto gap-10"
      >

        {/* LEFT COLUMN: TYPOGRAPHY & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start text-left w-full md:w-1/2 mt-8 z-[30] order-last md:order-first"
        >
          {/* Subtitle */}
          <span className="text-zinc-600 font-bold font-orbitron tracking-[0.2em] md:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm uppercase mb-4 text-glow-cyan">
            FULL STACK DEVELOPER
          </span>

          {/* Main Title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.2 }
              }
            }}
            className="text-left font-black text-[#0a0a0a] mb-6 uppercase md:tracking-wider font-orbitron"
          >
            <h1 className="flex flex-col items-start leading-[0.9] text-[15vw] sm:text-[12vw] md:text-[6.5vw] lg:text-[5.5vw]">
              <div className="flex text-[#0a0a0a]">
                {"HI, I'M".split("").map((char, index) => (
                  <motion.span
                    key={`hi-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 50, rotateX: -90 },
                      visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                    }}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex text-[#0a0a0a]">
                {"MUHAMMAD".split("").map((char, index) => (
                  <motion.span
                    key={`muhammad-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 50, rotateX: -90 },
                      visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                    }}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <div className="flex text-[#0a0a0a]">
                {"ASHRAF".split("").map((char, index) => (
                  <motion.span
                    key={`ashraf-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 50, rotateX: -90 },
                      visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                    }}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </h1>
          </motion.div>

          {/* Description */}
          <p className="text-zinc-700 text-left max-w-[500px] text-sm md:text-base lg:text-lg mb-10 leading-relaxed font-medium">
            Building the future of digital experiences. Specialized in highly scalable architectures, 
            interactive full-stack applications, and premium WebGL integrations.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 md:gap-6 flex-wrap justify-start font-orbitron tracking-widest mt-2 w-full">
            <MagneticButton>
              <a
                href="#contact"
                className="relative overflow-hidden group bg-[#0a0a0a] text-white px-8 py-3.5 md:px-10 md:py-4 rounded-none font-bold text-xs sm:text-sm block transition-transform border border-[#0a0a0a]"
              >
                <span className="absolute inset-0 w-full h-full bg-[#ff3300] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 text-white transition-colors">GET IN TOUCH</span>
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="#projects"
                className="relative overflow-hidden group border border-[#0a0a0a] bg-transparent text-[#0a0a0a] px-8 py-3.5 md:px-10 md:py-4 rounded-none font-bold text-xs sm:text-sm block transition-colors"
              >
                <span className="absolute inset-0 w-full h-full bg-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 group-hover:text-white transition-colors">VIEW PROJECTS</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 3D HERO OBJECT */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative w-full md:w-1/2 h-[40vh] md:h-[70vh] flex items-center justify-center pointer-events-auto order-first md:order-last z-[10]"
        >
           {/* Scene is now contained strictly within the right half of the screen */}
           <Scene />
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#skills" className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 md:w-[22px] md:h-9 border-[1.5px] border-zinc-500 rounded-full flex justify-center p-1"
            >
              <div className="w-[3px] h-2 bg-zinc-500 rounded-full mt-[2px]" />
            </motion.div>
          </a>
        </motion.div>

      </motion.section>
    </div>
  );
}
