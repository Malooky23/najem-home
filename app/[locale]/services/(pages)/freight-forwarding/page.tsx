import ServiceContent from "../../components/ServiceContent";
import ServiceSchema from "../../components/ServiceSchema";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  
  return {
    title: isArabic 
      ? "خدمات الشحن | نجم الين للشحن"
      : "Freight Forwarding | Najem Aleen Shipping",
    description: isArabic
      ? "خدمات خبيرة في تجميع وإدارة الشحنات للاستيراد والتصدير في جميع إمارات الإمارات العربية المتحدة"
      : "Expert consolidation services for import/export throughout all emirates in the UAE, ensuring efficient handling of your cargo with complete management of logistics operations.",
    alternates: {
      canonical: `/${params.locale}/services/freight-forwarding`,
      languages: {
        'en': '/en/services/freight-forwarding',
        'ar': '/ar/services/freight-forwarding',
      },
    },
  };
}

export default function FreightForwardingPage({ params }: Props) {
  return (
    <>
      <ServiceSchema serviceKey="freightForwarding" locale={params.locale} />
      <ServiceContent 
        serviceKey="freightForwarding"
        imagePath="/images/services/freight-forwarding.jpg"
        locale={params.locale}
      />
    </>
  );
}