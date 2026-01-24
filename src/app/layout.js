// app/layout.js or your layout file
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Muhammad Ashraf | Expert Full Stack Developer",
    template: "%s | Muhammad Ashraf"
  },
  description: "Senior Full Stack Developer specializing in React, Next.js, Node.js, and Mobile App Development. Building high-performance, scalable web solutions with a focus on user experience.",
  keywords: ["Muhammad Ashraf", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js Expert", "Web Development Pakistan", "MERN Stack"],
  authors: [{ name: "Muhammad Ashraf" }],
  creator: "Muhammad Ashraf",
  openGraph: {
    title: "Muhammad Ashraf | Full Stack Expert",
    description: "Professional Portfolio showcasing innovative web and mobile solutions.",
    url: "https://muhammad-ashraf.vercel.app",
    siteName: "Muhammad Ashraf Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ashraf Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ashraf | Full Stack Expert",
    description: "Building the future of web and mobile applications.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import StarsCanvas from "@/components/canvas/Stars";
import CursorTrail from "@/components/CursorTrail";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-y-scroll overflow-x-hidden`}
      >
        <CursorTrail />
        <StarsCanvas />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
