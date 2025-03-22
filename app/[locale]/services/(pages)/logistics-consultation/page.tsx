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
      ? "استشارات الخدمات اللوجستية | نجم الين للشحن"
      : "Logistics Consultation | Najem Aleen Shipping",
    description: isArabic
      ? "خدمات استشارية متخصصة لتحسين عمليات سلسلة التوريد والخدمات اللوجستية للشركات في الإمارات العربية المتحدة"
      : "Expert advice on optimizing your logistics and supply chain operations for businesses throughout the UAE.",
    alternates: {
      canonical: `/${params.locale}/services/logistics-consultation`,
      languages: {
        'en': '/en/services/logistics-consultation',
        'ar': '/ar/services/logistics-consultation',
      },
    },
  };
}

export default function LogisticsConsultationPage({ params }: Props) {
  return (
    <>
      <ServiceSchema serviceKey="logisticsConsulting" locale={params.locale} />
      <ServiceContent 
        serviceKey="logisticsConsulting"
        imagePath="/images/services/logistics-consulting.jpg"
        locale={params.locale}
      />
    </>
  );
}
