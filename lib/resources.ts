import { BookOpen, FileText, Newspaper, PenLine, type LucideIcon } from "lucide-react";

export type Resource = {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
};

export const resources: Resource[] = [
  {
    slug: "case-studies",
    icon: BookOpen,
    name: "Case Studies",
    tagline: "Real-world security wins from our engagements.",
    description:
      "We're putting together detailed case studies showing how SIS helped organizations strengthen their security posture, pass audits, and respond to real threats. Check back soon.",
  },
  {
    slug: "whitepapers",
    icon: FileText,
    name: "White Papers",
    tagline: "In-depth research and expert guidance.",
    description:
      "Our team is preparing in-depth white papers on cybersecurity, GRC, compliance and emerging threats. These resources will be available here shortly.",
  },
  {
    slug: "news-flash",
    icon: Newspaper,
    name: "News Flash",
    tagline: "Latest alerts, advisories and updates.",
    description:
      "Timely cybersecurity alerts, threat advisories and company updates will be published here. Stay tuned for the latest from SIS.",
  },
  {
    slug: "blog",
    icon: PenLine,
    name: "Blogs",
    tagline: "Practical insights from our experts.",
    description:
      "Our security experts are writing practical insights, how-tos and perspectives on staying secure in a digital-first world. New articles are coming soon.",
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
