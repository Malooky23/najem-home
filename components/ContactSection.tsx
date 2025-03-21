import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("Index");

  return (
    <section className="relative bg-gradient-contact py-12 md:py-20 lg:py-28 section-overlap-top border-0 h-[95vh]" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl">
            {t("contactTitle")}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contactDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Phone className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary">{t("callNow")}</h3>
            <p className="text-muted-foreground">{t("callAvailability")}</p>
            <Button asChild variant="outline" className="mt-4 rounded-full">
              <Link href="tel:+97142579791">{t("callNow")}</Link>
            </Button>
          </div>

          {/* ...other contact cards... */}
        </div>
      </div>
    </section>
  );
}