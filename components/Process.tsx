import { Compass, Crosshair, Wrench, BadgeCheck, RefreshCcw } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Compass,
    num: "01",
    title: "Discover",
    text: "Understand your business, assets, threat landscape and regulatory obligations.",
  },
  {
    icon: Crosshair,
    num: "02",
    title: "Assess",
    text: "Risk and gap assessments, VAPT and audits to expose weaknesses before attackers do.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Remediate",
    text: "Prioritized remediation plans, policy development and hardening with hands-on support.",
  },
  {
    icon: BadgeCheck,
    num: "04",
    title: "Comply",
    text: "Achieve and evidence ISO, SOC 2, privacy and sector-specific compliance with confidence.",
  },
  {
    icon: RefreshCcw,
    num: "05",
    title: "Monitor",
    text: "Continuous monitoring, managed compliance and 24/7 response keep you resilient.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 border-y border-line bg-night/40 py-24 lg:py-32"
      aria-label="Our process"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Our Process"
          title={
            <>
              From First Audit to <span className="text-gradient">Always-On Resilience</span>
            </>
          }
          description="A proven, repeatable engagement model that turns security from a checkbox into a continuous business advantage."
        />

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 90} as="li">
              <article className="card relative h-full p-6">
                <span className="font-display absolute right-5 top-4 text-[34px] font-bold text-snow/[0.07]">
                  {s.num}
                </span>
                <div className="icon-tile h-11 w-11">
                  <s.icon size={20} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold text-snow">{s.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-mist">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
