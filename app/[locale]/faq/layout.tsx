import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params }: { params: { locale: string }}): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  
  return {
    title: isArabic 
      ? "الأسئلة الشائعة | نجم العين للشحن"
      : "Frequently Asked Questions | Najem Aleen Shipping",
    description: isArabic
      ? "إجابات على الأسئلة الشائعة حول خدمات الشحن والخدمات اللوجستية التي تقدمها نجم العين للشحن في الإمارات العربية المتحدة"
      : "Find answers to commonly asked questions about our shipping and logistics services in the UAE, including customs clearance, freight forwarding, and more.",
  };
}

export default function FAQLayout({ children, params }: Props) {
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
