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
    pageName: "services/car-transportation",
    titleEn: "Car Transportation | Najem Aleen Shipping",
    titleAr: "نقل السيارات | نجم الين للشحن",
    descriptionEn: "Specialized vehicle shipping services for exporting and importing cars to and from all UAE emirates, including Dubai, Abu Dhabi, and Sharjah, with full documentation, customs clearance, and secure transportation.",
    descriptionAr: "خدمات متخصصة في شحن السيارات للتصدير والاستيراد من وإلى جميع إمارات الإمارات العربية المتحدة، مع توثيق كامل وتخليص جمركي ونقل آمن",
  });
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