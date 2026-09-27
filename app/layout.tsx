import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Yug More",
    "San José State University",
    "computer science",
    "software engineer",
    "artificial intelligence",
    "SafetyLens",
  ],
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: { canonical: "/" },
      }
    : {}),
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    ...(siteUrl
      ? {
          images: [
            {
              url: "/images/yug-professional.jpg",
              width: 1200,
              height: 1800,
              alt: "Professional portrait of Yug More",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: site.title,
    description: site.description,
    ...(siteUrl ? { images: ["/images/yug-professional.jpg"] } : {}),
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yug More",
  alternateName: "Yug Amol More",
  email: site.email,
  telephone: "+1-813-817-7538",
  jobTitle: "Computer Science Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: site.school,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San José",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Software engineering",
    "Artificial intelligence",
    "Machine learning",
    "Full-stack development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
