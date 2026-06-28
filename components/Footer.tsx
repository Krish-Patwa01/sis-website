import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

function MediumIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42S20.96 8.46 20.96 12zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const columns = [
  {
    heading: "Offensive Security",
    links: [
      { label: "Offensive Security & Red Teaming", href: "/services/offensive-security" },
      { label: "Red Teaming", href: "/services/red-teaming" },
      { label: "Penetration Testing", href: "/services/penetration-testing" },
      { label: "Cloud Security", href: "/services/cloud-security" },
      { label: "Security Audits", href: "/services/security-audits" },
    ],
  },
  {
    heading: "Managed Defense",
    links: [
      { label: "SOC as a Service", href: "/services/soc-as-a-service" },
      { label: "Incident Response", href: "/services/incident-response" },
      { label: "Digital Forensics & IR", href: "/services/digital-forensics-ir" },
    ],
  },
  {
    heading: "GRC & Compliance",
    links: [
      { label: "GRC & Compliance", href: "/services/grc-compliance" },
      { label: "Compliance Audit", href: "/services/compliance-audit" },
      { label: "vCISO Services", href: "/services/vciso-services" },
      { label: "Training & Awareness", href: "/services/training-awareness" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "IT & Telecommunications", href: "/industries/it-telecommunications" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "BFSI", href: "/industries/bfsi" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Food Industry", href: "/industries/food-industry" },
      { label: "Government & Public Sector", href: "/industries/government-public-sector" },
    ],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/shridharinfosec" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/shridhar-infosec/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61573446867142" },
  { icon: MediumIcon, label: "Medium", href: "https://medium.com/@shridharinfosec" },
];

const bottomLinks = [
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/resources/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

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
              Let&apos;s Work Together →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#101a2e]" aria-label="Footer">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101a2e]/85 to-[#0a1322]/92" aria-hidden />

        <div className="relative">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          {/* Logo */}
          <Image
            src="/logo-light.png"
            alt="Shridhar InfoSec Solutions logo"
            width={200}
            height={56}
            className="h-12 w-auto"
          />

          {/* Service / industry columns */}
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="font-display text-[17px] font-bold text-white">{col.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[13.5px] leading-relaxed text-slate-400 transition-colors hover:text-electric"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-white/10" aria-hidden />

          {/* Contact row */}
          <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-20 sm:gap-y-8">
            <div className="sm:max-w-xs">
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                <MapPin size={18} className="text-electric" aria-hidden />
                Head Office
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-400">
                B-338, Emerald One, Jetalpur Road, Vadodara, Gujarat, India - 390007
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                <Phone size={18} className="text-electric" aria-hidden />
                Call Us
              </div>
              <a
                href="tel:+919328667642"
                className="mt-3 block text-[13.5px] text-slate-400 transition-colors hover:text-electric"
              >
                +91 932-866-7642
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                <Mail size={18} className="text-electric" aria-hidden />
                Email Us
              </div>
              <a
                href="mailto:info@shridharinfosec.com"
                className="mt-3 block text-[13.5px] text-slate-400 transition-colors hover:text-electric"
              >
                info@shridharinfosec.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-6 lg:flex-row lg:px-8">
            <nav aria-label="Footer links" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {bottomLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13px] font-semibold text-slate-400 transition-colors hover:text-electric"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all hover:border-electric hover:bg-electric hover:text-white"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-5 text-center lg:px-8">
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
