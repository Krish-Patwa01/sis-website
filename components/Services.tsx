import {
  ScrollText,
  Swords,
  GraduationCap,
  MonitorCheck,
  UserCog,
  Search,
  Siren,
  ShieldAlert,
  FileSearch,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Pillar = {
  icon: LucideIcon;
  badge: string;
  name: string;
  desc: string;
  accent: string;
  iconBox: string;
  image: string;
  groups: { heading: string; items: string[] }[];
};

const pillars: Pillar[] = [
  {
    icon: ScrollText,
    badge: "Flagship · GRC",
    name: "GRC & Compliance Services",
    desc: "End-to-end governance, risk and compliance — from global ISO standards to sector regulations and fully managed compliance programs.",
    accent: "border-electric/30 bg-electric/10 text-electric",
    iconBox: "border-electric/25 bg-electric/10 text-electric",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    groups: [
      {
        heading: "ISO & Global Standards",
        items: [
          "ISO 27001 — information security & risk management",
          "ISO 9001 · 22301 · 27701 · 31000",
          "ISO 42001 — ethical & transparent AI governance",
        ],
      },
      {
        heading: "Regulatory & Data Protection",
        items: [
          "SOC 2 Type 2 readiness & control design",
          "DPDPA, GDPR, HIPAA privacy compliance",
          "SEBI, RBI, IRDAI, ISNP audits for BFSI",
        ],
      },
      {
        heading: "Governance & Advisory",
        items: [
          "CaaS — fully managed compliance",
          "vCISO / DPO on-demand leadership",
          "Risk & gap assessments, policy development",
        ],
      },
    ],
  },
  {
    icon: Swords,
    badge: "Flagship · Offensive",
    name: "Offensive Security & Red Teaming",
    desc: "Think like an attacker. We probe networks, applications, cloud and people to expose weaknesses before adversaries do.",
    accent: "border-electric/30 bg-electric/10 text-electric",
    iconBox: "border-electric/25 bg-electric/10 text-electric",
    image: "https://images.unsplash.com/photo-1550751827-4bd582f23d5c?auto=format&fit=crop&w=800&q=80",
    groups: [
      {
        heading: "VAPT",
        items: [
          "Network, web & mobile app testing (OWASP Top 10)",
          "Cloud & container assessments — AWS, Azure, GCP, K8s",
          "Source code review — static & manual analysis",
        ],
      },
      {
        heading: "Red Teaming & Simulation",
        items: [
          "APT simulation against real-world TTPs",
          "Social engineering — phishing, vishing, USB drops",
          "BAS reports with visual gap dashboards",
        ],
      },
      {
        heading: "Forensics & Incident Response",
        items: [
          "Threat intel — OSINT & dark web monitoring",
          "Forensic investigation with chain of custody",
          "IR retainers, playbooks & post-incident review",
        ],
      },
    ],
  },
  {
    icon: GraduationCap,
    badge: "Flagship · Training",
    name: "Training & Awareness",
    desc: "Your people are the first line of defense. We build security culture from the boardroom to the SOC floor.",
    accent: "border-electric/30 bg-electric/10 text-electric",
    iconBox: "border-electric/25 bg-electric/10 text-electric",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    groups: [
      {
        heading: "Security Awareness",
        items: [
          "Phishing simulation campaigns with tracking",
          "Interactive cyber-hygiene sessions",
          "Poster & email reinforcement campaigns",
        ],
      },
      {
        heading: "Role-Based & Executive",
        items: [
          "Board & C-level cyber strategy briefings",
          "IT & SOC team skill-building — SIEM, threat hunting",
          "Risk & audit deep dives — ISO 31000, ISO 27005",
        ],
      },
      {
        heading: "Workshops & Drills",
        items: [
          "Tabletop exercises — ransomware, DDoS, insider",
          "Secure coding & SDLC workshops",
          "Sector-specific programs — BFSI, healthcare, SaaS",
        ],
      },
    ],
  },
];

const moreServices = [
  { icon: MonitorCheck, name: "SOC as a Service", desc: "24/7 managed detection, monitoring & response" },
  { icon: UserCog, name: "vCISO Services", desc: "On-demand security leadership & strategy" },
  { icon: Search, name: "Security Audits", desc: "Independent audits of controls & posture" },
  { icon: Siren, name: "Incident Response", desc: "Rapid containment, recovery & reporting" },
  { icon: ShieldAlert, name: "Security Assessments", desc: "Risk-driven evaluation of your environment" },
  { icon: FileSearch, name: "Digital Forensics", desc: "Investigation, RCA & legal-grade evidence" },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32" aria-label="Services">
      <div className="orb right-[-160px] top-[10%] h-[400px] w-[400px] bg-cyber/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Flagship pillars with images */}
        <div className="mt-16 space-y-16">
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className={`grid items-center gap-12 lg:gap-16 ${i % 2 === 1 ? "lg:grid-cols-[1fr_480px]" : "lg:grid-cols-[480px_1fr]"}`}>
                {/* Image side */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Reveal variant="left">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-80 w-full rounded-2xl object-cover lg:h-[420px]"
                    />
                  </Reveal>
                </div>

                {/* Content side */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${p.iconBox}`}>
                      <p.icon size={26} aria-hidden />
                    </div>
                  </Reveal>

                  <Reveal delay={80}>
                    <span
                      className={`mt-4 inline-block rounded-full border px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] ${p.accent}`}
                    >
                      {p.badge}
                    </span>
                  </Reveal>

                  <Reveal delay={160}>
                    <h3 className="mt-4 font-display text-[28px] font-bold leading-snug text-snow lg:text-[32px]">
                      {p.name}
                    </h3>
                  </Reveal>

                  <Reveal delay={240}>
                    <p className="mt-4 text-[15px] leading-relaxed text-mist">{p.desc}</p>
                  </Reveal>

                  <Reveal delay={320}>
                    <div className="mt-8 grid gap-6 sm:grid-cols-3">
                      {p.groups.map((g) => (
                        <div key={g.heading}>
                          <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-fog">
                            {g.heading}
                          </h4>
                          <ul className="mt-4 space-y-3">
                            {g.items.map((item) => (
                              <li key={item} className="flex gap-2.5 text-[13px] leading-snug text-mist">
                                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric/60" aria-hidden />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreServices.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <article className="card group flex items-start gap-4 p-6">
                <div className="icon-tile h-11 w-11 flex-shrink-0 transition-colors group-hover:bg-electric/15">
                  <s.icon size={20} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-bold text-snow">{s.name}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-mist">{s.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
