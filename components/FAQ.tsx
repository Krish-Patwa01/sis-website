"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, Phone } from "lucide-react";
import Reveal from "./Reveal";

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
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden bg-white pt-12 pb-24 lg:pt-16 lg:pb-32"
      aria-label="Frequently asked questions"
    >
      {/* Decorative dotted accent */}
      <div
        className="absolute right-8 top-16 hidden h-28 w-40 opacity-50 lg:block"
        style={{
          backgroundImage: "radial-gradient(rgba(230,36,78,0.6) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column — heading + support card */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
                <span className="h-[2px] w-5 bg-electric" aria-hidden />
                FAQ
              </span>
              <h2 className="mt-5 font-display text-[38px] font-bold leading-tight text-snow sm:text-[46px]">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-mist">
                Everything you need to know before partnering with SIS. Have a different question? Our security experts
                are one message away.
              </p>
            </Reveal>

            {/* Support CTA card */}
            <Reveal delay={120}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-electric/20 bg-gradient-to-br from-electric/[0.07] to-transparent p-7">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-electric/15">
                  <MessageCircleQuestion size={24} className="text-electric" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-[18px] font-bold text-snow">Still have questions?</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mist">
                  Can&apos;t find the answer you&apos;re looking for? Talk to our team for a free, no-obligation consultation.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-electric px-5 py-3 font-display text-[14px] font-bold text-white transition-all hover:bg-[#c8163d] active:scale-95"
                  >
                    Get In Touch →
                  </a>
                  <a
                    href="tel:+919328667642"
                    className="inline-flex items-center justify-center gap-2 border border-line px-5 py-3 font-display text-[14px] font-bold text-snow transition-all hover:border-electric hover:text-electric"
                  >
                    <Phone size={16} aria-hidden /> Call Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column — accordion */}
          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-electric/30 shadow-[0_20px_40px_-20px_rgba(230,36,78,0.25)]"
                        : "border-line/60 hover:border-electric/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="flex items-start gap-3">
                        <span className="font-display text-[15px] font-bold text-electric">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[15.5px] font-bold text-snow">{f.q}</span>
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "bg-electric text-white" : "bg-electric/10 text-electric"
                        }`}
                      >
                        <ChevronDown
                          size={18}
                          aria-hidden
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pl-[3.4rem] text-[14px] leading-relaxed text-mist">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
