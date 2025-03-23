import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, Mail, ChevronLeft } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WhatsApp } from "@/components/Icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ShippingToSyriaContentProps {
  imagePath: string;
  locale: string;
  children?: React.ReactNode;
}

export default function ShippingToSyriaContent({
  imagePath,
  locale,
  children,
}: ShippingToSyriaContentProps) {
  const t = useTranslations("ShippingToSyria");
  const commonT = useTranslations("Services.common");

  const whyChooseUsUsps = t.raw("whyChooseUs.usps");
  const servicesOfferedServices = t.raw("servicesOffered.services");
  const regulationsBulletPoints = t.raw("syriaSpecificInfo.regulations.bulletPoints");
  const prohibitedItemsBulletPoints = t.raw("syriaSpecificInfo.prohibitedItems.bulletPoints");
  const challengesBulletPoints = t.raw("syriaSpecificInfo.challenges.bulletPoints");
  const faqQuestions = t.raw("faq.questions");


  return (
    <>
      {/* Main container with proper positioning */}
      <div className="relative">
        {/* Hero Section - Background and content only, no sidebar */}
        <section className="relative bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={imagePath}
              alt={t("hero.title")}
              fill
              className="object-cover opacity-10 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/95" />
          </div>

          {/* Hero Content - No sidebar, proper height */}
          <div className="container relative z-10 pt-4 pb-16 md:pt-6 md:pb-10">
            <Breadcrumbs
              items={[
                { label: commonT("services"), href: "/services" },
                { label: t("hero.title") },
              ]}
              className="mb-4 md:mb-6"
            />

            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl gradient-heading">
                {t("hero.title")}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {t("hero.subheading")}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    {commonT("contactCta")}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full">
                  <Link href="/services">
                    {commonT("allServices")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with fixed sidebar layout */}
        <div className="container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            {/* Main content area */}
            <div className="lg:col-span-8">
              {/* Service Description */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h2 className="text-3xl font-bold tracking-tight text-primary">{t("introduction.title")}</h2>
                <p className="text-muted-foreground">{t("introduction.paragraph1")}</p>
                <p className="text-muted-foreground">{t("introduction.paragraph2")}</p>

                {/* Why Choose Us */}
                <h2 className="text-3xl font-bold tracking-tight text-primary mt-12">{t("whyChooseUs.title")}</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {Array.isArray(whyChooseUsUsps) && whyChooseUsUsps.map((usp: any, i: number) => (
                    <div key={`usp-${i}`} className="flex items-start">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                       {locale === "en" ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                      </div>
                      <div className="mx-4">
                        <p className="text-base font-medium">{usp.heading}</p>
                        <p className="text-muted-foreground text-sm">{usp.paragraph}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Services Offered */}
                <h2 className="text-3xl font-bold tracking-tight text-primary mt-12">{t("servicesOffered.title")}</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {Array.isArray(servicesOfferedServices) && servicesOfferedServices.map((service: any, i: number) => (
                    <div key={`service-${i}`} className="flex items-start">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {locale === "en" ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                      </div>
                      <div className="mx-4">
                        <p className="text-base font-medium">{service.heading}</p>
                        <p className="text-muted-foreground text-sm">{service.paragraph}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Syria-Specific Information */}
                <h2 className="text-3xl font-bold tracking-tight text-primary mt-12">{t("syriaSpecificInfo.title")}</h2>
                <h3 className="text-2xl font-bold tracking-tight mt-8">{t("syriaSpecificInfo.regulations.title")}</h3>
                <p className="text-muted-foreground">{t("syriaSpecificInfo.regulations.paragraph")}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {Array.isArray(regulationsBulletPoints) && regulationsBulletPoints.map(
                    (point: string, i: number) => (
                      <li key={`regulation-${i}`} className="text-muted-foreground">
                        {point}
                      </li>
                    )
                  )}
                </ul>

                <h3 className="text-2xl font-bold tracking-tight mt-8">{t("syriaSpecificInfo.prohibitedItems.title")}</h3>
                <p className="text-muted-foreground">{t("syriaSpecificInfo.prohibitedItems.paragraph")}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {Array.isArray(prohibitedItemsBulletPoints) && prohibitedItemsBulletPoints.map(
                    (item: string, i: number) => (
                      <li key={`prohibited-${i}`} className="text-muted-foreground">
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <h3 className="text-2xl font-bold tracking-tight mt-8">{t("syriaSpecificInfo.shippingRoutes.title")}</h3>
                <p className="text-muted-foreground">{t("syriaSpecificInfo.shippingRoutes.paragraph")}</p>
                <p className="text-muted-foreground">{t("syriaSpecificInfo.shippingRoutes.example")}</p>

                <h3 className="text-2xl font-bold tracking-tight mt-8">{t("syriaSpecificInfo.challenges.title")}</h3>
                <p className="text-muted-foreground">{t("syriaSpecificInfo.challenges.paragraph")}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {Array.isArray(challengesBulletPoints) && challengesBulletPoints.map(
                    (point: string, i: number) => (
                      <li key={`challenge-${i}`} className="text-muted-foreground">
                        {point}
                      </li>
                    )
                  )}
                </ul>

                {/* FAQ Section */}
                <h2 className="text-3xl font-bold tracking-tight text-primary mt-12">{t("faq.title")}</h2>
                <div className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    {Array.isArray(faqQuestions) && faqQuestions.map((qa: any, i: number) => (
                      <AccordionItem key={`faq-${i}`} value={`item-${i}`} className="border-b border-muted">
                        <AccordionTrigger className="text-lg font-medium py-4 hover:text-primary transition-colors">
                          {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {qa.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {children}
              </div>

              {/* Main CTA Section */}
              <div className="mt-16 rounded-xl bg-muted p-8 border border-primary/10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary">{commonT("ctaTitle")}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {commonT("ctaDescription")}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button size="lg" className="rounded-full" asChild>
                      <Link href="/contact">
                        {commonT("ctaButton")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar for desktop - Fixed position with proper sticky behavior */}
            <div className="hidden lg:block lg:col-span-4 lg:relative">
              <div className="sticky top-20 mt-[-180px] space-y-6">
                {/* Contact Info */}
                <div className="rounded-xl border border-primary/10 bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary">{commonT("contactTitle")}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {commonT("contactDescription")}
                  </p>
                  <div className="mt-6 space-y-4">
                    <Link href="https://wa.me/971549968485" className="flex items-center bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-300 p-3 rounded-md transition-all duration-300 shadow-sm" >
                      <WhatsApp className="h-5 w-5 text-green-400 mx-3" />
                      <p>
                        <strong className="text-foreground">{commonT("WhatsApp")}:</strong> <span dir="ltr">+971 54 996 8485</span>
                      </p>
                    </Link>
                    <Link href="tel:+971042579791" className="bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100/50 hover:to-blue-300/50 flex items-center p-3 rounded-md transition-all duration-300 shadow-sm" >
                      <Phone className="h-5 w-5 text-primary mx-3" />
                      <p>
                        <strong className="text-foreground">{commonT("phone")}:</strong> <span dir="ltr">+971 04 257 97 91</span>
                      </p>
                    </Link>
                    <Link href="mailto:sales@najemaleen.com" className="bg-gradient-to-br from-orange-50 to-orange-100 hover:from-amber-100 hover:to-amber-300 flex items-center p-3 rounded-md transition-colors duration-300 shadow-sm">
                      <Mail className="h-5 w-5 text-primary mx-3" />
                      <p>
                        <strong className="text-foreground">{commonT("email")}:</strong> <span dir="ltr">sales@najemaleen.com</span>
                      </p>
                    </Link>
                  </div>
                  <Button className="mt-6 w-full rounded-full" variant="outline" asChild>
                    <Link href="/contact">{commonT("contactButton")}</Link>
                  </Button>
                </div>

                {/* Related Services
                <div className="rounded-xl border border-primary/10 bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary">{commonT("relatedServicesTitle")}</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center group">
                      {locale === "en" ? <ChevronRight className="mx-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" /> : <ChevronLeft className="mx-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />}

                      <Link
                        href="/services"
                        className="text-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {commonT("allServices")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

                <div className="rounded-xl border border-primary/10 bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary">{commonT("relatedServicesTitle")}</h3>
                  <ul className="mt-6 space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => {
                      const relatedKey = `related${i + 1}`;
                      const relatedText = t(relatedKey, { fallback: "" });
                      const relatedLink = t(`related${i + 1}Link`, { fallback: "" });
                      if (!relatedText || !relatedLink) return null;
                      return (
                        <li key={relatedKey} className="flex items-center group">
                          {locale === "en" ? <ChevronRight className="mx-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" /> : <ChevronLeft className="mx-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />}
                          <Link
                            href={relatedLink}
                            className="text-foreground hover:text-primary hover:underline transition-colors"
                          >
                            {relatedText}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>



            {/* Mobile-only sidebar */}
            <div className="lg:hidden space-y-6">
              {/* Mobile Contact Info */}
              <div className="rounded-xl border border-primary/10 bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{commonT("contactTitle")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {commonT("contactDescription")}
                </p>
                <div className="mt-6 space-y-4">
                  <Link href="https://wa.me/971549968485" className="flex items-center bg-gradient-to-r from-slate-50 to-slate-100 hover:from-green-50 hover:to-green-100/70 p-3 rounded-md transition-all duration-300 shadow-sm" >
                    <WhatsApp className="h-5 w-5 text-green-400 mx-3" />
                    <p>
                      <strong className="text-foreground">{commonT("WhatsApp")}:</strong> <span dir="ltr">+971 54 996 8485</span>
                    </p>
                  </Link>
                  <Link href="tel:+971042579791" className="bg-gradient-to-r from-slate-50 to-slate-100 hover:from-primary-50 hover:to-primary-100/50 flex items-center p-3 rounded-md transition-all duration-300 shadow-sm" >
                    <Phone className="h-5 w-5 text-primary mx-3" />
                    <p>
                      <strong className="text-foreground">{commonT("phone")}:</strong> <span dir="ltr">+971 04 257 97 91</span>
                    </p>
                  </Link>
                  <Link href="mailto:sales@najemaleen.com" className="bg-gradient-to-r from-slate-50 to-slate-100 hover:from-primary-50 hover:to-primary-100/50 flex items-center p-3 rounded-md transition-all duration-300 shadow-sm">
                    <Mail className="h-5 w-5 text-primary mx-3" />
                    <p>
                      <strong className="text-foreground">{commonT("email")}:</strong> <span dir="ltr">sales@najemaleen.com</span>
                    </p>
                  </Link>
                </div>
                <Button className="mt-6 w-full rounded-full" variant="outline" asChild>
                  <Link href="/contact">{commonT("contactButton")}</Link>
                </Button>
              </div>

              {/* Mobile Related Services */}
              <div className="rounded-xl border border-primary/10 bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{commonT("relatedServicesTitle")}</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center group">
                    {locale === "en" ? <ChevronRight className="mx-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" /> : <ChevronLeft className="mx-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />}

                    <Link
                      href="/services"
                      className="text-foreground hover:text-primary hover:underline transition-colors"
                    >
                      {commonT("allServices")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}