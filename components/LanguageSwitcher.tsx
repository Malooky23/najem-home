'use client'
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { GlobeIcon } from "lucide-react"


export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en"
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`))
  }

  return (
    <div className="bg-primary/30 rounded-full flex flex-row items-center  text-primary font-extrabold text-lg font-cairo transition-colors duration-300  hover:bg-primary/50">
    <Button variant="ghost" onClick={switchLocale} className="hover:bg-primary/50 rounded-full transition-colors duration-300">
    <GlobeIcon/>

      {locale === "en" ? "العربية" : "English"}
    </Button>
    </div>
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

