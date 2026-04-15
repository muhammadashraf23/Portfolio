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
    <div ref={containerRef} className="relative flex flex-col h-full w-full bg-[#050014] overflow-hidden" id="about">

      {/* Cyber Grid Pattern Background */}
      <div className="bg-cyber-grid pointer-events-none opacity-60"></div>

      {/* Full Screen 3D Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
        <Scene />
      </div>

      {/* Content Overlay */}
      <motion.section 
        style={{ scale, opacity }}
        className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-20 z-[20] pt-[120px] pb-[100px]"
      >

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full max-w-5xl mt-8"
        >
          {/* Subtitle */}
          <span className="text-accent-cyan font-bold font-orbitron tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-md uppercase mb-2 md:mb-4 text-glow-cyan text-center">
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
            className="text-center font-black text-white leading-[0.95] mb-8 uppercase md:tracking-wider font-orbitron"
          >
            <h1 className="flex flex-col items-center justify-center text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw]">
              <div className="flex">
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
              
              <div className="flex text-white mix-blend-difference">
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

              <div className="flex mt-[-1vw] text-white mix-blend-difference">
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
          <p className="text-gray-300 text-center max-w-[700px] text-sm md:text-base lg:text-lg mb-10 leading-relaxed px-4 opacity-90 drop-shadow-md z-[30]">
            Building the future of digital experiences. Specialized in highly scalable architectures, 
            interactive full-stack applications, and premium WebGL integrations.
          </p>



          {/* Action Buttons */}
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center font-orbitron tracking-widest mt-2 z-[30]">
            <MagneticButton>
              <a
                href="#contact"
                className="relative overflow-hidden group bg-white text-black px-8 py-3.5 md:px-10 md:py-4 rounded-none font-bold text-sm block transition-transform border border-white"
              >
                <span className="absolute inset-0 w-full h-full bg-[#ff3300] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 group-hover:text-white transition-colors">GET IN TOUCH</span>
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="#projects"
                className="relative overflow-hidden group border border-zinc-700 bg-transparent text-gray-300 px-8 py-3.5 md:px-10 md:py-4 rounded-none font-bold text-sm block hover:text-white transition-colors hover:border-white"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                <span className="relative z-10">VIEW PROJECTS</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#skills" className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 md:w-[22px] md:h-9 border-[1.5px] border-gray-400 rounded-full flex justify-center p-1"
            >
              <div className="w-[3px] h-2 bg-gray-400 rounded-full mt-[2px]" />
            </motion.div>
          </a>
        </motion.div>

      </motion.section>
    </div>
  );
}
