import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

function MediumIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42S20.96 8.46 20.96 12zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-electric py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <h2 className="font-display text-[36px] font-bold leading-tight text-white sm:text-[48px]">
                Transform Your Security Posture With Next-Gen Cyber Defense Solutions.
              </h2>
            </div>
            <a
              href="/#contact"
              className="flex-shrink-0 bg-white px-8 py-4 font-display font-bold text-electric transition-all hover:bg-slate-100"
            >
              Let's Work Together →
            </a>
          </div>
        </div>
      </section>

      {/* Footer with background */}
      <footer className="relative overflow-hidden bg-[#1a1a1a]" aria-label="Footer">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/85" aria-hidden />

        <div className="relative">
          {/* Top section with logo, mission, vision */}
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1fr_1fr_1fr]">
              {/* Brand & About */}
              <div>
                <div className="inline-block rounded-lg bg-white px-4 py-2.5">
                  <Image
                    src="/logo-dark.png"
                    alt="Shridhar InfoSec Solutions logo"
                    width={160}
                    height={42}
                    className="h-9 w-auto"
                  />
                </div>
                <p className="mt-8 text-[14px] leading-relaxed text-slate-300">
                  Shridhar InfoSec Solutions delivers next-generation cybersecurity expertise across GRC, offensive security, and managed defense. From risk assessment to 24/7 monitoring, we protect organizations against evolving threats with certified specialists and practical, business-first solutions.
                </p>
                <div className="mt-8 flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/shridharinfosec" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/shridhar-infosec/" },
                    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61573446867142" },
                    { icon: MediumIcon, label: "Medium", href: "https://medium.com/@shridharinfosec" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-electric/30 bg-electric/15 transition-all hover:bg-electric hover:text-white"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Our Mission */}
              <div>
                <h3 className="font-display text-[16px] font-bold text-white">Our Mission</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
                  To empower organizations with world-class cybersecurity solutions that simplify complexity, reduce risk, and enable confident digital transformation through innovation and expert guidance.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h3 className="font-display text-[16px] font-bold text-white">Our Vision</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
                  To be recognized as the trusted cybersecurity partner that enterprises turn to for defending digital assets, securing critical infrastructure, and building resilient security cultures.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" aria-hidden />

          {/* Main footer links */}
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Our Services */}
              <nav aria-label="Services">
                <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                  Our Services
                </h3>
                <ul className="mt-6 space-y-2.5">
                  {[
                    { label: "GRC & Compliance", href: "/services/grc-compliance" },
                    { label: "Offensive Security", href: "/services/offensive-security" },
                    { label: "SOC as a Service", href: "/services/soc-as-a-service" },
                    { label: "vCISO Services", href: "/services/vciso-services" },
                    { label: "Digital Forensics", href: "/services/digital-forensics-ir" },
                    { label: "Training & Awareness", href: "/services/training-awareness" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="flex items-center gap-2 text-[13.5px] text-slate-400 transition-colors hover:text-electric">
                        <span className="text-electric">»</span> {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Our Services (continued) */}
              <nav aria-label="Services continued">
                <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                  Our Services
                </h3>
                <ul className="mt-6 space-y-2.5">
                  {[
                    { label: "Red Teaming", href: "/services/red-teaming" },
                    { label: "Security Audits", href: "/services/security-audits" },
                    { label: "Incident Response", href: "/services/incident-response" },
                    { label: "Compliance Audit", href: "/services/compliance-audit" },
                    { label: "Cloud Security", href: "/services/cloud-security" },
                    { label: "Penetration Testing", href: "/services/penetration-testing" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="flex items-center gap-2 text-[13.5px] text-slate-400 transition-colors hover:text-electric">
                        <span className="text-electric">»</span> {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Industries We Serve */}
              <nav aria-label="Industries">
                <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                  Industries We Serve
                </h3>
                <ul className="mt-6 space-y-2.5">
                  {[
                    { label: "IT & Telecom", href: "/industries/it-telecommunications" },
                    { label: "Healthcare", href: "/industries/healthcare" },
                    { label: "Manufacturing", href: "/industries/manufacturing" },
                    { label: "BFSI", href: "/industries/bfsi" },
                    { label: "E-commerce", href: "/industries/ecommerce" },
                    { label: "Food Industry", href: "/industries/food-industry" },
                    { label: "Government", href: "/industries/government-public-sector" },
                  ].map((ind) => (
                    <li key={ind.label}>
                      <a href={ind.href} className="flex items-center gap-2 text-[13.5px] text-slate-400 transition-colors hover:text-electric">
                        <span className="text-electric">»</span> {ind.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Divider */}
            <div className="my-12 border-t border-white/10" aria-hidden />

            {/* Contact locations */}
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Office */}
              <div>
                <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                  <MapPin size={18} className="text-electric" aria-hidden />
                  Head Office
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-400">
                  B-338, Emerald One, Jetalpur Road, Vadodara, Gujarat, India - 390007
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                  <Phone size={18} className="text-electric" aria-hidden />
                  Call Us
                </div>
                <div className="mt-3 space-y-2">
                  <p className="text-[13.5px] text-slate-400">For Sales +91 932-866-7642</p>
                  <p className="text-[13.5px] text-slate-400">For HR +91 932-866-7642</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                  <Mail size={18} className="text-electric" aria-hidden />
                  Email Us
                </div>
                <div className="mt-3 space-y-2">
                  <a href="mailto:info@shridharinfosec.com" className="block text-[13.5px] text-slate-400 transition-colors hover:text-electric">
                    info@shridharinfosec.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-5 py-6 text-center lg:px-8">
              <p className="text-[12.5px] text-slate-500">
                © 2026 | All Rights Reserved by Shridhar InfoSec Solutions
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
