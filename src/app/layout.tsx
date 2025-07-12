import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://motionlabs.dev'),
  title: {
    default: "Motion Labs - AI-Powered Development Tools for Sui Blockchain",
    template: "%s | Motion Labs"
  },
  description: "Motion Labs builds AI-powered development tools for the Sui blockchain ecosystem. Featuring Sui MCP, intelligent code completion, automated debugging, and comprehensive developer platforms that accelerate blockchain development.",
  keywords: [
    "Motion Labs",
    "Sui blockchain",
    "AI development tools",
    "Sui MCP",
    "blockchain development",
    "smart contracts",
    "Move programming",
    "developer tools",
    "AI code completion",
    "blockchain debugging",
    "Sui ecosystem",
    "decentralized applications",
    "dApp development",
    "Web3 tools",
    "blockchain analytics"
  ],
  authors: [{ name: "Motion Labs", url: "https://motionlabs.dev" }],
  creator: "Motion Labs",
  publisher: "Motion Labs",
  category: "Technology",
  classification: "Blockchain Development Tools",
  
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" }
    ]
  },

  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://motionlabs.dev",
    siteName: "Motion Labs",
    title: "Motion Labs - AI-Powered Development Tools for Sui Blockchain",
    description: "Build faster, debug smarter, and deploy with confidence using Motion Labs' AI-powered development tools for the Sui blockchain ecosystem. Featuring Sui MCP and comprehensive developer platforms.",
    images: [
      {
        url: "https://motionlabs.dev/banner.png",
        width: 2098,
        height: 1271,
        alt: "Motion Labs - AI-Powered Development Tools for Sui Blockchain",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@motionlabs",
    creator: "@motionlabs",
    title: "Motion Labs - AI-Powered Development Tools for Sui Blockchain",
    description: "Build faster, debug smarter, and deploy with confidence using AI-powered development tools for the Sui blockchain ecosystem.",
    images: [
      {
        url: "https://motionlabs.dev/banner.png",
        alt: "Motion Labs - AI-Powered Development Tools for Sui Blockchain",
      }
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },

  alternates: {
    canonical: "https://motionlabs.dev",
  },

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Motion Labs",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Motion Labs",
    "description": "AI-powered development tools for the Sui blockchain ecosystem",
    "url": "https://motionlabs.dev",
    "logo": "https://motionlabs.dev/banner.png",
    "image": "https://motionlabs.dev/banner.png",
    "foundingDate": "2024",
    "sameAs": [
      "https://github.com/motion-labs",
      "https://twitter.com/motionlabs",
      "https://discord.gg/motionlabs"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@motionlabs.dev",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "Sui MCP",
          "description": "AI-powered development protocol for Sui blockchain",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Cross-platform"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
