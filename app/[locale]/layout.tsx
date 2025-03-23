import type React from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound, redirect } from "next/navigation";
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
import { GoogleAnalytics } from '@next/third-parties/google'


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
  // Check if the locale exists in metadata, otherwise default to 'en'
  const safeLocale = Object.keys(metadata).includes(locale) ? locale : 'en';
  const typedLocale = safeLocale as Locale;
  
  return {
    title: metadata[typedLocale].title,
    description: metadata[typedLocale].description,
    keywords: metadata[typedLocale].keywords,
    metadataBase: new URL('https://www.najemaleen.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      type: 'website',
      locale: safeLocale === "ar" ? 'ar_AR' : 'en_US',
      url: 'https://www.najemaleen.com',
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
  // Check if locale is valid, redirect to default locale if not
  const validLocales = ["en", "ar"];
  if (!validLocales.includes(locale)) {
    redirect('/en'); // Redirect to English as default
  }

  let messages;
  try {
    messages = await getMessages({locale});
  } catch (error) {
    // If messages can't be loaded but locale is valid, still redirect to default
    redirect('/en');
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
      <GoogleAnalytics gaId="AW-864070198" />

    </html>
  );
}
