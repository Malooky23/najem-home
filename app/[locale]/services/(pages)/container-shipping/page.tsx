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
      ? "شحن الحاويات | نجم العين للشحن"
      : "Container Shipping | Najem Aleen Shipping",
    description: isArabic
      ? "خدمات شحن الحاويات الفعالة للشركات ذات احتياجات الخدمات اللوجستية واسعة النطاق في جميع أنحاء الإمارات العربية المتحدة"
      : "Efficient container shipping services for businesses with large-scale logistics needs throughout the UAE, including Dubai, Abu Dhabi, and Sharjah, as well as international destinations.",
    alternates: {
      canonical: `/${params.locale}/services/container-shipping`,
      languages: {
        'en': '/en/services/container-shipping',
        'ar': '/ar/services/container-shipping',
      },
    },
  };
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