import {
  ScrollText,
  Swords,
  MonitorCheck,
  UserCog,
  FileSearch,
  GraduationCap,
  Target,
  Bug,
  Cloud,
  ClipboardCheck,
  FileCheck,
  Siren,
  type LucideIcon,
} from "lucide-react";

export type ServiceCapability = { heading: string; items: string[] };
export type ServiceBenefit = { title: string; text: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  image: string;
  overview: string[];
  capabilities: ServiceCapability[];
  benefits: ServiceBenefit[];
  form: { heading: string; subtext: string };
};

export const services: Service[] = [
  {
    slug: "grc-compliance",
    icon: ScrollText,
    name: "GRC & Compliance Services",
    shortName: "GRC & Compliance",
    badge: "Governance · Risk · Compliance",
    tagline:
      "End-to-end governance, risk and compliance — from global ISO standards to sector regulations and fully managed compliance programs.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Compliance is not the same as security — and at Shridhar InfoSec Solutions we make sure you achieve both. Our GRC practice helps you build a defensible governance framework, quantify and treat risk, and meet the regulatory obligations specific to your industry without slowing the business down.",
      "Whether you are pursuing your first ISO 27001 certificate, preparing for a SOC 2 Type 2 audit, or aligning with RBI, SEBI and IRDAI mandates, our certified consultants guide you from gap assessment to certification and beyond — with continuous, fully managed compliance.",
    ],
    capabilities: [
      {
        heading: "ISO & Global Standards",
        items: [
          "ISO 27001 — information security & risk management",
          "ISO 9001 · 22301 · 27701 · 31000 implementation",
          "ISO 42001 — ethical & transparent AI governance",
        ],
      },
      {
        heading: "Regulatory & Data Protection",
        items: [
          "SOC 2 Type 2 readiness & control design",
          "DPDPA, GDPR & HIPAA privacy compliance",
          "SEBI, RBI, IRDAI & ISNP audits for BFSI",
        ],
      },
      {
        heading: "Governance & Advisory",
        items: [
          "Compliance-as-a-Service — fully managed programs",
          "vCISO / DPO on-demand leadership",
          "Risk & gap assessments, policy development",
        ],
      },
    ],
    benefits: [
      { title: "Audit-Ready, Faster", text: "Structured roadmaps and ready-to-use control libraries cut your time to certification." },
      { title: "Regulator-Aligned", text: "Audits mapped precisely to RBI, SEBI, IRDAI, ISO and SOC 2 requirements." },
      { title: "Business-First", text: "Controls designed to protect you without creating friction for your teams." },
      { title: "Continuous Compliance", text: "Managed programs keep you compliant year-round, not just at audit time." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Planning an ISO 27001, SOC 2 or regulatory audit? Tell us where you are and we'll map the fastest path to compliance.",
    },
  },
  {
    slug: "offensive-security",
    icon: Swords,
    name: "Offensive Security & Red Teaming",
    shortName: "Offensive Security & Red Teaming",
    badge: "VAPT · Red Teaming",
    tagline:
      "Think like an attacker. We probe your networks, applications, cloud and people to expose weaknesses before real adversaries do.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "You cannot defend what you have never tested under real pressure. Our offensive security team simulates the tactics, techniques and procedures of genuine threat actors to reveal exploitable gaps across your infrastructure, applications and human layer.",
      "From OWASP-aligned VAPT to full-scope red team engagements and breach-and-attack simulation, every assessment ends with prioritized, business-contextual findings and clear remediation guidance — not just a scanner dump.",
    ],
    capabilities: [
      {
        heading: "Vulnerability Assessment & Pen Testing",
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
          "Breach & attack simulation with gap dashboards",
        ],
      },
      {
        heading: "Threat Intelligence",
        items: [
          "OSINT & dark-web exposure monitoring",
          "Attack surface mapping & reconnaissance",
          "Purple-team exercises to validate detection",
        ],
      },
    ],
    benefits: [
      { title: "Attacker's Perspective", text: "See exactly how a determined adversary would breach you — and where to stop them." },
      { title: "Prioritized Findings", text: "Risk-ranked results with real business impact, not noisy false positives." },
      { title: "Certified Testers", text: "Engagements led by OSCP, CEH and CREST-aligned professionals." },
      { title: "Actionable Remediation", text: "Clear, step-by-step fixes and free retesting to confirm closure." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Need a penetration test or red team engagement? Share your scope and we'll scope a test that matches your risk.",
    },
  },
  {
    slug: "soc-as-a-service",
    icon: MonitorCheck,
    name: "SOC as a Service",
    shortName: "SOC as a Service",
    badge: "24/7 Managed Detection & Response",
    tagline:
      "Round-the-clock threat detection, monitoring and response — an enterprise-grade Security Operations Center without the overhead of building one.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Attackers don't keep office hours — and neither does our SOC. Shridhar InfoSec Solutions delivers continuous monitoring, detection and response so threats are caught and contained in minutes, not weeks, by analysts who treat your environment as their own.",
      "We combine SIEM, threat intelligence and seasoned human analysts to triage alerts, hunt for hidden threats and respond decisively — giving you the protection of a mature SOC at a predictable monthly cost.",
    ],
    capabilities: [
      {
        heading: "Detection & Monitoring",
        items: [
          "24/7/365 SIEM-based monitoring & alerting",
          "Log management & correlation across your stack",
          "Cloud, endpoint & network telemetry coverage",
        ],
      },
      {
        heading: "Response & Hunting",
        items: [
          "Real-time alert triage & incident escalation",
          "Proactive threat hunting for hidden adversaries",
          "Guided containment & recovery support",
        ],
      },
      {
        heading: "Reporting & Improvement",
        items: [
          "Executive dashboards & monthly threat reports",
          "Continuous detection-rule tuning",
          "Threat intelligence enrichment & context",
        ],
      },
    ],
    benefits: [
      { title: "Always-On Defense", text: "Eyes on your environment every hour of every day, including weekends and holidays." },
      { title: "Faster Containment", text: "Reduced mean time to detect and respond keeps incidents small." },
      { title: "No CapEx", text: "Skip the cost of tooling, hiring and 24/7 staffing — pay a predictable subscription." },
      { title: "Expert Analysts", text: "Skilled SOC analysts and threat hunters watching for what automation misses." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Want 24/7 monitoring for your environment? Tell us about your stack and we'll design a SOC plan that fits.",
    },
  },
  {
    slug: "vciso-services",
    icon: UserCog,
    name: "vCISO Services",
    shortName: "vCISO Services",
    badge: "On-Demand Security Leadership",
    tagline:
      "Executive-level security strategy and governance — a seasoned Chief Information Security Officer, available on demand.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Not every organization needs — or can afford — a full-time CISO, but every organization needs senior security leadership. Our virtual CISO service gives you a trusted security executive who sets strategy, owns governance and represents security to your board and auditors.",
      "From building your security roadmap and policies to leading audits, managing vendor risk and guiding incident response, your vCISO becomes an embedded part of your leadership team — scaling up or down as your needs evolve.",
    ],
    capabilities: [
      {
        heading: "Strategy & Governance",
        items: [
          "Security roadmap & maturity planning",
          "Policy, standard & framework development",
          "Board & executive security reporting",
        ],
      },
      {
        heading: "Risk & Compliance Leadership",
        items: [
          "Enterprise risk assessment & treatment",
          "Audit & certification program ownership",
          "Third-party & vendor risk management",
        ],
      },
      {
        heading: "Program Operations",
        items: [
          "Security budget & tooling guidance",
          "Incident response oversight & tabletop drills",
          "Security awareness program direction",
        ],
      },
    ],
    benefits: [
      { title: "Executive Expertise", text: "Decades of CISO-level experience without the full-time salary." },
      { title: "Flexible Engagement", text: "Scale hours up or down as projects, audits and incidents demand." },
      { title: "Board Confidence", text: "Clear, business-aligned reporting that satisfies leadership and auditors." },
      { title: "Vendor-Neutral", text: "Independent advice focused on your interests, not product sales." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Looking for senior security leadership on demand? Tell us your goals and we'll tailor a vCISO engagement.",
    },
  },
  {
    slug: "digital-forensics-ir",
    icon: FileSearch,
    name: "Digital Forensics & Incident Response",
    shortName: "Digital Forensics & IR",
    badge: "Investigate · Contain · Recover",
    tagline:
      "When an incident strikes, every minute counts. We contain the breach, investigate the root cause and help you recover with legal-grade evidence.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "A security incident is high-pressure and high-stakes. Our incident response team moves fast to contain the threat, limit the damage and get your business back to normal — while preserving the forensic evidence you may need for regulators, insurers or legal action.",
      "Beyond firefighting, our digital forensics specialists reconstruct exactly what happened, how attackers got in and what they touched, delivering a clear root-cause analysis and a hardening plan so the same incident never happens twice.",
    ],
    capabilities: [
      {
        heading: "Incident Response",
        items: [
          "On-demand IR retainers for rapid breach containment",
          "Custom response playbooks & escalation paths",
          "Guided recovery & business continuity support",
        ],
      },
      {
        heading: "Digital Forensics",
        items: [
          "Forensic investigation with legal chain of custody",
          "Malware & ransomware analysis",
          "Email, endpoint & log forensic reconstruction",
        ],
      },
      {
        heading: "Post-Incident",
        items: [
          "Root-cause analysis & impact assessment",
          "Detailed post-incident reports for stakeholders",
          "Hardening recommendations to prevent recurrence",
        ],
      },
    ],
    benefits: [
      { title: "Rapid Containment", text: "Fast action to stop the bleeding and minimize business impact." },
      { title: "Legal-Grade Evidence", text: "Forensics handled with proper chain of custody for regulators and courts." },
      { title: "Clear Root Cause", text: "Understand exactly what happened and how, in plain language." },
      { title: "Stronger Afterwards", text: "Every engagement ends with concrete steps to prevent a repeat." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Dealing with an incident or want an IR retainer in place? Reach out and our responders will get back fast.",
    },
  },
  {
    slug: "training-awareness",
    icon: GraduationCap,
    name: "Training & Awareness",
    shortName: "Training & Awareness",
    badge: "Building Your Human Firewall",
    tagline:
      "Your people are the first line of defense. We build a strong security culture from the boardroom to the SOC floor.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Most breaches start with a human — a clicked link, a reused password, a convincing phone call. Our training programs turn your employees from your biggest risk into your strongest defense, with engaging, practical sessions tailored to each role.",
      "From organization-wide phishing simulations and cyber-hygiene workshops to deep technical upskilling for your IT and SOC teams, we measure awareness, reinforce good habits and prove the impact with clear before-and-after metrics.",
    ],
    capabilities: [
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
          "IT & SOC skill-building — SIEM, threat hunting",
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
    benefits: [
      { title: "Measurable Results", text: "Track phishing click rates and awareness scores improving over time." },
      { title: "Role-Relevant", text: "Content tailored for executives, developers, SOC teams and general staff." },
      { title: "Engaging Format", text: "Interactive, real-world sessions that people actually remember and apply." },
      { title: "Culture Change", text: "Move security from a once-a-year checkbox to an everyday habit." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Want to strengthen your human firewall? Tell us about your team and we'll craft a training program for them.",
    },
  },
  {
    slug: "red-teaming",
    icon: Target,
    name: "Red Teaming",
    shortName: "Red Teaming",
    badge: "Adversary Simulation",
    tagline:
      "Full-scope adversary simulation that mimics real-world attackers to test your defense, detection and response — end to end.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "A vulnerability scan tells you where the doors are; a red team tells you whether someone can actually walk through them undetected. Our red team emulates the tactics, techniques and procedures of genuine threat actors to test your people, processes and technology under realistic attack conditions.",
      "Every engagement is goal-oriented — gaining domain admin, exfiltrating crown-jewel data, or breaching a critical system — and ends with a clear narrative of how we got in, what your defenders saw, and exactly how to close the gaps.",
    ],
    capabilities: [
      {
        heading: "Adversary Simulation",
        items: [
          "APT simulation against real-world TTPs",
          "Social engineering — phishing, vishing & USB drops",
          "Physical intrusion testing (optional, on request)",
        ],
      },
      {
        heading: "Detection & Response Testing",
        items: [
          "Breach & attack simulation with visual dashboards",
          "Lateral movement & privilege escalation testing",
          "Purple-team exercises to validate your SOC",
        ],
      },
      {
        heading: "Reporting",
        items: [
          "Full attack narrative & kill-chain mapping",
          "Gaps in defense, movement & response highlighted",
          "Prioritized remediation with retest support",
        ],
      },
    ],
    benefits: [
      { title: "Real-World Test", text: "See how a determined attacker would actually breach you — not just a checklist." },
      { title: "Validates Detection", text: "Find out exactly what your SOC and tooling catch, and what slips through." },
      { title: "Certified Operators", text: "Engagements run by OSCP, CEH and CRTE-aligned red teamers." },
      { title: "Actionable Outcomes", text: "Clear fixes tied to each finding, with free retesting to confirm closure." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Want to test your defenses against a real adversary? Share your objectives and we'll scope a red team engagement.",
    },
  },
  {
    slug: "penetration-testing",
    icon: Bug,
    name: "Penetration Testing (VAPT)",
    shortName: "Penetration Testing",
    badge: "Vulnerability Assessment & Pen Testing",
    tagline:
      "OWASP-aligned vulnerability assessment and penetration testing across networks, applications, cloud and code — with clear, prioritized findings.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "You can't fix what you can't see. Our VAPT engagements combine automated scanning with deep manual testing to uncover exploitable weaknesses across your environment before attackers find them — and we prove impact with safe, real-world proof-of-concepts.",
      "From external network and web application testing to cloud, container and source-code review, every assessment delivers risk-ranked findings, clear reproduction steps and remediation guidance your team can act on immediately.",
    ],
    capabilities: [
      {
        heading: "Network & Infrastructure",
        items: [
          "Internal & external network VAPT",
          "Firewall, VPN & perimeter testing",
          "Configuration & hardening review",
        ],
      },
      {
        heading: "Application & Code",
        items: [
          "Web & mobile app testing (OWASP Top 10)",
          "API security testing",
          "Source code review — static & manual analysis",
        ],
      },
      {
        heading: "Cloud & Containers",
        items: [
          "AWS, Azure & GCP misconfiguration assessment",
          "Kubernetes & container security testing",
          "Detailed reports with PoCs & remediation",
        ],
      },
    ],
    benefits: [
      { title: "Manual + Automated", text: "Deep human testing beyond scanners catches the flaws tools miss." },
      { title: "Risk-Ranked Findings", text: "Prioritized by real business impact, with clear reproduction steps." },
      { title: "Compliance-Ready", text: "Reports that support ISO 27001, SOC 2, PCI-DSS and regulatory needs." },
      { title: "Free Retesting", text: "We re-verify your fixes to confirm vulnerabilities are truly closed." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Need a penetration test? Tell us your scope — apps, network or cloud — and we'll plan the right assessment.",
    },
  },
  {
    slug: "cloud-security",
    icon: Cloud,
    name: "Cloud Security",
    shortName: "Cloud Security",
    badge: "Cloud & Container Security",
    tagline:
      "Secure your AWS, Azure, GCP and Kubernetes environments — from misconfiguration assessments to cloud compliance alignment.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "The cloud moves fast, and a single misconfigured bucket or over-permissive role can expose your entire business. We assess your cloud and container environments against provider best practices and security benchmarks to find and fix exposure before it becomes a breach.",
      "Beyond testing, we help you align with cloud compliance norms — ISO 27017/27018 and data-protection requirements — so your cloud footprint stays both secure and audit-ready as it scales.",
    ],
    capabilities: [
      {
        heading: "Cloud Configuration Review",
        items: [
          "AWS, Azure & GCP misconfiguration assessment",
          "Identity & access (IAM) and privilege review",
          "Network, storage & secrets exposure checks",
        ],
      },
      {
        heading: "Container & Workload",
        items: [
          "Kubernetes & container security testing",
          "Image & registry vulnerability scanning",
          "Workload hardening recommendations",
        ],
      },
      {
        heading: "Cloud Compliance",
        items: [
          "Alignment with ISO 27017 / 27018",
          "Cloud/SaaS data-protection compliance",
          "Continuous posture & drift monitoring guidance",
        ],
      },
    ],
    benefits: [
      { title: "Provider-Aligned", text: "Assessments mapped to AWS, Azure and GCP security best practices." },
      { title: "Catch Misconfigs Early", text: "Find risky settings and exposures before attackers exploit them." },
      { title: "Compliance Built-In", text: "Stay aligned with ISO 27017/27018 and data-protection norms." },
      { title: "Scales With You", text: "Security guidance that keeps pace as your cloud footprint grows." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Want your cloud environment assessed? Tell us which platforms you use and we'll scope a cloud security review.",
    },
  },
  {
    slug: "security-audits",
    icon: ClipboardCheck,
    name: "Security Audits & Assessments",
    shortName: "Security Audits",
    badge: "Audits & Assessments",
    tagline:
      "Independent, risk-driven audits of your controls, posture and gaps — giving you a clear, honest picture of where you stand.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "You can't improve security you haven't measured. Our security audits give you an objective, evidence-based assessment of your current controls, identify where the real risks lie, and map a prioritized path to a stronger posture.",
      "Whether you need a one-time assessment before an investment or audit, or a recurring health check of your environment, we benchmark you against recognized frameworks and deliver findings that both your technical teams and your board can act on.",
    ],
    capabilities: [
      {
        heading: "Posture & Controls",
        items: [
          "Security control effectiveness review",
          "Configuration & hardening assessment",
          "Benchmarking against ISO 27001 & CIS controls",
        ],
      },
      {
        heading: "Risk & Gap Analysis",
        items: [
          "Risk & gap assessments across people, process, tech",
          "Threat & exposure evaluation",
          "Prioritized remediation roadmap",
        ],
      },
      {
        heading: "Reporting",
        items: [
          "Executive summary for leadership",
          "Detailed technical findings & evidence",
          "Clear, actionable recommendations",
        ],
      },
    ],
    benefits: [
      { title: "Independent View", text: "An objective, vendor-neutral look at where you actually stand." },
      { title: "Risk-Prioritized", text: "Focus your effort and budget on what matters most first." },
      { title: "Framework-Mapped", text: "Benchmarked against ISO 27001, CIS and industry standards." },
      { title: "Board-Ready", text: "Reporting that speaks to both engineers and executives." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Want an independent view of your security posture? Tell us your environment and we'll scope an audit.",
    },
  },
  {
    slug: "compliance-audit",
    icon: FileCheck,
    name: "Compliance Audit",
    shortName: "Compliance Audit",
    badge: "Regulatory Compliance",
    tagline:
      "Audit-readiness and certification support across ISO, SOC 2 and sector regulations like RBI, SEBI, IRDAI and ISNP.",
    image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Regulators and customers increasingly demand proof, not promises. Our compliance audits assess how well your controls meet the standards and regulations that apply to you, surface the gaps, and guide you all the way to certification or sign-off.",
      "From ISO 27001 and SOC 2 Type 2 readiness to BFSI-specific RBI, SEBI, IRDAI and ISNP cybersecurity audits, our certified assessors help you stay compliant year-round — not just at audit time.",
    ],
    capabilities: [
      {
        heading: "Standards & Certification",
        items: [
          "ISO 27001, 27701, 22301 readiness & internal audit",
          "SOC 2 Type 2 readiness & control design",
          "Gap assessment against target frameworks",
        ],
      },
      {
        heading: "Regulatory Audits",
        items: [
          "RBI, SEBI, IRDAI & ISNP cybersecurity audits",
          "DPDPA, GDPR & HIPAA privacy compliance",
          "Cloud/SaaS compliance — ISO 27017/27018",
        ],
      },
      {
        heading: "Ongoing Compliance",
        items: [
          "Compliance-as-a-Service with continuous monitoring",
          "Policy development & control implementation",
          "Audit evidence collection & reporting",
        ],
      },
    ],
    benefits: [
      { title: "Regulator-Aligned", text: "Audits mapped precisely to RBI, SEBI, IRDAI, ISO and SOC 2 requirements." },
      { title: "Faster Sign-Off", text: "Structured readiness work cuts your time to certification or approval." },
      { title: "Year-Round Ready", text: "Stay continuously compliant instead of scrambling before each audit." },
      { title: "Certified Assessors", text: "Experienced auditors who know what regulators and certifiers expect." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Preparing for a certification or regulatory audit? Tell us your target and we'll map the path to compliance.",
    },
  },
  {
    slug: "incident-response",
    icon: Siren,
    name: "Incident Response",
    shortName: "Incident Response",
    badge: "Containment & Recovery",
    tagline:
      "When an incident hits, every minute counts. We contain the threat, investigate the cause and get your business back to normal — fast.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "A breach is chaotic and high-stakes. Our incident response team moves quickly to contain the threat, limit the damage and restore operations — while preserving the forensic evidence you may need for regulators, insurers or legal action.",
      "With IR retainers, custom playbooks and 24/7 readiness, you have experienced responders on call before an incident ever happens — and a clear post-incident review afterward so the same attack never succeeds twice.",
    ],
    capabilities: [
      {
        heading: "Preparation",
        items: [
          "On-demand IR retainers for rapid response",
          "Custom incident response playbooks",
          "Tabletop exercises & readiness drills",
        ],
      },
      {
        heading: "Response & Containment",
        items: [
          "Rapid breach containment & threat eradication",
          "Forensic investigation with chain of custody",
          "Malware & ransomware analysis",
        ],
      },
      {
        heading: "Recovery & Review",
        items: [
          "Guided recovery & business continuity support",
          "Root-cause analysis & impact assessment",
          "Post-incident report & hardening plan",
        ],
      },
    ],
    benefits: [
      { title: "Rapid Containment", text: "Fast action to stop the bleeding and minimize business impact." },
      { title: "On-Call Readiness", text: "IR retainers mean experienced responders are ready before you need them." },
      { title: "Legal-Grade Evidence", text: "Forensics handled with proper chain of custody for regulators and courts." },
      { title: "Stronger Afterwards", text: "Every incident ends with concrete steps to prevent a repeat." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Dealing with an incident, or want an IR retainer in place? Reach out and our responders will get back fast.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
