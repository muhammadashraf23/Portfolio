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
      className="py-20 text-[#0a0a0a] relative z-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <SectionContainer className="relative z-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-base md:text-lg">
            Interested in a polished product, a modern web experience, or a thoughtful collaboration?
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 lg:p-10 rounded-3xl shadow-glow-purple">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-8 md:gap-10">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
                  <Image
                    src="/images/logo.PNG"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-full relative z-10 border-2 border-background"
                  />
                </div>
                <span className="font-bold text-2xl text-gradient font-orbitron tracking-wider">
                  Muhammad Ashraf
                </span>
              </div>
              <p className="text-zinc-600 text-sm md:text-base text-center lg:text-left leading-relaxed max-w-sm">
                Crafting premium digital experiences through scalable full-stack architecture and modern web design.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center rounded-full border border-black/10 bg-background/80 px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-all hover:border-accent-cyan-500 hover:text-accent-cyan-500"
              >
                Start a conversation
              </a>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg md:text-xl font-bold mb-5 text-gradient-secondary font-orbitron tracking-[0.2em] uppercase text-sm">
                Navigate
              </h3>
              <div className="flex flex-col gap-3 text-zinc-600 font-medium items-center lg:items-start">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="transition-colors hover:text-accent-cyan-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <h3 className="text-lg md:text-xl font-bold mb-5 text-gradient-secondary font-orbitron tracking-[0.2em] uppercase text-sm">
                Connect
              </h3>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center border-accent-purple-500/30 hover:border-accent-cyan-500 hover:shadow-glow-cyan transition-all hover:scale-110 text-[#0a0a0a] hover:text-accent-cyan-400 shadow-glow-purple"
                      aria-label={social.label}
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-black/10 pt-6 text-center text-sm text-zinc-600">
          <p>© {currentYear} Muhammad Ashraf. All rights reserved.</p>
        </div>
      </SectionContainer>
    </motion.footer>
  );
};

export default Footer;
