



import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { WhatsApp } from "./Icons";
import { Link } from "@/i18n/routing";
import './icon.css'
export default function ContactSection() {
  const t = useTranslations("Index")

  const contactMethods = [
    {
      icon: Phone,
      key: "call",
      labelKey: "callNow",
      descriptionKey: "callAvailability",
      // Using direct color classes for consistency
      gradient: "bg-gradient-to-r from-blue-600/5 via-blue-600/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-blue-600/25 via-blue-600/15 to-transparent",
      borderColor: "border-blue-600/30",
      hoverBorderColor: "border-blue-600/80",
      iconColor: "text-blue-600",
      textColor: "text-blue-600",
      iconHoverColor: "group-hover:text-blue-700",
      shadowHover: "group-hover:shadow-md group-hover:shadow-blue-600/20",
      link: 'tel:+97142579791'
    },
    {
      icon: WhatsApp,
      key: "whatsApp",
      labelKey: "whatsAppNow",
      descriptionKey: "whatsAppAvailability",
      gradient: "bg-gradient-to-r from-green-500/5 via-green-500/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-green-500/25 via-green-500/15 to-transparent",
      borderColor: "border-green-500/30",
      hoverBorderColor: "border-green-500/80",
      iconColor: "text-green-500",
      textColor: "text-green-500",
      iconHoverColor: "group-hover:text-green-600",
      shadowHover: "group-hover:shadow-md group-hover:shadow-green-500/20",
      link: 'https://wa.me/971549968485'
    },
    {
      icon: MapPin,
      key: "maps",
      labelKey: "mapsNow",
      descriptionKey: "mapsAvailability",
      gradient: "bg-gradient-to-r from-blue-500/5 via-blue-500/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-blue-500/25 via-blue-500/15 to-transparent",
      borderColor: "border-blue-500/30",
      hoverBorderColor: "border-blue-500/80",
      iconColor: "text-blue-500",
      textColor: "text-blue-500",
      iconHoverColor: "group-hover:text-blue-600",
      shadowHover: "group-hover:shadow-md group-hover:shadow-blue-500/20",
      link: 'https://maps.app.goo.gl/e65KNCL1kUMD9NzU7'
    },
    {
      icon: Mail,
      key: "email",
      labelKey: "emailNow",
      descriptionKey: "emailAddress",
      gradient: "bg-gradient-to-r from-amber-500/5 via-amber-500/3 to-transparent",
      hoverGradient: "bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent",
      borderColor: "border-amber-500/30",
      hoverBorderColor: "border-amber-500/80",
      iconColor: "text-amber-500",
      textColor: "text-amber-500",
      iconHoverColor: "group-hover:text-amber-600",
      shadowHover: "group-hover:shadow-md group-hover:shadow-amber-500/20",
      link: 'mail:sales@najemaleen.com'
    },
  ];

  return (
    <section className="border-t bg-gradient-to-b from-white to-blue-50" id="contact">
      <div className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-blue-600 md:text-5xl lg:leading-[1.1]">
            {t("contactTitle")}
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("contactDescription")}</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
          {contactMethods.map((method) => (

            <Button
              key={method.key}
              size="lg"
              className={`group relative h-auto overflow-hidden border ${method.borderColor} p-6 transition-all duration-300 ease-in-out hover:${method.hoverBorderColor} ${method.shadowHover} hover:translate-y-[-2px]`}
              variant="outline"
            >
              <Link href={method.link} target="_blank" >

                <div
                  className={`absolute inset-0 transition-all duration-300 ${method.gradient} group-hover:${method.hoverGradient}`}
                />
                <div className="relative flex items-center ">
                  <div className="  mx-2">
                    <method.icon className={` contact-icon   transition-colors duration-300 ${method.iconColor} ${method.iconHoverColor}`} />
                  </div>
                  <div className="">
                    <span className={`text-lg font-semibold block transition-colors duration-300 ${method.textColor} ${method.iconHoverColor}`}>
                      {t(method.labelKey)}
                    </span>
                    <span className="text-sm text-muted-foreground block transition-colors duration-300 group-hover:text-current/70">
                      {t(method.descriptionKey)}
                    </span>
                  </div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}