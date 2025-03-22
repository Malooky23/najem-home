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
    pageName: "services/freight-forwarding",
    titleEn: "Freight Forwarding Services | Najem Aleen Shipping",
    titleAr: "خدمات الشحن والنقل | نجم الين للشحن",
    descriptionEn: "Efficient freight forwarding solutions for air, sea, and land transportation. Let us handle your cargo with expertise and care.",
    descriptionAr: "حلول فعالة للشحن والنقل الجوي والبحري والبري. دعنا نتعامل مع شحنتك بخبرة واهتمام.",
  });
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