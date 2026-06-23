import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check, ChevronsRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ServiceContactForm from "@/components/ServiceContactForm";
import { industries, getIndustry } from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry Not Found | Shridhar InfoSec Solutions" };
  return {
    title: `${industry.name} Cybersecurity | Shridhar InfoSec Solutions`,
    description: industry.tagline,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const Icon = industry.icon;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero header ───────────────────────── */}
        <section className="relative overflow-hidden bg-[#122441] pt-[90px] lg:pt-[134px]" aria-label={industry.name}>
          <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={industry.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#122441] via-[#122441]/70 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-xl pb-20 pt-12 lg:max-w-[52%] lg:pb-28 lg:pt-16">
              <Reveal>
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-300">
                  <Link href="/" className="transition-colors hover:text-electric">
                    Home
                  </Link>
                  <ChevronRight size={14} aria-hidden />
                  <Link href="/#industries" className="transition-colors hover:text-electric">
                    Industries
                  </Link>
                  <ChevronRight size={14} aria-hidden />
                  <span className="text-white">{industry.shortName}</span>
                </nav>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-electric/30 bg-electric/15 text-electric">
                  <Icon size={26} aria-hidden />
                </div>
              </Reveal>

              <Reveal delay={160}>
                <span className="mt-6 flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-electric">
                  <span className="h-[2px] w-5 bg-electric" aria-hidden />
                  Industries We Serve
                </span>
              </Reveal>

              <Reveal delay={220}>
                <h1 className="mt-4 font-display text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
                  {industry.name} Security
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-5 text-[16px] leading-relaxed text-slate-200">{industry.tagline}</p>
              </Reveal>

              <Reveal delay={380}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#enquire"
                    className="inline-flex items-center justify-center gap-2 bg-electric px-7 py-3.5 font-display text-[15px] font-semibold text-white transition-all hover:bg-[#c8163d] active:scale-95"
                  >
                    Get a Free Consultation →
                  </a>
                  <Link
                    href="/#industries"
                    className="inline-flex items-center justify-center gap-2 border border-white/60 px-7 py-3.5 font-display text-[15px] font-semibold text-white transition-all hover:border-electric hover:bg-electric/10"
                  >
                    All Industries <ChevronsRight size={18} aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Body: content + sticky form ───────── */}
        <section id="enquire" className="relative scroll-mt-24 overflow-hidden bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_420px] lg:gap-16">
              {/* Left — content */}
              <div>
                {/* Overview */}
                <Reveal>
                  <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
                    <span className="h-[2px] w-5 bg-electric" aria-hidden />
                    Overview
                  </span>
                  <h2 className="mt-4 font-display text-[30px] font-bold leading-tight text-snow sm:text-[36px]">
                    Cybersecurity for <span className="text-gradient">{industry.shortName}</span>
                  </h2>
                </Reveal>
                {industry.overview.map((para, i) => (
                  <Reveal key={i} delay={80 + i * 80}>
                    <p className="mt-5 text-[15px] leading-[1.8] text-mist">{para}</p>
                  </Reveal>
                ))}

                {/* Focus areas */}
                <Reveal>
                  <h2 className="mt-14 font-display text-[26px] font-bold text-snow sm:text-[30px]">
                    How We <span className="text-gradient">Protect You</span>
                  </h2>
                </Reveal>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {industry.focus.map((group, i) => (
                    <Reveal key={group.heading} delay={i * 90}>
                      <div>
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-fog">{group.heading}</h3>
                        <ul className="mt-4 space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex gap-2.5 text-[13.5px] leading-snug text-mist">
                              <span
                                className="mt-[5px] flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric"
                                aria-hidden
                              >
                                <Check size={11} strokeWidth={3} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Benefits */}
                <Reveal>
                  <h2 className="mt-14 font-display text-[26px] font-bold text-snow sm:text-[30px]">
                    Why Choose <span className="text-gradient">SIS</span>
                  </h2>
                </Reveal>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {industry.benefits.map((b, i) => (
                    <Reveal key={b.title} delay={i * 80}>
                      <article className="card h-full p-6">
                        <h3 className="font-display text-[16px] font-bold text-snow">{b.title}</h3>
                        <p className="mt-2.5 text-[13.5px] leading-relaxed text-mist">{b.text}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Right — sticky contact form */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal variant="right">
                  <ServiceContactForm
                    serviceName={industry.shortName}
                    heading={industry.form.heading}
                    subtext={industry.form.subtext}
                  />
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
