import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params }: { params: { locale: string }}): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  
  return {
    title: isArabic 
      ? "خدماتنا | نجم العين للشحن"
      : "Our Services | Najem Aleen Shipping",
    description: isArabic
      ? "استكشف مجموعة خدماتنا الشاملة بما في ذلك شحن الحاويات والتخليص الجمركي وإدارة سلسلة التوريد للشركات في الإمارات العربية المتحدة"
      : "Explore our comprehensive range of services including container shipping, customs clearance, and supply chain management for businesses across the UAE.",
  };
}

export default function ServicesLayout({ children, params }: Props) {
  return (
<div className="flex min-h-screen flex-col bg-background">
      {/* <Header /> */}
      <main className="flex-1 bg-background">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
