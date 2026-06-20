"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Animation direction */
  variant?: "up" | "left" | "right" | "zoom";
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left" ? "from-left" : variant === "right" ? "from-right" : variant === "zoom" ? "zoom" : "";

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${variantClass} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}
