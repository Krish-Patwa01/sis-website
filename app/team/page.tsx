import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Team | Shridhar InfoSec Solutions",
  description:
    "Meet the founder of Shridhar InfoSec Solutions — leading our mission to help organizations build trust, mitigate risk and strengthen their security posture.",
};

const founder = {
  name: "Vedant Patwa",
  subtitle: "Founder & CEO",
  image: "/hero-ceo.jpg",
  linkedin: "https://www.linkedin.com/in/vedantpatwa/",
  bio: [
    "With years of hands-on experience across cybersecurity, governance and risk, our founder established Shridhar InfoSec Solutions on a simple conviction — that strong security should be practical, accessible and built on trust. Under this leadership, SIS has grown into a next-generation cybersecurity and GRC partner for organizations across industries.",
    "Combining deep technical expertise with a business-first mindset, the founder drives SIS's mission to help enterprises build trust, mitigate risk and strengthen their security posture — guided by the company's core values of integrity, innovation, excellence and a relentless commitment to client success.",
  ],
};

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
                Meet Our <span className="text-gradient">Team</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-200">
                The vision and leadership behind Shridhar InfoSec Solutions.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Founder feature */}
        <section className="relative overflow-hidden bg-white py-20 lg:py-28" aria-label="Founder">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-16">
              {/* Photo */}
              <Reveal variant="left">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-[460px] w-full rounded-2xl object-cover shadow-[0_28px_60px_-25px_rgba(18,36,65,0.4)] lg:h-[520px]"
                    style={{ objectPosition: "center 25%" }}
                  />
                  <div className="mt-3 h-2.5 w-3/4 rounded-full bg-electric" aria-hidden />
                </div>
              </Reveal>

              {/* Details */}
              <div>
                <Reveal>
                  <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
                    <span className="h-[2px] w-5 bg-electric" aria-hidden />
                    Founder
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-4 font-display text-[34px] font-bold leading-tight text-snow sm:text-[40px]">
                    {founder.name}
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-1 text-[15px] font-semibold text-electric">{founder.subtitle}</p>
                </Reveal>

                {founder.bio.map((para, i) => (
                  <Reveal key={i} delay={200 + i * 80}>
                    <p className="mt-5 text-[15px] leading-[1.8] text-mist">{para}</p>
                  </Reveal>
                ))}

                {/* CTAs */}
                <Reveal delay={460}>
                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 bg-electric px-7 py-3.5 font-display text-[15px] font-semibold text-white transition-all hover:bg-[#c8163d] active:scale-95"
                    >
                      Get In Touch →
                    </Link>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-line px-7 py-3.5 font-display text-[15px] font-semibold text-snow transition-all hover:border-electric hover:text-electric"
                    >
                      <Linkedin size={17} aria-hidden /> Connect on LinkedIn
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
