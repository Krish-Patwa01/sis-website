import { Target, UsersRound, FileSearch, Siren, ChevronsRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Target,
    title: "Red Teaming",
    text: "APT simulation that mimics real-world attackers to test your defense, detection and response end to end.",
    href: "/services/red-teaming",
  },
  {
    icon: UsersRound,
    title: "Social Engineering",
    text: "Phishing, vishing and USB-drop campaigns that measure and strengthen your human firewall.",
    href: "/services/offensive-security",
  },
  {
    icon: FileSearch,
    title: "Digital Forensics",
    text: "Incident investigation, root cause analysis and legal-grade chain of custody for devices, logs and email.",
    href: "/services/digital-forensics-ir",
  },
  {
    icon: Siren,
    title: "Incident Response",
    text: "IR retainers, custom playbooks and post-incident reviews for rapid containment and recovery.",
    href: "/services/incident-response",
  },
];

export default function AdvancedServices() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-24 lg:pt-16 lg:pb-32" aria-label="Advanced services">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header section — two column */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left side — kicker & heading */}
          <Reveal>
            <div>
              <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
                <span className="h-[2px] w-5 bg-electric" aria-hidden />
                Advanced Services
              </span>
              <h2 className="mt-5 font-display text-[38px] font-bold leading-tight text-snow sm:text-[48px]">
                Specialized <span className="text-gradient">Cyber Security</span> Solutions Offered
              </h2>
            </div>
          </Reveal>

          {/* Right side — description */}
          <Reveal delay={100}>
            <p className="text-[15px] leading-[1.8] text-mist">
              Our specialized cyber security solutions are crafted to tackle the distinct challenges businesses
              encounter in securing their digital assets. From thorough risk assessments to proactive threat detection
              and incident response, we offer a range of services covering network security, endpoint protection, cloud
              security, and data privacy. With a focus on innovation and compliance, we deliver cutting-edge solutions
              that align with industry standards, ensuring robust protection for your critical infrastructure and sensitive
              data.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-electric px-6 py-3 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(230,36,78,0.4)]"
            >
              View All Services <ChevronsRight size={18} aria-hidden />
            </a>
          </Reveal>
        </div>

        {/* Service cards grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-24">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-lg border border-line/50 bg-white p-7 transition-all duration-300 hover:border-electric/30 hover:shadow-[0_20px_40px_-15px_rgba(230,36,78,0.25)]">
                <div className="icon-tile h-16 w-16 !rounded-full transition-all duration-300 group-hover:!bg-electric group-hover:!text-white group-hover:scale-110">
                  <s.icon size={28} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-[18px] font-bold text-snow">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mist">{s.text}</p>
                <a
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-electric transition-all hover:gap-2.5"
                >
                  Read More <ChevronsRight size={16} aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
