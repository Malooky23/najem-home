import { useTranslations } from "next-intl"
import Image from "next/image"
import { Link } from '@/i18n/routing';
// import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./LanguageSwitcher"
import { GlobeIcon } from "lucide-react";

export default function Header() {
  const t = useTranslations("Header")
  // const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Image
            src="/najem_favicon.png"
            alt={t("logoAlt")}
            width={180}
            height={50}
            className="h-10 w-auto"
          />
          <nav className="hidden gap-6 md:flex">
            {["services", "about", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                {t(item)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {/* <Button className="bg-secondary hover:bg-secondary/50">{t("getQuote")}</Button> */}
          <Link href='https://wa.me/971549968485'>
            <Button className="bg-secondary relative overflow-hidden transition-colors duration-300 ease-in-out hover:bg-secondary/50 group">
              <span className="relative z-10">{t("getQuote")}</span>
              <span className="absolute inset-0 bg-secondary/20 rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
            </Button>

          </Link>
        </div>
      </div>
    </header>
  )
}

