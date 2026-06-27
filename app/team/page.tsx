import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Team | Shridhar InfoSec Solutions",
  description:
    "Meet the certified cybersecurity experts behind Shridhar InfoSec Solutions — leadership and specialists across GRC, offensive security and managed defense.",
};

// NOTE: Placeholder team data — replace names, roles, photos and links with real details.
const team = [
  {
    name: "Founder & CEO",
    role: "Leadership & Strategy",
    image: "/hero-ceo.jpg",
    imagePosition: "center 25%",
    linkedin: "https://www.linkedin.com/company/shridhar-infosec/",
  },
  {
    name: "Chief Technology Officer",
    role: "Technology & Innovation",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    imagePosition: "center top",
    linkedin: "https://www.linkedin.com/company/shridhar-infosec/",
  },
  {
    name: "Head of GRC & Compliance",
    role: "Governance, Risk & Compliance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    imagePosition: "center top",
    linkedin: "https://www.linkedin.com/company/shridhar-infosec/",
  },
  {
    name: "Lead — Offensive Security",
    role: "Red Teaming & VAPT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    imagePosition: "center top",
    linkedin: "https://www.linkedin.com/company/shridhar-infosec/",
  },
  {
    name: "SOC Manager",
    role: "Managed Detection & Response",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    imagePosition: "center top",
    linkedin: "https://www.linkedin.com/company/shridhar-infosec/",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero header */}
        <section className="relative overflow-hidden bg-[#122441] pt-[90px] lg:pt-[134px]" aria-label="Our Team">
          <div
            className="absolute right-10 top-32 hidden h-28 w-40 opacity-50 lg:block"
            style={{
              backgroundImage: "radial-gradient(rgba(230,36,78,0.7) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-5 py-20 text-center lg:px-8 lg:py-24">
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[13px] text-slate-300">
                <Link href="/" className="transition-colors hover:text-electric">
                  Home
                </Link>
                <ChevronRight size={14} aria-hidden />
                <span className="text-white">Team</span>
              </nav>
            </Reveal>
            <Reveal delay={100}>
              <span className="mt-6 flex items-center justify-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-electric">
                <span className="h-[2px] w-5 bg-electric" aria-hidden />
                Our Team
                <span className="h-[2px] w-5 bg-electric" aria-hidden />
              </span>
            </Reveal>
            <Reveal delay={160}>
              <h1 className="mt-4 font-display text-[38px] font-bold leading-tight tracking-tight text-white sm:text-[50px]">
                Meet the <span className="text-gradient">SIS Team</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-200">
                A team of certified cybersecurity professionals combining deep expertise across GRC, offensive security
                and managed defense — committed to your security and success.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Team grid */}
        <section className="relative overflow-hidden bg-white py-20 lg:py-28" aria-label="Team members">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 80}>
                  <article className="group overflow-hidden rounded-2xl border border-line/60 bg-white transition-all duration-300 hover:border-electric/30 hover:shadow-[0_24px_50px_-20px_rgba(18,36,65,0.22)]">
                    <div className="relative h-72 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: m.imagePosition }}
                      />
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-snow opacity-0 shadow-lg transition-all duration-300 hover:bg-electric hover:text-white group-hover:opacity-100"
                      >
                        <Linkedin size={17} aria-hidden />
                      </a>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-[18px] font-bold text-snow">{m.name}</h3>
                      <p className="mt-1.5 text-[13.5px] font-semibold text-electric">{m.role}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Join the team CTA */}
            <Reveal delay={200}>
              <div className="mt-16 rounded-2xl border border-electric/20 bg-electric/5 p-8 text-center lg:mt-20">
                <h2 className="font-display text-[22px] font-bold text-snow">Want to join our team?</h2>
                <p className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed text-mist">
                  We&apos;re always looking for talented security professionals who share our commitment to client success.
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 bg-electric px-7 py-3.5 font-display text-[15px] font-bold text-white transition-all hover:bg-[#c8163d] active:scale-95"
                >
                  Get In Touch →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
