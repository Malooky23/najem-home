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
      ? "التعبئة وإعادة التعبئة | نجم الين للشحن"
      : "Packaging & Repackaging | Najem Aleen Shipping",
    description: isArabic
      ? "خدمات تعبئة احترافية للعناصر الهشة، وتعبئة التجزئة، وتجميع الشحنات، باستخدام مواد وتقنيات متخصصة للنقل الآمن"
      : "Professional packing services for fragile items, retail packaging, and shipment consolidation, using specialized materials and techniques for safe transit.",
    alternates: {
      canonical: `/${params.locale}/services/packaging-repackaging`,
      languages: {
        'en': '/en/services/packaging-repackaging',
        'ar': '/ar/services/packaging-repackaging',
      },
    },
  };
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