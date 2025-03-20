import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PostHogProvider } from "./providers";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Najem Aleen Shipping | Logistics Services in UAE",
  description: "Expert container shipping, freight forwarding, customs clearance and car transportation solutions across the UAE and worldwide.",
  keywords: "shipping, logistics, UAE, Dubai, container shipping, freight forwarding, customs clearance, car transportation",
  metadataBase: new URL('https://najemaleen.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://najemaleen.com',
    siteName: 'Najem Aleen Shipping',
    title: 'Najem Aleen Shipping | Complete Logistics Solutions',
    description: 'Expert shipping and logistics services in the UAE including container shipping, freight forwarding, and customs clearance',
    images: [
      {
        url: '/op-logo.jpg', // Create this image (1200x630px ideal size)
        width: 1200,
        height: 630,
        alt: 'Najem Aleen Shipping',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najem Aleen Shipping | UAE Logistics Experts',
    description: 'Expert shipping and logistics services in the UAE',
    images: ['/op-logo.jpg'], // Create this image (1200x600px ideal size)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html lang="ar">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`font-cairo`}>
        <PostHogProvider>
          {children}
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}