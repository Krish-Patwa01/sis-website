import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shridharinfosec.com"),
  title: "Shridhar InfoSec Solutions | Next-Gen Cybersecurity, GRC & Red Teaming",
  description:
    "Shridhar InfoSec Solutions is a next-generation cybersecurity firm delivering GRC & compliance, offensive security & red teaming, SOC as a Service, vCISO, digital forensics and security training — defending your data, securing your success.",
  keywords: [
    "cybersecurity services",
    "GRC compliance",
    "ISO 27001",
    "SOC 2",
    "VAPT",
    "penetration testing",
    "red teaming",
    "SOC as a Service",
    "vCISO",
    "incident response",
    "security awareness training",
    "Shridhar InfoSec",
    "Vadodara",
  ],
  openGraph: {
    type: "website",
    url: "https://www.shridharinfosec.com",
    title: "Shridhar InfoSec Solutions | Defending Your Data, Securing Your Success",
    description:
      "Next-gen cyber defense: GRC & compliance, offensive security, SOC as a Service, vCISO, forensics and training for enterprises across industries.",
    siteName: "Shridhar InfoSec Solutions",
    images: [{ url: "/logo-light.png", width: 1200, height: 630, alt: "Shridhar InfoSec Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shridhar InfoSec Solutions | Next-Gen Cyber Defense",
    description:
      "GRC & compliance, offensive security & red teaming, SOC as a Service, vCISO and security training for the digital-first enterprise.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shridhar InfoSec Solutions",
  url: "https://www.shridharinfosec.com",
  email: "info@shridharinfosec.com",
  telephone: "+91-932-866-7642",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-338, Emerald One, Jetalpur Road",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390007",
    addressCountry: "IN",
  },
  description:
    "Next-generation cybersecurity firm providing GRC & compliance, offensive security & red teaming, SOC as a Service, vCISO, digital forensics and security awareness training.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
