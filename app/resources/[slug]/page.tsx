import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, ChevronsRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { resources, getResource } from "@/lib/resources";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return { title: "Resource Not Found | Shridhar InfoSec Solutions" };
  return {
    title: `${resource.name} | Shridhar InfoSec Solutions`,
    description: resource.tagline,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const Icon = resource.icon;

  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative flex min-h-screen items-center overflow-hidden bg-[#122441] pt-[90px] lg:pt-[134px]"
          aria-label={resource.name}
        >
          {/* Decorative dots */}
          <div
            className="absolute right-10 top-32 hidden h-28 w-40 opacity-50 lg:block"
            style={{
              backgroundImage: "radial-gradient(rgba(230,36,78,0.7) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden
          />
          <div
            className="absolute bottom-16 left-10 hidden h-28 w-40 opacity-40 lg:block"
            style={{
              backgroundImage: "radial-gradient(rgba(230,36,78,0.7) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden
          />

          <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center lg:px-8">
            {/* Breadcrumb */}
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[13px] text-slate-300">
                <Link href="/" className="transition-colors hover:text-electric">
                  Home
                </Link>
                <ChevronRight size={14} aria-hidden />
                <span className="text-slate-300">Resources</span>
                <ChevronRight size={14} aria-hidden />
                <span className="text-white">{resource.name}</span>
              </nav>
            </Reveal>

            <Reveal delay={100}>
              <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-electric/30 bg-electric/15 text-electric">
                <Icon size={30} aria-hidden />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-electric">
                <Clock size={14} aria-hidden /> Coming Soon
              </span>
            </Reveal>

            <Reveal delay={220}>
              <h1 className="mt-6 font-display text-[38px] font-bold leading-tight tracking-tight text-white sm:text-[52px]">
                {resource.name}
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-5 text-[16px] font-semibold text-slate-100">{resource.tagline}</p>
            </Reveal>

            <Reveal delay={360}>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
                {resource.description}
              </p>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-electric px-7 py-3.5 font-display text-[15px] font-semibold text-white transition-all hover:bg-[#c8163d] active:scale-95"
                >
                  Get In Touch →
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-white/60 px-7 py-3.5 font-display text-[15px] font-semibold text-white transition-all hover:border-electric hover:bg-electric/10"
                >
                  Back to Home <ChevronsRight size={18} aria-hidden />
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
