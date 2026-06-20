const logos = Array.from({ length: 12 }, (_, i) => `/clients/client-${String(i + 1).padStart(2, "0")}.png`);

export default function ClientsMarquee() {
  const items = [...logos, ...logos];
  return (
    <section className="bg-white py-14" aria-label="Our clientele">
      <p className="mb-9 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-mist">
        Trusted by organizations from startups to enterprise
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee-slow flex w-max items-center gap-20 px-10">
          {items.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              aria-hidden={i >= logos.length}
              className="h-11 w-auto max-w-[150px] object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
