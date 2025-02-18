import { useTranslations } from "next-intl"
import {Link} from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="border-t bg-gradient-to-b from-blue-50 to-white">
      <div className="container flex h-16 items-center justify-center">
        <p className=" text-sm text-muted-foreground text-center">{t("copyright")}</p>
        {/* <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-secondary">
            {t("privacyPolicy")}
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-secondary">
            {t("termsOfService")}
          </Link> */}
        {/* </nav> */}
      </div>
    </footer>
  )
}

