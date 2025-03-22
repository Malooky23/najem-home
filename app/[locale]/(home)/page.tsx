import { useTranslations } from "next-intl"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import ServicesSection from "@/components/ServicesSection"
import ContactSection from "./components/ContactSection"
import FAQSection from "@/components/FAQSection"
import {Link} from '@/i18n/routing';
import { Button } from "@/components/ui/button"
import { Ship } from "lucide-react"
import { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import { generatePageMetadata } from "@/utils/metadata"

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generatePageMetadata({
    locale: params.locale,
    pageName: "",
    titleEn: "Najem Aleen Shipping | Customs Clearance & Logistics Services",
    titleAr: "نجم الين للشحن | خدمات التخليص الجمركي والخدمات اللوجستية",
    descriptionEn: "Providing expert customs clearance, freight forwarding, and logistics solutions in Dubai and across the UAE since 2022.",
    descriptionAr: "تقديم خدمات متخصصة في التخليص الجمركي والشحن والخدمات اللوجستية في دبي وجميع أنحاء الإمارات العربية المتحدة منذ عام 2022.",
  });
}

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col min-h-screen">

      
      <main className="flex-1 overflow-hidden">
        <div className="gradient-sections-container relative">
          <HeroSection />
          <ServicesSection />
          <ContactSection />
          <FAQSection />
        </div>
      </main>
      

    </div>
  );
}

