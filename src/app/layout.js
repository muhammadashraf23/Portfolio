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

import CursorTrail from "@/components/CursorTrail";

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden min-h-screen relative`}
      >
        <div className="noise-overlay pointer-events-none"></div>
        {/* Soft radial background accent for modern look */}
        <div className="fixed inset-0 -z-10 bg-gradient-radial from-accent-cyan-100/30 via-background to-background opacity-70" aria-hidden="true"></div>
        <SmoothScrolling>
          <CursorTrail />
          <Navbar />
          <main className="flex flex-col items-center w-full min-h-screen">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
