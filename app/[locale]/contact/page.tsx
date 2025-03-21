import { useTranslations } from "next-intl";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import MapComponent from "./components/MapComponent";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isArabic = params.locale === 'ar';

  return {
    title: isArabic
      ? "اتصل بنا | نجم العين للشحن"
      : "Contact Us | Najem Aleen Shipping",
    description: isArabic
      ? "تواصل مع نجم العين للشحن للحصول على خدمات لوجستية وشحن موثوقة في جميع أنحاء الإمارات العربية المتحدة. استفسر عن خدماتنا في دبي وأبوظبي والشارقة."
      : "Get in touch with Najem Aleen Shipping for reliable logistics and shipping services throughout the UAE. Inquire about our services in Dubai, Abu Dhabi, and Sharjah.",
    alternates: {
      canonical: `/${params.locale}/contact`,
      languages: {
        'en': '/en/contact',
        'ar': '/ar/contact',
      },
    },
  };
}

export default function ContactPage({ params }: Props) {
  const t = useTranslations("Contact");

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50/50 via-blue-50/20 to-transparent pt-2">
        <div className="container">
          {/* <Breadcrumbs 
            items={[
              { label: t("title") }
            ]}
            className="mb-6"
          /> */}

          {/* <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl gradient-heading mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("description")}
            </p>
          </div> */}
        </div>
      </section>

      {/* Adjusted main contact section for sticky behavior */}
      <section className="container py-12 md:py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl gradient-heading mb-6">
                {t("title")}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t("description")}
              </p>
            </div>
            <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">{t("form.title")}</h2>
              <ContactForm locale={params.locale} />
            </div>
          </div>

          <div className="lg:col-span-5  flex h-full items-end pb-4 ">
            <ContactInfo />
          </div>

          {/* <div className="lg:col-span-5 bg-fuchsia-100    ">
            <ContactInfo />
          </div> */}

          {/* Contact Information - now with sticky positioning */}
          {/* <div className="lg:col-span-5  bg-fuchsia-100 ">
            <div className=" bg-red-200 my-auto">
            <ContactInfo />
            </div>
          </div> */}
        </div>
      </section>

      {/* Map Section - Separate from the sticky flow */}
      <section className="container py-12 md:py-16">
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <MapComponent />
        </div>
      </section>
    </div>
  );
}
