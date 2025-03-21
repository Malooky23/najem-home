import { useLocale, useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const t = useTranslations("Index")
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-8 pb-32 h-[100vh] flex items-center justify-center">
      {/* Light pattern overlay */}
      <div className="absolute inset-0 opacity-20 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-2 pattern-opacity-10"></div>
      
      <div className="container relative py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-12 ">
          {/* Visual elements for mobile */}
          <div className="absolute -top-[50px] w-full md:hidden">
            <div
              className={`absolute -top-50 h-[180px] w-[180px] rounded-full bg-secondary/10 ${isRtl
                ? "left-[30%] -translate-x-1/2 translate-y-4"
                : "right-[30%] translate-x-1/2 translate-y-4"
                }`}
            />
            <div
              className={`absolute top-16 h-[180px] w-[180px] rounded-full bg-primary/10 ${isRtl
                ? "right-[30%] translate-x-1/2 -translate-y-4"
                : "left-[30%] -translate-x-1/2 -translate-y-4"
                }`}
            />
          </div>
          {/* Logo for mobile */}
          <div className="mb-[20px] relative z-10 md:hidden">
            <Image
              src="/name_banner.png"
              alt="Najem Aleen Shipping Logo"
              height={1000}
              width={1000}
              className="w-[500px] h-auto"
              priority // Add priority for LCP image
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 relative z-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter gradient-heading sm:text-5xl xl:text-6xl/none">
                {t("heroTitle")}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("heroDescription")}</p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href={'tel:+971549968487'}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-primary px-8 py-6 transition-all hover:bg-primary/90"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative">{t("contactUs")}</span>
                </Button>
              </Link>

              <Link href={'https://wa.me/971549968485'}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary px-8 py-6 text-secondary hover:bg-secondary/10 hover:text-secondary"
                >
                  {t("learnMore")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Logo and background circles for desktop */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="absolute -right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10" />
            <div className="absolute -left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10" />
            <Image 
              src="/najem-logo-sq.png" 
              alt="Najem Aleen Logo"
              height={306 / 2} 
              width={1076 / 2}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}