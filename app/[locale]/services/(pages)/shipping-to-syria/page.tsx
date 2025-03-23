import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/metadata";
import ShippingToSyriaContent from "./ShippingToSyriaContent";
import ServiceSchema from "../../components/ServiceSchema";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generatePageMetadata({
    locale: params.locale,
    pageName: "services/shipping-to-syria",
    titleEn: "Shipping to Syria | Najem Aleen Shipping",
    titleAr: "الشحن إلى سوريا | نجم الين للشحن",
    descriptionEn: "Comprehensive shipping services to Syria from the UAE. Reliable, secure, and efficient logistics solutions for your shipments.",
    descriptionAr: "خدمات شحن شاملة إلى سوريا من الإمارات العربية المتحدة. حلول لوجستية موثوقة وآمنة وفعالة لشحناتك.",
  });
}

export default function ShippingToSyriaPage({ params }: Props) {

  return (
    <>
      <ServiceSchema serviceKey="shippingToSyria" locale={params.locale} />
      <ShippingToSyriaContent imagePath="/path/to/hero/image.jpg" locale={params.locale} />
    </>
  );
}
