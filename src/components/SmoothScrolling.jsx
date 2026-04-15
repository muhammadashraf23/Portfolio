"use client";
import { ReactLenis } from 'lenis/react';

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}
