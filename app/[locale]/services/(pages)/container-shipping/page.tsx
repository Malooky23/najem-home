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
    pageName: "services/container-shipping",
    titleEn: "Container Shipping | Najem Aleen Shipping",
    titleAr: "شحن الحاويات | نجم الين للشحن",
    descriptionEn: "Efficient container shipping services for businesses with large-scale logistics needs throughout the UAE, including Dubai, Abu Dhabi, and Sharjah, as well as international destinations.",
    descriptionAr: "خدمات شحن الحاويات الفعالة للشركات ذات احتياجات الخدمات اللوجستية واسعة النطاق في جميع أنحاء الإمارات العربية المتحدة",
  });
}

export default function ContainerShippingPage({ params }: Props) {
  return (
    <>
      <ServiceSchema serviceKey="containerShipping" locale={params.locale} />
      <ServiceContent 
        serviceKey="containerShipping"
        imagePath="/images/services/container-shipping.jpg"
        locale={params.locale}
      />
    </>
  );
}