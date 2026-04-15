"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "/resume.pdf", isExternal: true },
    { name: "GitHub", href: "https://github.com/muhammadashraf23", isExternal: true },
  ];

  return (
    <div className="fixed top-8 w-full flex justify-center z-[100] px-4 pointer-events-none">
      {/* Outer rounded container exactly matching the image */}
      <nav className="pointer-events-auto h-[55px] md:h-[65px] glass-pill flex items-center justify-between px-4 md:px-8 w-full max-w-[850px] border border-[#a855f7]/30 shadow-[0_0_20px_rgba(168,85,247,0.15),inset_0_0_15px_rgba(168,85,247,0.1)] rounded-full bg-[#0a0118]/80 backdrop-blur-xl">
        
        {/* Logo Section */}
        <Link
          href="#about"
          className="flex items-center group z-50 mr-4 md:mr-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#a855f7] blur-md rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <Image
              src="/images/logo.PNG"
              alt="logo"
              width={35}
              height={35}
              className="cursor-pointer rounded-full relative z-10 md:w-[38px] md:h-[38px]"
            />
          </div>
          <div className="font-bold ml-3 text-[#0a0a0a]/95 group-hover:text-accent-cyan transition-colors whitespace-nowrap hidden sm:flex flex-col font-orbitron text-xs md:text-sm leading-tight tracking-wider">
            <span>Muhammad</span>
            <span>Ashraf</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = link.name === "About";
            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "GitHub" ? "_blank" : undefined}
                  rel={link.name === "GitHub" ? "noreferrer" : undefined}
                  download={link.name === "Resume"}
                  className="cursor-pointer hover:text-[#0a0a0a] transition-colors text-xs lg:text-sm px-4 py-2 text-zinc-700 font-medium tracking-wide hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`cursor-pointer transition-all text-xs lg:text-sm px-5 py-2 rounded-full font-medium tracking-wide ${
                  isActive
                    ? "bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-[#0a0a0a] shadow-[0_4px_15px_rgba(168,85,247,0.5)] border border-[#a855f7]/50"
                    : "text-zinc-700 hover:text-[#0a0a0a] hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0a0a0a] cursor-pointer p-2 z-50 rounded-full bg-white/5 border border-black/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
             <span className="text-xl block w-6 text-center">✕</span>
          ) : (
             <span className="text-xl block w-6 text-center">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            className="absolute top-[90px] left-4 right-4 glass-card rounded-2xl flex flex-col p-6 gap-3 md:hidden border border-accent-purple-500/40 pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-[#0a0118]/95 backdrop-blur-2xl"
          >
            {navLinks.map((link) => {
              const isActive = link.name === "About";
              if (link.isExternal) {
                 return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      target={link.name === "GitHub" ? "_blank" : undefined}
                      rel={link.name === "GitHub" ? "noreferrer" : undefined}
                      download={link.name === "Resume"}
                      className="text-base font-orbitron tracking-widest text-zinc-700 hover:text-[#0a0a0a] transition-colors py-3 border-b border-black/5 text-center"
                    >
                      {link.name}
                    </a>
                 );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-orbitron tracking-widest transition-colors py-3 border-b border-black/5 text-center rounded-lg ${isActive ? 'bg-[#9333ea]/20 text-[#0a0a0a]' : 'text-zinc-700 hover:text-[#0a0a0a]'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
