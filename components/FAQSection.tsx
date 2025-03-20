import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  // List of FAQ keys to display
  const faqKeys = [
    "shipping_process",
    "customs_clearance",
    "shipping_quote",
    "car_shipping",
    "repacking_services",
    "warehousing_solutions",
    "shipment_tracking",
    "shipping_insurance",
    "types_of_goods",
  ];
  
  // Create FAQs array on the server
  const faqs = faqKeys.map(key => ({
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`)
  }));

  // Prepare the JSON-LD data on the server
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-primary ${isRTL ? 'font-cairo' : ''}`}>
          {t("title")}
        </h2>
        
        <div className={`max-w-3xl mx-auto ${isRTL ? 'rtl:space-y-6' : ''}`}>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

        {/* Schema markup for FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchemaData)
          }}
        />
      </div>
    </section>
  );
}
