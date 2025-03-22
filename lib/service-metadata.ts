import { getTranslations } from 'next-intl/server'; // Import getTranslations
import { Metadata } from 'next';

export async function generateServiceMetadata(locale: string, translationKey: string): Promise<Metadata> {
  const t = await getTranslations('Services'); // Use getTranslations with ONLY namespace
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? `${t(`${translationKey}Title`)} | نجم الين للشحن`
      : `${t(`${translationKey}Title`)} | Najem Aleen Shipping`,
    description: isArabic
      ? t(`${translationKey}Description`) 
      : t(`${translationKey}Description`),
  };
}