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
      ? "نقل السيارات | نجم الين للشحن"
      : "Car Transportation | Najem Aleen Shipping",
    description: isArabic
      ? "خدمات متخصصة في شحن السيارات للتصدير والاستيراد من وإلى جميع إمارات الإمارات العربية المتحدة، مع توثيق كامل وتخليص جمركي ونقل آمن"
      : "Specialized vehicle shipping services for exporting and importing cars to and from all UAE emirates, including Dubai, Abu Dhabi, and Sharjah, with full documentation, customs clearance, and secure transportation.",
    alternates: {
      canonical: `/${params.locale}/services/car-transportation`,
      languages: {
        'en': '/en/services/car-transportation',
        'ar': '/ar/services/car-transportation',
      },
    },
  };
}

export default function CarTransportationPage({ params }: Props) {
  return (
    <>
      <ServiceSchema serviceKey="carTransportation" locale={params.locale} />
      <ServiceContent 
        serviceKey="carTransportation"
        imagePath="/images/services/car-transportation.jpg"
        locale={params.locale}
      />
    </>
  );
}