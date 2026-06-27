import { Star } from "lucide-react";
import Reveal from "./Reveal";

const statCards = [
  {
    label: "Client Success",
    value: "100%",
    text: "An unwavering commitment to client success drives every engagement we deliver.",
  },
  {
    label: "Security Coverage",
    value: "360°",
    text: "From GRC and audits to red teaming and 24/7 defense — complete protection.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-28" aria-label="About us">
      {/* Background squiggle decorations — talakunchi style */}
      <svg
        className="absolute right-[-60px] top-10 h-56 w-56 opacity-[0.12]"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="60" cy="60" r="28" stroke="#e6244e" strokeWidth="10" />
        <circle cx="140" cy="120" r="40" stroke="#e6244e" strokeWidth="10" />
        <path d="M20 170 Q 60 130 110 165" stroke="#e6244e" strokeWidth="10" strokeLinecap="round" />
      </svg>
      <svg
        className="absolute bottom-16 left-[-70px] h-64 w-64 opacity-[0.1]"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="60" r="34" stroke="#e6244e" strokeWidth="10" />
        <path d="M30 160 Q 80 110 170 150" stroke="#e6244e" strokeWidth="10" strokeLinecap="round" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-8">
        {/* Images side — staggered collage */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Reveal variant="left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                alt="Security consultants collaborating with a client"
                className="h-56 w-full object-cover lg:h-64"
              />
            </Reveal>
            <Reveal variant="left" delay={150}>
              <div className="mt-5 bg-electric px-6 py-9 text-center text-white">
                <div className="font-display text-[44px] font-bold leading-none">
                  24<span className="align-top text-[26px]">/7</span>
                </div>
                <div className="mt-3 font-display text-[16px] font-semibold">Security Support</div>
              </div>
            </Reveal>
          </div>
          <Reveal variant="left" delay={100}>
            <div className="mt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-ceo.jpg"
                alt="Shridhar InfoSec Solutions leadership"
                className="h-[420px] w-full object-cover lg:h-[480px]"
                style={{ objectPosition: "center 25%" }}
              />
              <div className="h-2.5 w-3/4 bg-electric" aria-hidden />
            </div>
          </Reveal>
        </div>

        {/* Content side */}
        <div>
          <Reveal>
            <span className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.14em] text-electric">
              <span className="inline-block space-y-1" aria-hidden>
                <span className="block h-[3px] w-6 bg-electric" />
                <span className="block h-[3px] w-4 bg-electric" />
              </span>
              Know Our Company
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-[34px] font-bold leading-tight tracking-tight text-snow sm:text-[44px]">
              Cyber Security Simplified
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-mist">
              Shridhar InfoSec Solutions is your trusted partner for simplified cybersecurity. As a
              next-generation cybersecurity firm, we enable organizations to build trust, mitigate
              risks, and strengthen their security posture. We bring together deep industry
              knowledge, certified expertise, and a practical understanding of today&apos;s digital
              threat landscape — delivering innovative, scalable, and cost-effective information
              security services that empower enterprises to operate securely in a digital-first
              world. Our core values — Integrity, Innovation, Excellence, and Commitment to Client
              Success — guide everything we do.
            </p>
          </Reveal>

          {/* Stat cards — talakunchi style */}
          <Reveal delay={300}>
            <div className="mt-9 grid border border-line sm:grid-cols-2">
              {statCards.map((s, i) => (
                <div key={s.label} className={i === 0 ? "border-b border-line sm:border-b-0 sm:border-r" : ""}>
                  <div className="border-b border-line bg-electric/[0.06] px-6 py-4 text-center">
                    <span className="text-[13.5px] font-bold uppercase tracking-[0.1em] text-electric">
                      {s.label}
                    </span>
                  </div>
                  <div className="px-6 py-7 text-center">
                    <div className="font-display text-[34px] font-bold text-snow">{s.value}</div>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-mist">{s.text}</p>
                    <div className="mt-4 flex justify-center gap-1.5 text-electric">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={17} fill="currentColor" aria-hidden />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
