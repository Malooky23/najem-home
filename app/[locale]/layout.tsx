import type React from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from 'next-intl/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Cairo } from "next/font/google";
import { routing } from "@/i18n/routing";
import StructuredData from "@/components/StructuredData";
import { PostHogProvider } from "../providers";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "../globals.css";
import type { Metadata } from "next";
import metadata from "@/i18n/metadata";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

type Locale = keyof typeof metadata;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const typedLocale = locale as Locale;
  return {
    title: metadata[typedLocale].title,
    description: metadata[typedLocale].description,
    keywords: metadata[typedLocale].keywords,
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
      locale: locale === "ar" ? 'ar_AR' : 'en_US',
      url: 'https://najemaleen.com',
      siteName: 'Najem Aleen Shipping',
      title: metadata[typedLocale].title,
      description: metadata[typedLocale].description,
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
      title: metadata[typedLocale].title,
      description: metadata[typedLocale].description,
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
  }
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;

  try {
    messages = await getMessages({locale});
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <StructuredData />
      </head>
      <body className={locale === "ar" ? cairo.className : inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PostHogProvider>
            <Header />
            {children}
            <Footer />
            <Analytics />
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
