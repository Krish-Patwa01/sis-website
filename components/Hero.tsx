import { ChevronsRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#122441] pt-[74px] lg:pt-[118px]" aria-label="Hero">
      {/* Right-side photo (desktop) */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[55%] lg:block"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-ceo.jpg"
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122441]/55 via-transparent to-transparent" />
      </div>

      {/* Decorative accents — talakunchi style */}
      <div className="absolute left-10 top-24 hidden opacity-70 lg:block" aria-hidden>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <path d="M10 70 Q 50 60 25 40 Q 10 20 50 12" stroke="#e6244e" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="14" cy="22" r="7" fill="#e6244e" opacity="0.55" />
        </svg>
      </div>
      <div className="absolute left-[44%] top-36 hidden text-electric lg:block" aria-hidden>
        <Sparkles size={30} />
      </div>
      <div
        className="absolute bottom-12 left-6 hidden h-28 w-40 opacity-60 lg:block"
        style={{
          backgroundImage: "radial-gradient(rgba(230,36,78,0.8) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-24 right-[34%] hidden h-20 w-32 opacity-70 lg:block"
        style={{
          backgroundImage: "radial-gradient(rgba(230,36,78,0.8) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl pb-24 pt-20 lg:max-w-[44%] lg:pb-36 lg:pt-28">
          <Reveal>
            <span className="inline-block bg-[#1a3358]/90 px-5 py-2.5 font-display text-[15px] font-semibold text-white">
              Welcome To <span className="font-bold text-electric">Shridhar InfoSec Solutions</span>
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-[40px] font-bold leading-[1.15] tracking-tight text-white sm:text-[50px] lg:text-[56px]">
              Defending Your Data,<br className="hidden sm:block" />
              <span className="text-gradient">Securing Your Success</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 text-[16px] font-semibold leading-relaxed text-slate-100">
              Safeguarding Your Business with Next-Gen Cyber Defense
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10">
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 border border-white/60 px-7 py-3.5 font-display text-[15.5px] font-semibold text-white transition-all hover:border-electric hover:bg-electric"
              >
                Read More <ChevronsRight size={18} aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Mobile image */}
        <div className="relative -mx-5 lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-ceo.jpg"
            alt="CEO portrait"
            className="h-56 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#122441]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
