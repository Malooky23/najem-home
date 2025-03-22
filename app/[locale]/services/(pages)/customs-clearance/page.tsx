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
      ? "التخليص الجمركي | نجم الين للشحن"
      : "Customs Clearance | Najem Aleen Shipping",
    description: isArabic
      ? "حلول شاملة للتخليص الجمركي في موانئ ومطارات دبي وأبوظبي والشارقة، مع إدارة الوثائق وتقييم الرسوم وضمان الامتثال التنظيمي"
      : "Comprehensive customs clearance solutions for ports and airports in Dubai, Abu Dhabi, and Sharjah, managing documentation, duty assessments, and ensuring regulatory compliance.",
    alternates: {
      canonical: `/${params.locale}/services/customs-clearance`,
      languages: {
        'en': '/en/services/customs-clearance',
        'ar': '/ar/services/customs-clearance',
      },
    },
  };
}

export default function CustomsClearancePage({ params }: Props) {
  return (
    <>
      <ServiceSchema serviceKey="customsClearance" locale={params.locale} />
      <ServiceContent 
        serviceKey="customsClearance"
        imagePath="/images/services/customs-clearance.jpg"
        locale={params.locale}
      />
    </>
  );
}