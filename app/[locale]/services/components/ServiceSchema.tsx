import { useTranslations } from "next-intl";
import Script from "next/script";

interface ServiceSchemaProps {
  serviceKey: string;
  locale: string;
}

export default function ServiceSchema({ serviceKey, locale }: ServiceSchemaProps) {
  const t = useTranslations(`Services.${serviceKey}`);
  const isArabic = locale === 'ar';
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t("title"),
    "description": t("fullDescription"),
    "provider": {
      "@type": "Organization",
      "name": isArabic ? "نجم العين للشحن" : "Najem Aleen Shipping",
      "url": "https://najemaleen.com"
    },
    "serviceType": t("Title"),
    "areaServed": {
      "@type": "Country",
      "name": isArabic ? "الإمارات العربية المتحدة" : "United Arab Emirates"
    },
    "serviceOutput": t("Description"),
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "AED",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "0",
        "priceCurrency": "AED",
        "description": "Contact for a personalized quote"
      }
    }
  };

  return (
    <Script id={`service-schema-${serviceKey}`} type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  );
}