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
    pageName: "services/customs-clearance",
    titleEn: "Customs Clearance Services | Najem Aleen Shipping",
    titleAr: "خدمات التخليص الجمركي | نجم الين للشحن",
    descriptionEn: "Expert customs clearance services in Dubai and the UAE. Navigate complex regulations with our experienced team handling all documentation and procedures.",
    descriptionAr: "خدمات التخليص الجمركي المتخصصة في دبي والإمارات العربية المتحدة. تجاوز اللوائح المعقدة مع فريقنا ذو الخبرة الذي يتعامل مع جميع المستندات والإجراءات.",
  });
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