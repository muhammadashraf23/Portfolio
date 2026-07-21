"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "/MUHAMMAD_ASHRAF_Resume.pdf", isExternal: true, download: true },
  { name: "GitHub", href: "https://github.com/muhammadashraf23", isExternal: true, newTab: true },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 w-full flex justify-center z-[100] px-4 pointer-events-none transition-shadow duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.06)] bg-[#f0f0f0]/80 backdrop-blur-xl">
      <nav className="pointer-events-auto h-[55px] md:h-[65px] glass-pill flex items-center justify-between px-4 md:px-8 w-full max-w-[850px] border border-[#0a0a0a]/30 shadow-none rounded-full bg-[#f0f0f0]/80 backdrop-blur-xl">

        {/* Logo */}
        <Link href="#about" className="flex items-center group z-50 mr-4 md:mr-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#a855f7] blur-md rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
            <Image
              src="/images/logo.PNG"
              alt="logo"
              width={35}
              height={35}
              className="cursor-pointer rounded-full relative z-10 md:w-[38px] md:h-[38px]"
            />
          </div>
          <div className="font-bold ml-3 text-[#0a0a0a]/95 group-hover:text-[#9333ea] transition-colors whitespace-nowrap hidden sm:flex flex-col font-orbitron text-xs md:text-sm leading-tight tracking-wider">
            <span>Muhammad</span>
            <span>Ashraf</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noreferrer" : undefined}
                  download={link.download ? true : undefined}
                  className="cursor-pointer hover:text-[#0a0a0a] transition-colors text-xs lg:text-sm px-4 py-2 text-zinc-600 font-medium tracking-wide rounded-full hover:bg-black/5"
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
                    ? "bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-white shadow-[0_4px_15px_rgba(168,85,247,0.3)] border border-[#a855f7]/50"
                    : "text-zinc-600 hover:text-[#0a0a0a] hover:bg-black/5"
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
            className="absolute top-[70px] left-4 right-4 glass-card rounded-2xl flex flex-col p-4 gap-1 md:hidden border border-[#0a0a0a]/20 pointer-events-auto shadow-[0_16px_48px_rgba(0,0,0,0.13)] bg-[#f0f0f0]/95 backdrop-blur-2xl"
          >
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              if (link.isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    target={link.newTab ? "_blank" : undefined}
                    rel={link.newTab ? "noreferrer" : undefined}
                    download={link.download ? true : undefined}
                    className="text-sm font-orbitron tracking-widest text-zinc-600 hover:text-[#0a0a0a] transition-colors py-3 border-b border-black/5 text-center last:border-0"
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
                  className={`text-sm font-orbitron tracking-widest transition-colors py-3 border-b border-black/5 text-center rounded-lg last:border-0 ${
                    isActive
                      ? "bg-[#9333ea]/15 text-[#6b21a8] font-semibold"
                      : "text-zinc-600 hover:text-[#0a0a0a] hover:bg-black/5"
                  }`}
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
