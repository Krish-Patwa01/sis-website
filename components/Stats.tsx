"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Compliance Frameworks Covered" },
  { value: 9, suffix: "", label: "Specialized Service Lines" },
  { value: 7, suffix: "+", label: "Industries Served" },
  { value: 24, suffix: "/7", label: "Monitoring & Support" },
  { value: 100, suffix: "%", label: "Client Success Focus" },
  { value: 360, suffix: "°", label: "Security Coverage" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(eased * target));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref} className="font-display text-[38px] font-bold tracking-tight text-white lg:text-[44px]">
      {value}
      <span className="text-electric">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative mt-20 overflow-hidden bg-[#122441]" aria-label="Key statistics">
      {/* Decorative dots */}
      <div
        className="absolute right-8 top-6 h-20 w-32 opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(230,36,78,0.8) 1.5px, transparent 1.5px)",
          backgroundSize: "15px 15px",
        }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 py-16 sm:grid-cols-3 lg:grid-cols-6 lg:px-8 lg:py-20">
        {stats.map((s) => (
          <div key={s.label} className="px-2 text-center">
            <Counter target={s.value} suffix={s.suffix} />
            <p className="mt-2 text-[12.5px] font-semibold text-slate-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
