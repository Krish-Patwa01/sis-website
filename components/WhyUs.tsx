import { Award, SlidersHorizontal, Headset, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Industry-Leading Expertise",
    text: "Our team of cybersecurity professionals brings years of hands-on experience and in-depth knowledge, ensuring top-tier security solutions for businesses of all sizes.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Security Solutions",
    text: "Every business has unique security needs. We tailor our cybersecurity strategies to fit your specific requirements, ensuring maximum protection.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    text: "Cyber threats don't wait, and neither do we. Our dedicated support team is available round the clock for any security concerns, incidents, or queries.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    text: "With a strong history of successfully securing businesses against cyber threats, we deliver reliable, effective, and results-driven security solutions.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32" aria-label="Why choose us">
      <div className="orb left-[-140px] bottom-[5%] h-[380px] w-[380px] bg-violet-glow/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              kicker="Why Choose SIS"
              title={
                <>
                  Security That Earns <span className="text-gradient">Enterprise Trust</span>
                </>
              }
              description="A visitor should feel it instantly — and our clients experience it daily. SIS combines certified expertise with a relentless commitment to client success."
            />
            <Reveal delay={250}>
              <a href="#contact" className="btn-primary mt-9">
                Talk to a Security Expert
              </a>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} variant="right" delay={i * 90}>
                <article className="card h-full p-6">
                  <div className="icon-tile h-11 w-11">
                    <r.icon size={20} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-[16px] font-bold text-snow">{r.title}</h3>
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
