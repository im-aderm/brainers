import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brainers Labs — Custom Software, AI & Cloud Engineering in Nigeria",
  description: "Brainers Labs designs, builds, and scales custom software, AI systems, and cloud infrastructure for startups, enterprises, and public sector organizations across all 36 states of Nigeria.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Brainers Labs — Custom Software, AI & Cloud Engineering in Nigeria",
    description: "Brainers Labs designs, builds, and scales custom software, AI systems, and cloud infrastructure for startups, enterprises, and public sector organizations across all 36 states of Nigeria.",
    type: "website",
    url: "https://brainerslabs.com/",
    images: [{
      url: "https://brainerslabs.com/assets/images/og/og-home.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
    }],
    siteName: "Brainers Labs",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainers Labs — Custom Software, AI & Cloud Engineering in Nigeria",
    description: "Brainers Labs designs, builds, and scales custom software, AI systems, and cloud infrastructure for startups, enterprises, and public sector organizations across all 36 states of Nigeria.",
    images: ["https://brainerslabs.com/assets/images/og/og-home.jpg"],
  },
  alternates: {
    canonical: "https://brainerslabs.com/",
    languages: {
      "en": "https://brainerslabs.com/",
      "x-default": "https://brainerslabs.com/",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1F1C1B" />
        <meta name="theme-color" content="#1F1C1B" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Brainers Labs",
          "url": "https://brainerslabs.com",
          "logo": "https://brainerslabs.com/assets/images/logos/brainers/desktop-logo-dark-bg.png",
          "foundingDate": "2020",
          "description": "Brainers Labs designs, builds, and scales custom software, AI systems, and cloud infrastructure for startups, enterprises, and public sector organizations across Nigeria.",
          "address": {"@type": "PostalAddress", "addressCountry": "NG"},
          "areaServed": {"@type": "Country", "name": "Nigeria"},
          "knowsAbout": ["Custom Software Development", "Software Consulting", "Artificial Intelligence", "Cloud & DevOps", "UI/UX Design"],
          "makesOffer": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Software Development"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Software Consulting"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Intelligence Systems"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "UI/UX Design"}},
          ]
        })}} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LV589RTG81"></script>
        <script dangerouslySetInnerHTML={{__html: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-LV589RTG81');"}} />
        <script src="/js/iso-player.js"></script>
        <meta name="build-date" content="2026-09-27T00:00:00.000Z" />
      </head>
      <body>
        {children}
        <script src="/js/lenis.min.js"></script>
        <script src="/js/nav.js"></script>
      </body>
    </html>
  );
}
