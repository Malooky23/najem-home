// import { useTranslations } from "next-intl"
// import Header from "@/components/Header"
// import Footer from "@/components/Footer"
// import HeroSection from "@/components/HeroSection"
// import ServicesSection from "@/components/ServicesSection"
// import ContactSection from "@/components/ContactSection"
// import FAQSection from "@/components/FAQSection"
// import {Link} from '@/i18n/routing';
// import { Button } from "@/components/ui/button"
// import { Ship } from "lucide-react"
// import { Metadata } from "next"

// export async function generateMetadata({ params }: 
//   { params: { locale: string } }): Promise<Metadata> {
//   // You could potentially fetch translations specifically for SEO here
  
//   const isArabic = params.locale === 'ar';
  
//   return {
//     title: isArabic 
//       ? "نجم العين للشحن | خدمات لوجستية شاملة في الإمارات العربية المتحدة"
//       : "Najem Aleen Shipping | Comprehensive Logistics Services in UAE",
//     description: isArabic
//       ? "حلول خبيرة في شحن الحاويات والتخليص الجمركي للشركات في الإمارات العربية المتحدة بما في ذلك دبي، أبوظبي، والشارقة"
//       : "Expert container shipping, freight forwarding, and customs clearance solutions for businesses across all emirates of the UAE including Dubai, Abu Dhabi, and Sharjah",
//     alternates: {
//       canonical: `/${params.locale}`,
//       languages: {
//         'en': '/en',
//         'ar': '/ar',
//       },
//     },
//     openGraph: {
//       locale: params.locale === 'ar' ? 'ar_AE' : 'en_US',
//     }
//   }
// }

// export default function Home() {
//   const t = useTranslations("Index");

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
      
//       <main className="flex-1">
//         <HeroSection />
//         <ServicesSection />
//         <ContactSection />
//         <FAQSection />
//       </main>
      
//       <Footer />
//     </div>
//   );
// }

