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
    pageName: "services/packaging-repackaging",
    titleEn: "Packaging & Repackaging | Najem Aleen Shipping",
    titleAr: "التعبئة وإعادة التعبئة | نجم الين للشحن",
    descriptionEn: "Professional packing services for fragile items, retail packaging, and shipment consolidation, using specialized materials and techniques for safe transit.",
    descriptionAr: "خدمات تعبئة احترافية للعناصر الهشة، وتعبئة التجزئة، وتجميع الشحنات، باستخدام مواد وتقنيات متخصصة للنقل الآمن",
  });
}

export default function PackagingRepackagingPage({ params }: Props) {
  return (
    <>
      <ServiceSchema serviceKey="packagingRepackaging" locale={params.locale} />
      <ServiceContent 
        serviceKey="packagingRepackaging"
        imagePath="/images/services/packaging-repackaging.jpg"
        locale={params.locale}
      />
    </>
  );
}