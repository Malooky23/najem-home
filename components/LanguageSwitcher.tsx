'use client'
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"


export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en"
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`))
  }

  return (
    <Button variant="ghost" onClick={switchLocale}>
      {locale === "en" ? "العربية" : "English"}
    </Button>
  )
}

// import { useLocale, useTranslations } from "next-intl"
// import { Button } from "@/components/ui/button"
// import {useRouter} from '@/i18n/routing';


// export default function LanguageSwitcher() {
//   const t = useTranslations("LanguageSwitcher")
//   const locale = useLocale()
//   const router = useRouter()

//   const switchLocale = () => {
//     const newLocale = locale === "en" ? "ar" : "en"
//     router.push(`./${newLocale}`)
//   }

//   return (
//     <Button variant="ghost" onClick={switchLocale}>
//       {t("switchTo", { locale: locale === "en" ? "ar" : "en" })}
//     </Button>
//   )
// }

