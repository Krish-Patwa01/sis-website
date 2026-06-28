import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Team | Shridhar InfoSec Solutions",
  description:
    "Meet the leadership, advisors and specialists behind Shridhar InfoSec Solutions — the people defending your data and securing your success.",
};

type Member = { name: string; role: string; image: string; bio: string[]; linkedin?: string };
type Section = { title: string; members: Member[] };

const sections: Section[] = [
  {
    title: "Leadership",
    members: [
      {
        name: "Bhavna Patwa",
        role: "Founder & Director",
        image: "/team/bhavna-patwa.jpg",
        bio: [
          "As the Founder & Director of Shridhar InfoSec Solutions, Bhavna laid the foundation of the company with a clear vision — to make world-class cybersecurity accessible, practical and trustworthy for organizations of every size.",
          "Her leadership defines the values and direction that shape SIS today. With a strong focus on integrity and lasting client relationships, she steers the company's growth while nurturing a culture where deep security expertise and genuine care go hand in hand.",
        ],
      },
      {
        name: "Vedant Patwa",
        role: "Co-founder & CEO",
        image: "/team/vedant-patwa.png",
        bio: [
          "Vedant co-founded SIS on a simple conviction — that strong security should be practical, accessible and built on trust. He brings years of hands-on experience across cybersecurity, governance and risk, turning complex challenges into clear, business-first outcomes.",
          "As CEO, he leads the company's mission to help enterprises build trust, mitigate risk and strengthen their security posture. He drives innovation across SIS's GRC, offensive security and managed defense practices — always guided by the values of integrity, excellence and a relentless commitment to client success.",
        ],
        linkedin: "https://www.linkedin.com/in/vedantpatwa/",
      },
      {
        name: "Fena Patwa",
        role: "Co-founder & Client Relationship Head",
        image: "/team/fena-patwa.jpg",
        bio: [
          "As Co-founder and Client Relationship Head, Fena is the bridge between SIS and the organizations it protects. She ensures every engagement begins with understanding and is built on clear communication, transparency and trust.",
          "Her client-first philosophy means partners feel genuinely supported at every stage of their security journey — from the first conversation to a long-term partnership. She plays a key role in turning clients into lasting, trusted relationships.",
        ],
      },
    ],
  },
  {
    title: "Advisors",
    members: [
      {
        name: "Kirti Patwa",
        role: "Advisor",
        image: "/team/kirti-patwa.png",
        bio: [
          "As an advisor to SIS, Kirti brings valuable perspective and seasoned judgement that strengthen the company's strategic decisions and keep it aligned with its long-term goals.",
          "Drawing on broad experience, she offers an outside-in view that challenges assumptions and sharpens direction — serving as an important sounding board for the leadership team.",
        ],
      },
      {
        name: "Shreyansh Bhavsar",
        role: "Advisor",
        image: "/team/shreyansh-bhavsar.jpg",
        bio: [
          "An advisor to SIS, Shreyansh contributes strategic insight and domain knowledge that support service excellence and informed decision-making across the organization.",
          "His perspective helps the team navigate complex challenges and identify new opportunities, ensuring SIS continues to deliver real value while growing responsibly.",
        ],
      },
    ],
  },
  {
    title: "Our Team",
    members: [
      {
        name: "Krishna Patwa",
        role: "Operations Management",
        image: "/team/krishna-patwa.png",
        bio: [
          "Leading operations at SIS, Krishna keeps the engine running — ensuring smooth day-to-day execution and seamless delivery across every security engagement.",
          "From coordinating teams to keeping projects on schedule, a strong focus on process and detail means clients experience reliable, well-organized and timely service at every step.",
        ],
      },
      {
        name: "Rahul Mourya",
        role: "SaaS Lead",
        image: "/team/rahul-mourya.png",
        bio: [
          "As SaaS Lead, Rahul drives the development and security of SIS's SaaS offerings, building solutions that are scalable, reliable and secure by design.",
          "He combines engineering depth with a security-first mindset, ensuring the platforms SIS builds stand up to real-world threats while delivering a smooth, dependable experience for users.",
        ],
      },
      {
        name: "Tushar Dhanore",
        role: "SOC Lead",
        image: "/team/tushar-dhanore.jpeg",
        bio: [
          "As SOC Lead, Tushar heads SIS's round-the-clock threat monitoring and incident response, standing guard so clients stay protected against evolving cyber threats 24/7.",
          "He leads detection, triage and rapid response — hunting for threats that automation misses and ensuring incidents are contained quickly to minimize impact on the business.",
        ],
      },
    ],
  },
];

const sectionHeadlines: Record<string, React.ReactNode> = {
  Leadership: (
    <>
      Meet Our <span className="text-gradient">Leadership</span>
    </>
  ),
  Advisors: (
    <>
      Our Trusted <span className="text-gradient">Advisors</span>
    </>
  ),
  "Our Team": (
    <>
      The Team Securing Your <span className="text-gradient">Success</span>
    </>
  ),
};

function FeatureMember({ m, index }: { m: Member; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Photo */}
      <Reveal variant={reverse ? "right" : "left"} className={reverse ? "lg:order-2" : ""}>
        <div className="relative mx-auto max-w-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={m.image}
            alt={m.name}
            className="h-[420px] w-full rounded-2xl object-cover shadow-[0_28px_60px_-25px_rgba(18,36,65,0.4)] lg:h-[460px]"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="mt-3 h-2.5 w-3/4 rounded-full bg-electric" aria-hidden />
        </div>
      </Reveal>

      {/* Info */}
      <div className={reverse ? "lg:order-1" : ""}>
        <Reveal>
          <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
            <span className="h-[2px] w-5 bg-electric" aria-hidden />
            {m.role}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="mt-4 font-display text-[30px] font-bold leading-tight text-snow sm:text-[38px]">{m.name}</h3>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-1 text-[15px] font-semibold text-electric">{m.role}</p>
        </Reveal>
        {m.bio.map((para, i) => (
          <Reveal key={i} delay={200 + i * 80}>
            <p className="mt-5 text-[15px] leading-[1.8] text-mist">{para}</p>
          </Reveal>
        ))}
        {m.linkedin && (
          <Reveal delay={360}>
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 border border-line px-6 py-3 font-display text-[14.5px] font-semibold text-snow transition-all hover:border-electric hover:text-electric"
            >
              <Linkedin size={17} aria-hidden /> Connect on LinkedIn
            </a>
          </Reveal>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  let memberIndex = 0;
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
                A team of dedicated leaders, advisors and security specialists committed to defending your data and
                securing your success.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Team sections */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24" aria-label="Team members">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            {sections.map((section, si) => (
              <div key={section.title} className={si > 0 ? "mt-20 lg:mt-28" : ""}>
                <Reveal>
                  <div className="text-center">
                    <span className="flex items-center justify-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-electric">
                      <span className="h-[2px] w-5 bg-electric" aria-hidden />
                      {section.title}
                      <span className="h-[2px] w-5 bg-electric" aria-hidden />
                    </span>
                    <h2 className="mt-4 font-display text-[30px] font-bold leading-tight tracking-tight text-snow sm:text-[40px]">
                      {sectionHeadlines[section.title]}
                    </h2>
                  </div>
                </Reveal>

                <div className="mt-12 space-y-16 lg:space-y-24">
                  {section.members.map((m) => (
                    <FeatureMember key={m.name} m={m} index={memberIndex++} />
                  ))}
                </div>
              </div>
            ))}

            {/* Join the team CTA */}
            <Reveal delay={150}>
              <div className="mt-20 rounded-2xl border border-electric/20 bg-electric/5 p-8 text-center lg:mt-28">
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
