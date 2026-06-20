import { ScanSearch, MonitorCheck, ClipboardCheck, ChevronsRight } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  {
    icon: ScanSearch,
    title: "Security Assessments",
    text: "Risk-driven evaluation of your networks, applications and cloud — find the gaps before attackers do.",
  },
  {
    icon: MonitorCheck,
    title: "Threat Monitoring",
    text: "24/7 SOC as a Service with continuous detection, alerting and rapid incident response.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Audit",
    text: "ISO, SOC 2, privacy and sector-specific audits that turn compliance into confidence.",
  },
];

export default function QuickCards() {
  return (
    <section className="relative -mt-10 pb-6 lg:-mt-16" aria-label="Core capabilities">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-3 lg:px-8">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 110}>
            <article className="group relative h-full overflow-hidden rounded-xl border border-line bg-white p-7 shadow-[0_18px_45px_-20px_rgba(18,36,65,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_-20px_rgba(230,36,78,0.3)]">
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-electric transition-transform duration-300 group-hover:scale-x-100" aria-hidden />
              <div className="icon-tile h-14 w-14 !rounded-full">
                <c.icon size={26} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-[18px] font-bold text-snow">{c.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-mist">{c.text}</p>
              <a
                href="#services"
                className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-electric hover:underline"
              >
                Read More <ChevronsRight size={15} aria-hidden />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
