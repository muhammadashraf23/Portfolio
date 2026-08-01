import type { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "nav";
};

export default function SectionContainer({
  children,
  className,
  as: Component = "div",
}: SectionContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-content px-4 sm:px-6 md:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}
