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
      ? "حلول التخزين | نجم العين للشحن"
      : "Warehousing Solutions | Najem Aleen Shipping",
    description: isArabic
      ? "مرافق تخزين آمنة في دبي توفر خيارات قصيرة وطويلة الأجل، بما في ذلك التخزين العام، والتخزين المتحكم في درجة الحرارة، وأمان البضائع ذات القيمة العالية"
      : "Secure storage facilities in Dubai offering short and long-term options, including general warehousing, temperature-controlled storage, and high-value cargo security.",
    alternates: {
      canonical: `/${params.locale}/services/warehousing-solutions`,
      languages: {
        'en': '/en/services/warehousing-solutions',
        'ar': '/ar/services/warehousing-solutions',
      },
    },
  };
}

export default function WarehousingPage({ params }: Props) {
  return (
    <div className="flex min-h-screen flex-col">

        <ServiceSchema serviceKey="warehousingSolutions" locale={params.locale} />
        <ServiceContent 
          serviceKey="warehousingSolutions"
          imagePath="/images/services/warehousing-solutions.jpg"
          locale={params.locale}
        />

    </div>
  );
}