"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SectionContainer from "./SectionContainer";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col h-full w-full bg-transparent overflow-hidden">
      {/* Soft accent background for hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-cyan-100/30 via-transparent to-accent-purple-100/20" aria-hidden="true"></div>
      {/* Cyber Grid Pattern Background */}
      <div className="bg-cyber-grid pointer-events-none opacity-60"></div>
      {/* Content Overlay */}
      <motion.section 
        className="relative flex flex-col items-center justify-start md:justify-center w-full min-h-0 md:min-h-screen z-[20] pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-24"
      >
        <SectionContainer className="relative flex flex-col items-start justify-start md:justify-center w-full">
        {/* LEFT COLUMN: TYPOGRAPHY & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start text-left w-full mt-2 sm:mt-6 z-[30]"
        >
          {/* Subtitle */}
          <span className="text-accent-cyan-700 font-bold font-orbitron tracking-[0.2em] md:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm uppercase mb-3 sm:mb-4 text-glow-cyan">
            FULL STACK DEVELOPER
          </span>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-left font-black text-[#0a0a0a] mb-4 sm:mb-6 uppercase tracking-tight sm:tracking-normal md:tracking-wider font-orbitron"
          >
            <h1 className="flex flex-col items-start leading-[0.92] text-[9.5vw] min-[400px]:text-[10vw] sm:text-[8.5vw] md:text-[6.5vw] lg:text-[5.5vw]">
              <span>HI, I'M</span>
              <span>MUHAMMAD</span>
              <span>ASHRAF</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-700 text-left max-w-[500px] text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10 leading-relaxed font-medium"
          >
            Full Stack Developer specializing in React, Next.js, and Node. Building high-performance, scalable web solutions with a focus on exceptional user experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-4 md:gap-6 justify-start font-orbitron mt-2 w-full max-w-[420px] sm:max-w-none"
          >
            <MagneticButton className="flex-1 sm:flex-none">
              <a
                href="#contact"
                className="relative overflow-hidden group bg-[#0a0a0a] text-white px-3 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-full font-bold text-[11px] sm:text-xs md:text-sm block w-full text-center tracking-wider sm:tracking-widest transition-all hover:bg-[#333] hover:-translate-y-1 focus:outline-none whitespace-nowrap"
              >
                <span className="relative z-10 transition-colors">GET IN TOUCH</span>
              </a>
            </MagneticButton>
            
            <MagneticButton className="flex-1 sm:flex-none">
              <a
                href="#projects"
                className="relative overflow-hidden group border-2 border-[#0a0a0a]/20 bg-transparent text-[#0a0a0a] px-3 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-full font-bold text-[11px] sm:text-xs md:text-sm block w-full text-center tracking-wider sm:tracking-widest transition-all hover:border-[#0a0a0a]/50 hover:bg-[#0a0a0a]/5 hover:-translate-y-1 focus:outline-none whitespace-nowrap"
              >
                <span className="relative z-10 transition-colors">VIEW PROJECTS</span>
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        </SectionContainer>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#skills" className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity" aria-label="Scroll down to Skills section">
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
