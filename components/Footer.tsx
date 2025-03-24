import { useTranslations } from "next-intl"
import { Link } from '@/i18n/routing';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const t = useTranslations("Footer")
  const serviceT = useTranslations("Services")

  const serviceLinks = [
    { labelKey: "containerShipping", href: "/services/container-shipping" },
    { labelKey: "shippingToSyria", href: "/services/shipping-to-syria" },
    { labelKey: "freightForwarding", href: "/services/freight-forwarding" },
    { labelKey: "customsClearance", href: "/services/customs-clearance" },
    { labelKey: "carTransportation", href: "/services/car-transportation" },
    { labelKey: "packagingRepackaging", href: "/services/packaging-repackaging" },
    { labelKey: "warehousingSolutions", href: "/services/warehousing-solutions" },
  ];

  const quickLinks = [
    { labelKey: "about", href: "/about" },
    { labelKey: "contact", href: "/contact" },
    { labelKey: "faq", href: "/faq" },
    // { labelKey: "quote", href: "/quote" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("companyName")}</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {t("companyDescription")}
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div> */}
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("servicesTitle")}</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((serviceLink) => (
                <li key={serviceLink.href}>
                  <Link 
                    href={serviceLink.href} 
                    className="text-muted-foreground hover:text-primary"
                  >
                    {serviceT(`${serviceLink.labelKey}.Title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/shipping-to-syria" className="text-muted-foreground hover:text-primary">
                  {t("shippingToSyria")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("contactUs")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{t("address")}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                  {t("phone")}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <Link href="mailto:info@example.com" className="text-muted-foreground hover:text-primary">
                  {t("email")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6">
          {/* <p className="text-center text-sm text-muted-foreground">
            {t("copyright").replace("{year}", new Date().getFullYear().toString())}
          </p> */}
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("companyName")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
