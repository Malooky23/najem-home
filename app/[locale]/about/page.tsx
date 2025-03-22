import { useTranslations } from "next-intl";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Ship, Award, Users, Clock, Globe, Truck, Building, Cog } from "lucide-react";
import { generatePageMetadata } from "@/utils/metadata";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generatePageMetadata({
    locale: params.locale,
    pageName: "about",
    titleEn: "About Us | Najem Aleen Shipping",
    titleAr: "معلومات عنا | نجم الين للشحن",
    descriptionEn: "Your trusted partner for shipping, customs clearance, and logistics in Dubai with expertise since 1999 and innovation since our foundation in 2022.",
    descriptionAr: "تعرف على نجم الين للشحن، شركة رائدة في مجال الخدمات اللوجستية والشحن في الإمارات العربية المتحدة",
  });
}

export default function AboutPage({ params }: Props) {
  const t = useTranslations("About");

  return (
    <>
      <section className="relative bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden">
        <div className="container pt-4 pb-12 md:py-16">
          <Breadcrumbs 
            items={[
              { label: t("heroTitle") }
            ]}
            className="mb-4"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl gradient-heading">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t("introTitle")}</h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>{t("introDescription1")}</p>
                <p>{t("introDescription2")}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">{t("contactUs")}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">{t("ourServices")}</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-video md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image 
                src="/images/logistics-warehouse.jpg" 
                alt="Najem Aleen Shipping Operations" 
                fill 
                className="object-cover"
                priority 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("foundationTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("foundationDescription")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-xl shadow-lg">
              <Image 
                src="/images/dubai-skyline.jpg" 
                alt="Dubai Logistics Hub" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>{t("foundationContent1")}</p>
                <p>{t("foundationContent2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("servicesTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("servicesDescription")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("service1Title")}</h3>
              <p className="text-muted-foreground">{t("service1Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("service2Title")}</h3>
              <p className="text-muted-foreground">{t("service2Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("service3Title")}</h3>
              <p className="text-muted-foreground">{t("service3Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("service4Title")}</h3>
              <p className="text-muted-foreground">{t("service4Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("service5Title")}</h3>
              <p className="text-muted-foreground">{t("service5Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("service6Title")}</h3>
              <p className="text-muted-foreground">{t("service6Description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t("technologyTitle")}</h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>{t("technologyDescription1")}</p>
                <p>{t("technologyDescription2")}</p>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image 
                src="/images/logistics-technology.jpg" 
                alt="Advanced Logistics Technology" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("valuesTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("valuesDescription")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("value1Title")}</h3>
              <p className="text-muted-foreground">{t("value1Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("value2Title")}</h3>
              <p className="text-muted-foreground">{t("value2Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("value3Title")}</h3>
              <p className="text-muted-foreground">{t("value3Description")}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("value4Title")}</h3>
              <p className="text-muted-foreground">{t("value4Description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("marketTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("marketDescription")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-primary/5 p-8 rounded-xl">
              <p className="text-4xl font-bold text-primary mb-2">2023</p>
              <p className="text-2xl font-semibold mb-2">$30 Billion</p>
              <p className="text-lg">{t("marketPast")}</p>
            </div>
            <div className="bg-primary/5 p-8 rounded-xl">
              <p className="text-4xl font-bold text-primary mb-2">2028</p>
              <p className="text-2xl font-semibold mb-2">$40 Billion</p>
              <p className="text-lg">{t("marketFuture")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">1999</p>
              <p className="text-lg font-medium">{t("statExperience")}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">2022</p>
              <p className="text-lg font-medium">{t("statFounded")}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">20+</p>
              <p className="text-lg font-medium">{t("statCountries")}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-lg font-medium">{t("statDedication")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12 rounded-xl text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t("ctaTitle")}</h2>
              <p className="text-xl mb-8">{t("ctaDescription")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">{t("ctaButton1")}</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white" asChild>
                  <Link href="/services">{t("ctaButton2")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
