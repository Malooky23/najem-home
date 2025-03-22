import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generatePageMetadata({
    locale: params.locale,
    pageName: "faq",
    titleEn: "Frequently Asked Questions | Najem Aleen Shipping",
    titleAr: "الأسئلة الشائعة | نجم الين للشحن",
    descriptionEn: "Find answers to commonly asked questions about our shipping, customs clearance, and logistics services in Dubai and the UAE.",
    descriptionAr: "إجابات على الأسئلة الشائعة حول خدمات الشحن والتخليص الجمركي والخدمات اللوجستية في دبي والإمارات العربية المتحدة.",
  });
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
