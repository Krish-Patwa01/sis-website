import { ShieldCheck } from "lucide-react";

const frameworks = [
  "ISO 27001",
  "ISO 9001",
  "ISO 22301",
  "ISO 27701",
  "ISO 31000",
  "ISO 42001",
  "SOC 2 Type 2",
  "GDPR",
  "DPDPA",
  "HIPAA",
  "SEBI",
  "RBI",
  "IRDAI",
  "ISNP",
];

export default function FrameworksMarquee() {
  const items = [...frameworks, ...frameworks];
  return (
    <section className="border-y border-line bg-white py-10" aria-label="Compliance frameworks">
      <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
        Standards &amp; regulations we work with
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {items.map((f, i) => (
            <span
              key={`${f}-${i}`}
              className="flex items-center gap-2 rounded-full border border-line bg-night px-5 py-2.5 text-[13.5px] font-bold text-snow"
            >
              <ShieldCheck size={15} className="text-electric" aria-hidden />
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
