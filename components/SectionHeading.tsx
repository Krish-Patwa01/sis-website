import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Reveal>
        <span className="section-kicker">{kicker}</span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-display text-[32px] font-bold leading-tight tracking-tight text-snow sm:text-[40px]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="mt-5 text-[16px] leading-relaxed text-mist">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
