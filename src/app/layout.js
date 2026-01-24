// app/layout.js or your layout file
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Muhammad Ashraf | Full Stack Developer & Web Engineer",
  description:
    "Welcome to the professional portfolio of Muhammad Ashraf — a skilled Full Stack developer specializing in modern web development with React, Vue, Node.js, and cutting-edge technologies. Explore innovative projects, technical expertise, and proven experience in building high-performance, scalable, and visually stunning web applications.",
};


import StarsCanvas from "@/components/canvas/Stars";
import CursorTrail from "@/components/CursorTrail";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background overflow-y-scroll overflow-x-hidden`}
      >
        <CursorTrail />
        <StarsCanvas />
        <Navbar />
        {children}

      </body>
    </html>
  );
}
