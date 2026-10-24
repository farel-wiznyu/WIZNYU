import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ArchiveIntro } from "@/components/archive-intro";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.title,
    template: `%s — WIZNYU`,
  },
  description: site.description,
  applicationName: "WIZNYU Archive",
  authors: [{ name: "WIZNYU" }],
  creator: "WIZNYU",
  category: "portfolio",
  keywords: [
    "WIZNYU",
    "Creative Technologist",
    "personal archive",
    "portfolio",
    "interface",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "WIZNYU",
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "WIZNYU — Personal Archive 001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/og.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${bodoni.variable} ${interTight.variable} ${jetBrainsMono.variable} bg-void`}
      lang="id"
    >
      <body className="bg-void text-bone antialiased">
        <a className="skip-link" href="#main">
          LEWATI KE KONTEN
        </a>
        <SiteHeader />
        <ArchiveIntro />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
