"use client";

import SmoothScrolling from "@/components/SmoothScrolling";
import CursorTrail from "@/components/CursorTrail";

export default function ClientOnlyEffects({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrolling>
      <CursorTrail />
      {children}
    </SmoothScrolling>
  );
}
