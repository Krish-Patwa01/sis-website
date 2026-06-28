import fs from "fs";
import path from "path";

// Auto-pick every image in /public/clients so all client logos show.
const clientsDir = path.join(process.cwd(), "public", "clients");
const logos = fs
  .readdirSync(clientsDir)
  .filter((f) => /\.(png|jpe?g|svg|webp|avif)$/i.test(f))
  .sort()
  .map((f) => `/clients/${encodeURIComponent(f)}`);

// Logos that are white/light (built for dark backgrounds) — invert so they show on white.
const whiteLogos = ["abans"];

export default function ClientsMarquee() {
  const items = [...logos, ...logos];
  return (
    <section className="bg-white py-14" aria-label="Our clientele">
      <p className="mb-9 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-mist">
        Trusted by organizations from startups to enterprise
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee-slow flex w-max items-center gap-12 px-8 lg:gap-16">
          {items.map((src, i) => {
            const isWhite = whiteLogos.some((w) => src.toLowerCase().includes(w));
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${src}-${i}`}
                src={src}
                alt=""
                aria-hidden={i >= logos.length}
                className={`h-12 w-auto max-w-[140px] object-contain opacity-70 transition-all duration-300 hover:opacity-100 ${
                  isWhite ? "invert hover:invert-0 hover:brightness-0" : "grayscale hover:grayscale-0"
                }`}
                loading="lazy"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
