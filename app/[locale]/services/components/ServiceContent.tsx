import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, Mail } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

interface ServiceContentProps {
  serviceKey: string;
  imagePath: string;
  locale: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ServiceContent({
  serviceKey,
  imagePath,
  locale,
  children,
  className,
}: ServiceContentProps) {
  const t = useTranslations(`Services.${serviceKey}`);
  const commonT = useTranslations("Services.common");

  return (
    <>
      {/* Main container with proper positioning */}
      <div className="relative">
        {/* Hero Section - Background and content only, no sidebar */}
        <section className="relative bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={imagePath}
              alt={t("title")}
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
                { label: t("title") }
              ]}
              className="mb-4 md:mb-6"
            />
            
            <div className="max-w-3xl">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-3">
                {t("Title")}
              </div>
              {/* Use the new global utility class */}
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl gradient-heading">
                {t("title")}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {t("heroDescription")}
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
                <h2 className="text-3xl font-bold tracking-tight text-primary">{t("descriptionTitle")}</h2>
                <p className="text-muted-foreground">{t("fullDescription")}</p>

                {/* Key Features */}
                <h2 className="text-3xl font-bold tracking-tight text-primary mt-12">{t("featuresTitle")}</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const featureKey = `feature${i + 1}`;
                    const featureText = t(featureKey, { fallback: "" });
                    if (!featureText) return null;
                    return (
                      <div key={featureKey} className="flex items-start">
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium">{featureText}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Process */}
                <h2 className="text-3xl font-bold tracking-tight text-primary mt-12">{t("processTitle")}</h2>
                <p className="text-muted-foreground">{t("processDescription")}</p>
                <div className="mt-8 space-y-6">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const stepKey = `step${i + 1}`;
                    const stepText = t(stepKey, { fallback: "" });
                    if (!stepText) return null;
                    return (
                      <div key={stepKey} className="flex">
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                          <span className="font-bold">{i + 1}</span>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium">{stepText}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Additional Content */}
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
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <p>
                        <strong className="text-foreground">{commonT("phone")}:</strong> +971 04 257 97 91
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <p>
                        <strong className="text-foreground">{commonT("email")}:</strong> sales@najemaleen.com
                      </p>
                    </div>
                  </div>
                  <Button className="mt-6 w-full rounded-full" variant="outline" asChild>
                    <Link href="/contact">{commonT("contactButton")}</Link>
                  </Button>
                </div>

                {/* Related Services */}
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
                          <ChevronRight className="mr-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
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
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <p>
                      <strong className="text-foreground">{commonT("phone")}:</strong> +971 04 257 97 91
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <p>
                      <strong className="text-foreground">{commonT("email")}:</strong> sales@najemaleen.com
                    </p>
                  </div>
                </div>
                <Button className="mt-6 w-full rounded-full" variant="outline" asChild>
                  <Link href="/contact">{commonT("contactButton")}</Link>
                </Button>
              </div>

              {/* Mobile Related Services */}
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
                        <ChevronRight className="mr-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
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
        </div>
      </div>
    </>
  );
}