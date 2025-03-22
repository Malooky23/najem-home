import ServiceContent from "../../components/ServiceContent";
import ServiceSchema from "../../components/ServiceSchema";
import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generatePageMetadata({
    locale: params.locale,
    pageName: "services/logistics-consultation",
    titleEn: "Logistics Consultation | Najem Aleen Shipping",
    titleAr: "استشارات الخدمات اللوجستية | نجم الين للشحن",
    descriptionEn: "Expert advice on optimizing your logistics and supply chain operations for businesses throughout the UAE.",
    descriptionAr: "خدمات استشارية متخصصة لتحسين عمليات سلسلة التوريد والخدمات اللوجستية للشركات في الإمارات العربية المتحدة",
  });
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
