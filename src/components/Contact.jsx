'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "muhammadashraf2921323@gmail.com", href: "mailto:muhammadashraf2921323@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+92 327 2003387", href: "tel:+923272003387" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Karachi, Pakistan", href: "#" },
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/muhammadashraf23" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadashrafz23/" },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 text-white relative z-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan-900/20 via-background to-accent-purple-900/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_50%)] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-gradient">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-4 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        <p className="text-center text-accent-cyan-400 mb-16 text-sm font-medium">
          ⚡ I'll respond within 24 hours
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 shadow-glow-purple">
              <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">Send a Message</h3>
              <form
                action={process.env.NEXT_PUBLIC_FORM}
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 backdrop-blur-sm border-2 border-accent-purple-500/30 text-white focus:outline-none focus:border-accent-cyan-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 backdrop-blur-sm border-2 border-accent-purple-500/30 text-white focus:outline-none focus:border-accent-cyan-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 backdrop-blur-sm border-2 border-accent-purple-500/30 text-white focus:outline-none focus:border-accent-cyan-500 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 rounded-lg focus:outline-none shadow-glow-purple transition-all hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass-container rounded-xl hover:border-accent-cyan-500 border-2 border-transparent transition-all hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple group-hover:shadow-glow-cyan transition-all">
                    <info.icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-semibold text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
