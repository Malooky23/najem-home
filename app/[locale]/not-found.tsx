import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"

export default function NotFound() {
  const t = useTranslations("404")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-primary mb-4">{t("title")}</h1>
        <p className="text-gray-600 mb-8">
          {t("description")}
        </p>
        <Link href="/">
          <Button className="inline-flex items-center">
            <HomeIcon className="mr-2 h-4 w-4" />
            <span>{t("button")}</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
