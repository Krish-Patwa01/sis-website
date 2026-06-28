import Reveal from "./Reveal";

const industries = [
  {
    number: "01",
    name: "IT & Telecommunications",
    text: "Our service offerings enhance customer experience throughout secure & highly functional operations. We secure the infrastructure that powers digital business — networks, platforms, cloud environments and SaaS applications. From network security assessments to cloud penetration testing, we protect your digital backbone.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "02",
    name: "Healthcare",
    text: "Our cybersecurity experts focus on safeguarding patient data, medical devices, and hospital systems. We ensure HIPAA-grade protection for sensitive health information, implement compliant data protection measures, and provide incident response capabilities to keep healthcare organizations secure against evolving threats.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "03",
    name: "Manufacturing",
    text: "Our service offerings enhance operational resilience throughout secure & highly functional industrial environments. Protecting OT/IT convergence, supply chains and intellectual property on the factory floor. We deliver OT security assessments, supply chain risk management, and industrial control system protection.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "04",
    name: "BFSI",
    text: "Our experts are involved in protecting sensitive financial data, customer information, and critical infrastructure from cyber threats. We deliver RBI, SEBI & IRDAI-aligned audits, SOC 2 compliance, and fully managed security programs tailored to banking, financial services and insurance sector requirements.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "05",
    name: "E-commerce",
    text: "Our cybersecurity experts focus on safeguarding production processes, industrial control systems, and sensitive data from cyber threats and unauthorized access. We provide payment security, application testing, PCI-DSS compliance, and privacy protection for online retail platforms operating at scale.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "06",
    name: "Food Industry",
    text: "Our service offerings enhance operational security throughout production & supply chain. Securing production systems, logistics platforms and enterprise applications end to end. We protect food production systems, supply chain visibility platforms, and ensure compliance with food safety and data protection regulations.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "07",
    name: "Government & Public Sector",
    text: "Our cybersecurity experts focus on protecting public sector infrastructure and citizen data with the highest standards. Compliance-first security for government agencies, public infrastructure, and citizen databases. We ensure adherence to national security standards while maintaining robust protection against threats.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative scroll-mt-20 overflow-hidden bg-white pt-12 pb-24 lg:pt-16 lg:pb-32"
      aria-label="Industries we serve"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Centered heading */}
        <Reveal>
          <div className="text-center">
            <span className="flex justify-center items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
              <span className="h-[2px] w-5 bg-electric" aria-hidden />
              Industries We Serve
              <span className="h-[2px] w-5 bg-electric" aria-hidden />
            </span>
            <h2 className="mt-4 font-display text-[42px] font-bold leading-tight text-snow sm:text-[52px]">
              Who We Serve
            </h2>
          </div>
        </Reveal>

        {/* Industries grid — 2 columns with images */}
        <div className="mt-16 space-y-12 lg:space-y-16">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 80}>
              <article className={`grid items-center gap-8 lg:gap-12 ${i % 2 === 1 ? "lg:grid-cols-[1fr_500px]" : "lg:grid-cols-[500px_1fr]"}`}>
                {/* Image side */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Reveal variant="left">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="h-64 w-full rounded-xl object-cover lg:h-80"
                    />
                  </Reveal>
                </div>

                {/* Content side */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-display text-[28px] font-bold leading-tight text-snow lg:text-[32px]">
                          {ind.name}
                        </h3>
                        <p className="mt-4 text-[15px] leading-relaxed text-mist">{ind.text}</p>
                      </div>
                      <div className="flex-shrink-0 pt-1">
                        <span className="font-display text-[48px] font-bold text-electric/30 lg:text-[56px]">
                          {ind.number}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
