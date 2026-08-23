// app/layout.js or your layout file
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientOnlyEffects from "@/components/ClientOnlyEffects";

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
  metadataBase: new URL("https://muhammad-ashraf.vercel.app"),
  title: {
    default: "Muhammad Ashraf | Full Stack Developer",
    template: "%s | Muhammad Ashraf"
  },
  description: "Senior Full Stack Developer specializing in React, Next.js, Node.js, and Mobile App Development. Building high-performance, scalable web solutions with a focus on user experience.",
  keywords: ["Muhammad Ashraf", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js Developer", "Web Development Pakistan", "MERN Stack"],
  authors: [{ name: "Muhammad Ashraf" }],
  creator: "Muhammad Ashraf",
  alternates: {
    canonical: "https://muhammad-ashraf.vercel.app",
  },
  openGraph: {
    title: "Muhammad Ashraf | Full Stack Developer",
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
    title: "Muhammad Ashraf | Full Stack Developer",
    description: "Building the future of web and mobile applications.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Ashraf",
    "url": "https://muhammad-ashraf.vercel.app",
    "image": "https://muhammad-ashraf.vercel.app/images/profile_photo.png",
    "jobTitle": "Full Stack Developer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Karachi"
    },
    "sameAs": [
      "https://github.com/muhammadashraf23",
      "https://www.linkedin.com/in/muhammadashrafz23/"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster DNS + TLS handshake */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Non-blocking font load — replaces render-blocking @import in CSS */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden min-h-screen relative`}
      >
        <div className="noise-overlay pointer-events-none"></div>
        {/* Soft radial background accent for modern look */}
        <div className="fixed inset-0 -z-10 bg-gradient-radial from-accent-cyan-100/30 via-background to-background opacity-70" aria-hidden="true"></div>
        <ClientOnlyEffects>
          <Navbar />
          <main className="flex flex-col items-center w-full min-h-screen">{children}</main>
        </ClientOnlyEffects>
      </body>
    </html>
  );
}
