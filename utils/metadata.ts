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
      url: `https://najemaleen.com/${locale}/${pageName}`,
    },
    twitter: {
      title,
      description,
    }
  };
}
