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
    pageName: "services/warehousing-solutions",
    titleEn: "Warehousing Solutions | Najem Aleen Shipping",
    titleAr: "حلول التخزين | نجم الين للشحن",
    descriptionEn: "Secure storage facilities in Dubai offering short and long-term options, including general warehousing, temperature-controlled storage, and high-value cargo security.",
    descriptionAr: "مرافق تخزين آمنة في دبي توفر خيارات قصيرة وطويلة الأجل، بما في ذلك التخزين العام، والتخزين المتحكم في درجة الحرارة، وأمان البضائع ذات القيمة العالية",
  });
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