import type { Metadata } from "next";

type MetadataParams = {
  locale: string;
  pageName: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
};

export function generatePageMetadata({
  locale,
  pageName,
  titleEn,
  titleAr,
  descriptionEn,
  descriptionAr,
}: MetadataParams): Metadata {
  const isArabic = locale === 'ar';
  
  const title = isArabic ? titleAr : titleEn;
  const description = isArabic ? descriptionAr : descriptionEn;
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/${pageName}`,
      languages: {
        'en': `/en/${pageName}`,
        'ar': `/ar/${pageName}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.najemaleen.com/${locale}/${pageName}`,
    },
    twitter: {
      title,
      description,
    }
  };
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider: {
    "@type": string;
    name: string;
    telephone: string;
    email: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
}

export function generateServiceSchema(props: ServiceSchemaProps) {
    const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": props.name,
    "description": props.description,
    "provider": {
      "@type": props.provider["@type"],
      "name": props.provider.name,
      "telephone": props.provider.telephone,
      "email": props.provider.email,
      "address": {
        "@type": props.provider.address["@type"],
        "streetAddress": props.provider.address.streetAddress,
        "addressLocality": props.provider.address.addressLocality,
        "addressRegion": props.provider.address.addressRegion,
        "postalCode": props.provider.address.postalCode,
        "addressCountry": props.provider.address.addressCountry
      }
    },
    "serviceType": props.serviceType,
  };

  return JSON.stringify(schemaData);
}
