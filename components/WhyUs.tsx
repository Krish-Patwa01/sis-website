import { Award, SlidersHorizontal, Headset, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    icon: Award,
    title: "Industry-Leading Expertise",
    text: "Our team of certified cybersecurity professionals brings years of hands-on experience and deep domain knowledge, ensuring top-tier security solutions for businesses of all sizes.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Security Solutions",
    text: "Every business has unique security needs. We tailor our cybersecurity strategies to fit your specific environment, risk profile and compliance obligations for maximum protection.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    text: "Cyber threats don't wait, and neither do we. Our dedicated team is available round the clock for any security concerns, incidents, or queries — whenever you need us.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    text: "With a strong history of successfully securing businesses against evolving cyber threats, we deliver reliable, effective, and results-driven security outcomes.",
  },
];

const stats = [
  { value: "500+", label: "Assessments Delivered" },
  { value: "50+", label: "Certified Experts" },
  { value: "24/7", label: "Threat Monitoring" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32" aria-label="Why choose us">
      <div className="orb left-[-140px] bottom-[5%] h-[380px] w-[380px] bg-violet-glow/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
                <span className="h-[2px] w-5 bg-electric" aria-hidden />
                Why Choose SIS
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-[32px] font-bold leading-tight tracking-tight text-snow sm:text-[40px]">
                Security That Earns <span className="text-gradient">Enterprise Trust</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-[16px] leading-relaxed text-mist">
                A visitor should feel it instantly — and our clients experience it daily. SIS combines certified
                expertise with a relentless commitment to client success.
              </p>
            </Reveal>

            {/* Trust stats strip */}
            <Reveal delay={150}>
              <div className="mt-9 flex gap-8 border-y border-line/60 py-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-[28px] font-bold text-electric">{s.value}</div>
                    <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-mist">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={250}>
              <a href="#contact" className="btn-primary mt-9">
                Talk to a Security Expert
              </a>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} variant="right" delay={i * 90}>
                <article className="group card h-full p-6">
                  <div className="icon-tile h-12 w-12 transition-all duration-300 group-hover:!bg-electric group-hover:!text-white group-hover:scale-110">
                    <r.icon size={22} aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-[16.5px] font-bold text-snow">{r.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-mist">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
