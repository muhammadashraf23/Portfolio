"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionContainer from "@/components/SectionContainer";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

const socialLinks = [
  { icon: FaEnvelope, label: "Email", href: `mailto:${contact.email}` },
  { icon: FaLinkedin, label: "LinkedIn", href: contact.linkedin },
  { icon: FaGithub, label: "GitHub", href: contact.github },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="pb-12 pt-8 text-[#0a0a0a] relative z-20 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <SectionContainer className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">
          {/* Logo & Bio Column */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <Image
                  src="/images/logo.PNG"
                  alt="Logo"
                  width={42}
                  height={42}
                  className="rounded-full relative z-10 border border-black/10"
                />
              </div>
              <span className="font-bold text-xl text-gradient font-orbitron tracking-wider">
                Muhammad Ashraf
              </span>
            </div>
            <p className="text-zinc-800 text-sm md:text-base leading-relaxed max-w-sm">
              Crafting premium digital experiences through scalable full-stack architecture and modern web design.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center rounded-full border border-black/10 bg-background px-4 py-2 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-black hover:text-white hover:border-black"
            >
              Start a conversation
            </a>
          </div>

          {/* Navigation links Column */}
          <div className="md:col-span-3 flex flex-col items-start md:pl-8">
            <h3 className="text-xs font-bold mb-4 text-[#0a0a0a] font-orbitron tracking-[0.25em] uppercase">
              Navigate
            </h3>
            <div className="flex flex-col gap-2.5 text-zinc-800 font-medium text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-all hover:text-[#9333ea] hover:translate-x-1 duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h3 className="text-xs font-bold mb-4 text-[#0a0a0a] font-orbitron tracking-[0.25em] uppercase">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0a0a0a] hover:text-white hover:border-black transition-all hover:scale-105 text-[#0a0a0a] bg-transparent"
                    aria-label={social.label}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm text-zinc-600 font-medium">
          <p>© {currentYear} Muhammad Ashraf. All rights reserved.</p>
          <a
            href="#about"
            className="hover:text-[#9333ea] transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </SectionContainer>
    </motion.footer>
  );
};

export default Footer;
