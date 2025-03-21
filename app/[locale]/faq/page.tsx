import { useTranslations } from "next-intl";
import { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  
  return {
    alternates: {
      canonical: `/${params.locale}/faq`,
      languages: {
        'en': '/en/faq',
        'ar': '/ar/faq',
      },
    },
  };
}

export default function FAQPage({ params }: Props) {
  const t = useTranslations("FAQ");
  
  return (
    <div className="bg-background">
      <div className="container py-8 md:py-12">
        <Breadcrumbs 
          items={[
            { label: t("title") }
          ]}
          className="mb-6"
        />
        
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl gradient-heading mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("description") || "Find answers to commonly asked questions about our shipping and logistics services."}
          </p>
        </div>
        
        {/* Reuse the existing FAQSection component but with fullWidth prop */}
        <FAQSection fullWidth />
      </div>
    </div>
  );
}
