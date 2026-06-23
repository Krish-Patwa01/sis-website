"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronsRight, Phone, Mail, Instagram, Linkedin, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/#services",
    submenu: [
      { label: "GRC & Compliance", href: "/services/grc-compliance" },
      { label: "Offensive Security & Red Teaming", href: "/services/offensive-security" },
      { label: "SOC as a Service", href: "/services/soc-as-a-service" },
      { label: "vCISO Services", href: "/services/vciso-services" },
      { label: "Digital Forensics & IR", href: "/services/digital-forensics-ir" },
      { label: "Training & Awareness", href: "/services/training-awareness" },
      { label: "Red Teaming", href: "/services/red-teaming" },
      { label: "Penetration Testing", href: "/services/penetration-testing" },
      { label: "Cloud Security", href: "/services/cloud-security" },
      { label: "Security Audits", href: "/services/security-audits" },
      { label: "Compliance Audit", href: "/services/compliance-audit" },
      { label: "Incident Response", href: "/services/incident-response" },
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
    submenu: [
      { label: "BFSI", href: "/industries/bfsi" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "IT & Telecommunications", href: "/industries/it-telecommunications" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Government & Public Sector", href: "/industries/government-public-sector" },
      { label: "Food Industry", href: "/industries/food-industry" },
    ],
  },
  {
    label: "Company",
    href: "/#about",
    submenu: [
      { label: "About", href: "/#about" },
      { label: "Why Us", href: "/#why-us" },
      { label: "Process", href: "/#process" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-[#122441] text-white lg:block">
        <div className="mx-auto flex h-11 max-w-7xl items-stretch justify-between px-5 text-[13px] lg:px-8">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Follow On:</span>
            <div className="flex h-full items-center">
              <a
                href="https://www.instagram.com/shridharinfosec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-full items-center border-l border-white/10 px-4 transition-colors hover:bg-white/10"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/shridhar-infosec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-full items-center border-x border-white/10 px-4 transition-colors hover:bg-white/10"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
          <div className="flex items-stretch">
            <a
              href="tel:+919328667642"
              className="flex items-center gap-2 border-l border-white/10 px-5 transition-colors hover:bg-white/10"
            >
              <Phone size={14} className="text-electric" /> For Sales +91 932-866-7642
            </a>
            <a
              href="mailto:info@shridharinfosec.com"
              className="flex items-center gap-2 border-l border-white/10 px-5 transition-colors hover:bg-white/10"
            >
              <Mail size={14} className="text-electric" /> info@shridharinfosec.com
            </a>
            <a
              href="mailto:info@shridharinfosec.com"
              className="flex items-center gap-2 border-x border-white/10 px-5 transition-colors hover:bg-white/10"
            >
              <Mail size={14} className="text-electric" /> careers@shridharinfosec.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-[0_10px_36px_-16px_rgba(18,36,65,0.25)]" : "bg-white"
        } border-b border-line`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-5 lg:px-8"
        >
          <Link href="#" aria-label="Shridhar InfoSec Solutions — home" className="flex items-center gap-3">
            <Image
              src="/logo-dark.png"
              alt="Shridhar InfoSec Solutions logo"
              width={160}
              height={42}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <ul className="hidden items-center gap-0 lg:flex">
            {links.map((l) => (
              <li
                key={l.label}
                className="group relative"
                onMouseEnter={() => l.submenu && setOpenDropdown(l.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={l.href}
                  className="flex items-center gap-1 rounded-md px-3.5 py-2 font-display text-[14.5px] font-medium text-snow transition-colors hover:text-electric"
                >
                  {l.label}
                  {l.submenu && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                </a>

                {/* Dropdown menu */}
                {l.submenu && (
                  <div className="absolute left-0 top-full hidden origin-top-left scale-y-0 opacity-0 transition-all duration-200 group-hover:scale-y-100 group-hover:opacity-100 group-hover:block">
                    <div className="mt-3 min-w-max rounded-2xl border border-line/60 bg-white shadow-[0_28px_80px_-20px_rgba(18,36,65,0.35)]">
                      {l.submenu.map((item, idx) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`block px-6 py-3.5 text-[13.5px] font-semibold text-snow transition-all duration-200 hover:bg-electric hover:text-white ${
                            idx !== 0 ? "border-t border-line/30" : ""
                          } ${idx === 0 ? "rounded-t-2xl" : ""} ${
                            idx === l.submenu!.length - 1 ? "rounded-b-2xl" : ""
                          }`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="/#contact" className="btn-primary !text-[14.5px]">
              Get A Quote <ChevronsRight size={17} aria-hidden />
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-line-bright p-2 text-snow lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-line bg-white lg:hidden">
            <ul className="space-y-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.label}>
                  {l.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === l.label ? null : l.label)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold text-snow hover:bg-electric/5 hover:text-electric"
                      >
                        {l.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openDropdown === l.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === l.label && (
                        <ul className="space-y-1 bg-night/40 px-4 py-2">
                          {l.submenu.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-4 py-2 text-[14px] font-medium text-mist hover:text-electric"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 text-[15px] font-semibold text-snow hover:bg-electric/5 hover:text-electric"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                  Get A Quote <ChevronsRight size={17} aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
