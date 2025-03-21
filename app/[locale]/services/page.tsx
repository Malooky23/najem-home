import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  
  return {
    title: isArabic 
      ? "خدماتنا | نجم العين للشحن"
      : "Our Services | Najem Aleen Shipping",
    description: isArabic
      ? "استكشف مجموعة خدماتنا الشاملة بما في ذلك شحن الحاويات والتخليص الجمركي وإدارة سلسلة التوريد للشركات في الإمارات العربية المتحدة"
      : "Explore our comprehensive range of services including container shipping, customs clearance, and supply chain management for businesses across the UAE.",
    alternates: {
      canonical: `/${params.locale}/services`,
      languages: {
        'en': '/en/services',
        'ar': '/ar/services',
      },
    },
  };
}

export default function ServicesPage({ params }: Props) {
  const t = useTranslations("Index");
  const pageT = useTranslations("ServicesPage");

  return (
    <>
      {/* Hero Section - Updated background styling to match main page */}
      <section className="relative bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden">
        <div className="container pt-4 pb-12 md:py-16">
          <Breadcrumbs 
            items={[
              { label: pageT("heroTitle") }
            ]}
            className="mb-4"
          />
          <div className="max-w-3xl">
            {/* Apply the same gradient heading class here */}
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl gradient-heading">
              {pageT("heroTitle")}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {pageT("heroDescription")}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="100%" height="100%" fill="none"/>
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary/40"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-pattern)"/>
          </svg>
        </div>
      </section>

      {/* Update the background of the services section */}
      <div className="bg-background">
        <ServicesSection isTitle={true} />
      </div>

      {/* Additional Info Section - Updated colors to match main page */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-background p-8 md:p-12 shadow-sm border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold md:text-3xl text-primary">
                  {pageT("additionalTitle")}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {pageT("additionalDescription")}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button asChild className="rounded-full" size="lg">
                  <Link href="/contact">
                    {pageT("contactButton")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
