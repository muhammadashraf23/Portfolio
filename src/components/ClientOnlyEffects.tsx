"use client";

import dynamic from "next/dynamic";

// Dynamically import client-only visual effects to exclude from the initial JS bundle.
// This defers cursor trail + smooth scroll hydration until after the page paints.
const CursorTrail = dynamic(() => import("@/components/CursorTrail"), { ssr: false });
const SmoothScrolling = dynamic(() => import("@/components/SmoothScrolling"), { ssr: false });

export default function ClientOnlyEffects({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrolling>
      <CursorTrail />
      {children}
    </SmoothScrolling>
  );
}
