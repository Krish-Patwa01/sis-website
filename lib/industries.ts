import {
  Landmark,
  HeartPulse,
  Network,
  ShoppingCart,
  Factory,
  Building2,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type IndustryGroup = { heading: string; items: string[] };
export type IndustryBenefit = { title: string; text: string };

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortName: string;
  number: string;
  tagline: string;
  image: string;
  overview: string[];
  focus: IndustryGroup[];
  benefits: IndustryBenefit[];
  form: { heading: string; subtext: string };
};

export const industries: Industry[] = [
  {
    slug: "bfsi",
    icon: Landmark,
    name: "BFSI",
    shortName: "BFSI",
    number: "01",
    tagline:
      "Protecting banks, financial services and insurers — safeguarding sensitive financial data, customer information and critical infrastructure from cyber threats.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Banking, financial services and insurance sit at the very top of every attacker's target list. A single breach can mean direct financial loss, regulatory penalties and lasting damage to customer trust. Our experts help BFSI organizations protect sensitive financial data, customer information and the critical infrastructure that powers digital banking.",
      "We deliver RBI, SEBI and IRDAI-aligned audits, SOC 2 readiness and fully managed security programs tailored to the strict compliance and uptime demands of the financial sector.",
    ],
    focus: [
      {
        heading: "Regulatory Compliance",
        items: [
          "RBI, SEBI, IRDAI & ISNP cybersecurity audits",
          "SOC 2 Type 2 readiness & control design",
          "DPDPA & data-protection compliance",
        ],
      },
      {
        heading: "Threat Defense",
        items: [
          "VAPT for core banking, web & mobile apps",
          "Fraud-path & API security testing",
          "24/7 SOC monitoring & incident response",
        ],
      },
      {
        heading: "Resilience",
        items: [
          "Business continuity & ISO 22301 alignment",
          "Red teaming against financial-sector TTPs",
          "Third-party & fintech vendor risk management",
        ],
      },
    ],
    benefits: [
      { title: "Regulator-Aligned", text: "Programs mapped to RBI, SEBI, IRDAI and ISNP so audits go smoothly." },
      { title: "Customer Trust", text: "Protect the sensitive financial data your reputation depends on." },
      { title: "Fraud-Resistant", text: "Testing focused on the attack paths that lead to financial loss." },
      { title: "Always-On", text: "24/7 monitoring keeps critical banking systems protected around the clock." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Securing a bank, NBFC, fintech or insurer? Tell us your compliance and security goals and we'll map a program for you.",
    },
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    shortName: "Healthcare",
    number: "02",
    tagline:
      "Safeguarding patient data, medical devices and hospital systems with compliant, resilient cybersecurity.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Healthcare organizations hold some of the most sensitive personal data that exists — and run systems where downtime can directly affect patient care. Our cybersecurity experts focus on safeguarding patient records, connected medical devices and hospital infrastructure against ransomware and data theft.",
      "We ensure HIPAA-grade protection for health information, implement compliant data-protection measures, and provide incident response capabilities that keep healthcare providers secure and operational against evolving threats.",
    ],
    focus: [
      {
        heading: "Data Protection",
        items: [
          "HIPAA & DPDPA-aligned data protection",
          "Patient record & EHR security",
          "Privacy-by-design (ISO 27701)",
        ],
      },
      {
        heading: "Connected Systems",
        items: [
          "Medical device & IoT security assessment",
          "Hospital network & application VAPT",
          "Cloud & SaaS security for health platforms",
        ],
      },
      {
        heading: "Continuity",
        items: [
          "Ransomware readiness & incident response",
          "Business continuity for critical care systems",
          "Staff security awareness training",
        ],
      },
    ],
    benefits: [
      { title: "HIPAA-Grade", text: "Protection mapped to healthcare privacy and data-protection standards." },
      { title: "Patient Safety", text: "Keep critical care systems available and free from disruption." },
      { title: "Device-Aware", text: "Security that extends to connected medical devices and IoT." },
      { title: "Breach-Ready", text: "Rapid incident response to contain threats before they spread." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Protecting a hospital, clinic or health-tech platform? Tell us about your environment and we'll tailor a plan.",
    },
  },
  {
    slug: "it-telecommunications",
    icon: Network,
    name: "IT & Telecommunications",
    shortName: "IT & Telecommunications",
    number: "03",
    tagline:
      "Securing the networks, platforms and cloud environments that power digital business and connectivity.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "IT and telecom providers are the backbone of the digital economy — and an attractive target because compromising them can ripple out to thousands of downstream customers. We secure the infrastructure that powers digital business: networks, platforms, cloud environments and SaaS applications.",
      "From network security assessments to cloud penetration testing, we help technology and communications companies protect their digital backbone while maintaining the performance and uptime their customers expect.",
    ],
    focus: [
      {
        heading: "Infrastructure Security",
        items: [
          "Network & telecom infrastructure VAPT",
          "Firewall, VPN & perimeter hardening",
          "Cloud & container security (AWS, Azure, GCP, K8s)",
        ],
      },
      {
        heading: "Application & Platform",
        items: [
          "Web, mobile & API security testing",
          "SaaS platform security assessments",
          "Source code review & secure SDLC",
        ],
      },
      {
        heading: "Operations",
        items: [
          "24/7 SOC monitoring & threat hunting",
          "ISO 27001 implementation & audits",
          "Incident response & forensics",
        ],
      },
    ],
    benefits: [
      { title: "Scale-Ready", text: "Security that keeps pace with high-availability, high-traffic environments." },
      { title: "Cloud-Native", text: "Deep expertise across AWS, Azure, GCP and Kubernetes." },
      { title: "Customer Trust", text: "Protect downstream customers from supply-chain-style compromise." },
      { title: "Uptime-Focused", text: "Hardening and monitoring designed to protect performance." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Running IT or telecom infrastructure? Tell us your stack and we'll scope the right security assessment.",
    },
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    name: "E-commerce",
    shortName: "E-commerce",
    number: "04",
    tagline:
      "Securing online retail platforms, payment flows and customer data at scale.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "E-commerce platforms process payments and personal data at massive scale, making them a constant target for fraud, account takeover and data theft. Our experts focus on safeguarding online retail systems, payment flows and the customer data that powers your business.",
      "We provide payment security, application testing, PCI-DSS alignment and privacy protection for online retail platforms — so you can grow conversions without growing your risk.",
    ],
    focus: [
      {
        heading: "Payment & Transactions",
        items: [
          "PCI-DSS readiness & alignment",
          "Payment flow & checkout security testing",
          "Fraud & account-takeover defense",
        ],
      },
      {
        heading: "Application Security",
        items: [
          "Web & mobile app VAPT (OWASP Top 10)",
          "API & third-party integration testing",
          "Bot, scraping & abuse mitigation review",
        ],
      },
      {
        heading: "Data & Trust",
        items: [
          "Customer data privacy (DPDPA, GDPR)",
          "Cloud & SaaS security for retail platforms",
          "24/7 monitoring during peak sale events",
        ],
      },
    ],
    benefits: [
      { title: "Payment-Safe", text: "Secure checkout and PCI-DSS alignment that protect every transaction." },
      { title: "Fraud-Resistant", text: "Defense against account takeover, fraud and automated abuse." },
      { title: "Scales for Peaks", text: "Monitoring ready for high-traffic sale and festival events." },
      { title: "Conversion-Friendly", text: "Security that protects customers without hurting experience." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Running an online store or marketplace? Tell us about your platform and we'll tailor a security plan.",
    },
  },
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    shortName: "Manufacturing",
    number: "05",
    tagline:
      "Protecting OT/IT convergence, supply chains and intellectual property on the factory floor.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Modern manufacturing connects operational technology (OT) with IT networks, creating powerful efficiencies — and new attack surfaces where a breach can halt production or steal valuable IP. Our experts protect industrial control systems, production processes and sensitive data from cyber threats and unauthorized access.",
      "We deliver OT security assessments, supply-chain risk management and industrial control system protection that keep your operations running safely and continuously.",
    ],
    focus: [
      {
        heading: "OT & ICS Security",
        items: [
          "OT/ICS & SCADA security assessment",
          "OT/IT network segmentation review",
          "Industrial protocol & device hardening",
        ],
      },
      {
        heading: "Supply Chain & IP",
        items: [
          "Supply-chain & vendor risk management",
          "Intellectual property protection",
          "Third-party access & integration security",
        ],
      },
      {
        heading: "Resilience",
        items: [
          "Ransomware readiness for production systems",
          "Business continuity & recovery planning",
          "Incident response for operational disruption",
        ],
      },
    ],
    benefits: [
      { title: "OT-Aware", text: "Expertise across industrial control systems, not just IT networks." },
      { title: "Uptime-First", text: "Protect production lines from disruption and ransomware." },
      { title: "IP Protection", text: "Safeguard the designs and processes that give you an edge." },
      { title: "Supply-Chain Safe", text: "Manage the vendor and integration risks unique to manufacturing." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Securing a plant or industrial operation? Tell us about your OT/IT setup and we'll scope an assessment.",
    },
  },
  {
    slug: "government-public-sector",
    icon: Building2,
    name: "Government & Public Sector",
    shortName: "Government & Public Sector",
    number: "06",
    tagline:
      "Compliance-first security for government agencies, public infrastructure and citizen data.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "Government agencies safeguard citizen data and run critical public infrastructure, making them high-value targets for both criminal and state-aligned attackers. Our experts protect public-sector systems and citizen information with the highest standards of security and accountability.",
      "We provide compliance-first security for government agencies, public infrastructure and citizen databases — ensuring adherence to national security standards while maintaining robust protection against threats.",
    ],
    focus: [
      {
        heading: "Citizen Data Protection",
        items: [
          "Citizen database & records security",
          "DPDPA & data-protection compliance",
          "Privacy-by-design (ISO 27701)",
        ],
      },
      {
        heading: "Critical Infrastructure",
        items: [
          "Public infrastructure & network VAPT",
          "Cloud & application security assessments",
          "Alignment with national security standards",
        ],
      },
      {
        heading: "Governance",
        items: [
          "ISO 27001 implementation & audits",
          "24/7 SOC monitoring & incident response",
          "Security awareness for public staff",
        ],
      },
    ],
    benefits: [
      { title: "Standards-Aligned", text: "Security mapped to national and ISO security standards." },
      { title: "Citizen Trust", text: "Protect the personal data citizens entrust to public services." },
      { title: "Infrastructure-Safe", text: "Defend the critical systems that keep public services running." },
      { title: "Accountable", text: "Transparent, audit-ready security with clear reporting." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Securing a government body or public service? Tell us your mandate and we'll tailor a compliant program.",
    },
  },
  {
    slug: "food-industry",
    icon: UtensilsCrossed,
    name: "Food Industry",
    shortName: "Food Industry",
    number: "07",
    tagline:
      "Securing food production systems, logistics platforms and enterprise applications end to end.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1200&q=80",
    overview: [
      "The food industry increasingly runs on connected production systems, logistics platforms and enterprise software — and a cyberattack can disrupt supply, spoil inventory and damage brand trust. Our experts secure production systems, logistics platforms and enterprise applications end to end.",
      "We protect food production and supply-chain visibility platforms and help ensure compliance with food safety and data-protection regulations, keeping your operations secure and continuous.",
    ],
    focus: [
      {
        heading: "Production & OT",
        items: [
          "Production system & OT security assessment",
          "Network segmentation & device hardening",
          "Ransomware readiness for operations",
        ],
      },
      {
        heading: "Supply Chain & Logistics",
        items: [
          "Logistics & supply-chain platform security",
          "Vendor & third-party risk management",
          "Enterprise application VAPT",
        ],
      },
      {
        heading: "Compliance & Data",
        items: [
          "Data-protection & privacy compliance",
          "Cloud & SaaS security for food-tech",
          "24/7 monitoring & incident response",
        ],
      },
    ],
    benefits: [
      { title: "End-to-End", text: "Security across production, logistics and enterprise systems." },
      { title: "Supply Continuity", text: "Keep production and distribution running without disruption." },
      { title: "Brand Protection", text: "Guard the data and systems your brand reputation depends on." },
      { title: "Compliance-Ready", text: "Aligned with food-safety and data-protection requirements." },
    ],
    form: {
      heading: "Let's Connect",
      subtext: "Securing a food production or supply-chain business? Tell us your setup and we'll craft a plan.",
    },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
