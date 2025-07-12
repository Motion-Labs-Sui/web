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
  title: "Motion Labs - AI-Powered Development Tools for Sui",
  description: "Motion ecosystem on Sui. Build faster, debug smarter, and deploy with confidence using AI-powered development tools for the Sui blockchain ecosystem.",
  keywords: ["Motion Labs", "Sui", "Blockchain", "AI", "Development Tools", "Developer Tools"],
  authors: [{ name: "Motion Labs" }],
  creator: "Motion Labs",
  publisher: "Motion Labs",
  icons: {
    icon: "/brand/logo-01.png",
    shortcut: "/brand/logo-01.png",
    apple: "/brand/logo-01.png",
  },
  openGraph: {
    title: "Motion Labs - AI-Powered Development Tools for Sui",
    description: "Motion ecosystem on Sui. Build faster, debug smarter, and deploy with confidence.",
    url: "https://motionlabs.dev",
    siteName: "Motion Labs",
    images: [
      {
        url: "/brand/logo-01.png",
        width: 1200,
        height: 630,
        alt: "Motion Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Labs - AI-Powered Development Tools for Sui",
    description: "Motion ecosystem on Sui. Build faster, debug smarter, and deploy with confidence.",
    images: ["/brand/logo-01.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
