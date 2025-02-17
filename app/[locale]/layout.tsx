import type React from "react"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { notFound } from "next/navigation"
import { Inter, Cairo } from "next/font/google"
import { getMessages } from "next-intl/server"
import {routing} from '@/i18n/routing';


const inter = Inter({ subsets: ["latin"] })
const cairo = Cairo({ subsets: ["arabic"] })

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages()

  if (!messages) {
    return(
      <div>Hi</div>
    )
  }
  let whichFont = cairo
  if(locale === "ar"){
    const whichFont = cairo
  }else if(locale === 'en'){
    const whichFont = inter
  }else{
    const whichFont = inter

  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={whichFont.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

