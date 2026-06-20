"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What services does Shridhar InfoSec Solutions provide?",
    a: "We deliver a complete cybersecurity portfolio: GRC & compliance (ISO 27001, SOC 2, GDPR/DPDPA, HIPAA, RBI/SEBI/IRDAI), offensive security & red teaming (VAPT, APT simulation, social engineering), SOC as a Service, vCISO, digital forensics & incident response, and security awareness training.",
  },
  {
    q: "How does a typical engagement begin?",
    a: "Every engagement starts with a discovery conversation to understand your business, assets and regulatory obligations. We then run a risk or gap assessment, present a prioritized roadmap, and execute with clear milestones and reporting — from first audit to continuous monitoring.",
  },
  {
    q: "Can you help us achieve ISO 27001 or SOC 2 certification?",
    a: "Yes. We provide end-to-end readiness — gap assessment, control design, policy development, implementation support and internal audit — for ISO 9001, 27001, 22301, 27701, 31000 and 42001, plus SOC 2 Type 2 readiness assessments and internal control design.",
  },
  {
    q: "Do you work with regulated sectors like BFSI?",
    a: "Absolutely. We conduct cybersecurity audits aligned with SEBI, RBI, IRDAI and ISNP requirements, and serve BFSI, healthcare, government and other regulated industries with sector-specific programs.",
  },
  {
    q: "What happens if we suffer a security incident?",
    a: "Our incident response services include on-demand IR retainers for breach containment and recovery, custom response playbooks, forensic investigation with legal-grade chain of custody, root cause analysis and detailed post-incident review.",
  },
  {
    q: "Do you provide security training for employees?",
    a: "Yes — from phishing simulation campaigns and general awareness sessions to board-level briefings, SOC team skill-building, tabletop exercises and secure coding workshops, tailored to your sector.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 py-24 lg:py-32" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          kicker="FAQ"
          title={
            <>
              Frequently Asked <span className="text-gradient">Questions</span>
            </>
          }
          description="Everything you need to know before partnering with SIS. Have a different question? We're one message away."
        />

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`card !rounded-2xl !p-0 ${isOpen ? "!border-cyber/35" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[15.5px] font-bold text-snow">{f.q}</span>
                    <ChevronDown
                      size={19}
                      aria-hidden
                      className={`flex-shrink-0 text-cyber transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[14px] leading-relaxed text-mist">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
