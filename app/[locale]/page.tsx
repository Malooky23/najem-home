import { useTranslations } from "next-intl"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import {Link} from '@/i18n/routing';
import { Button } from "@/components/ui/button"
import { Ship } from "lucide-react"


export default function Home() {
  const t = useTranslations("Index")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* <HeroSection /> */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container relative py-12 md:py-24 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                {t("heroTitle")}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("heroDescription")}</p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary px-8 py-6 transition-all hover:bg-primary/90"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">{t("contactUs")}</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary px-8 py-6 text-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                {t("learnMore")}
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10" />
            <div className="absolute -left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10" />
            <Ship className="relative h-64 w-64 text-primary" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

