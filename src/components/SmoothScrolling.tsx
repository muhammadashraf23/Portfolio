"use client";
import { ReactLenis } from 'lenis/react';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}
