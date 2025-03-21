import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Container, ShipForward, CustomsClearance, CarTransport } from "@/components/Icons"
import {Link} from '@/i18n/routing'; // Import Link
import { PackageCheck, Users2Icon, Warehouse } from "lucide-react";

interface ServicesSectionProps {
  isTitle?: boolean
}

export default function ServicesSection({ isTitle = true }: ServicesSectionProps) {
  const t = useTranslations("Index")

  const services = [
    { icon: Container, key: "containerShipping", href: "/services/container-shipping" },
    { icon: ShipForward, key: "freightForwarding", href: "/services/freight-forwarding" },
    { icon: CustomsClearance, key: "customsClearance", href: "/services/customs-clearance" },
    { icon: CarTransport, key: "carTransportation", href: "/services/car-transportation" },
    { icon: PackageCheck, key: "packagingRepackaging", href: "/services/packaging-repackaging" }, // Added packaging-repackaging
    { icon: Warehouse, key: "warehousingSolutions", href: "/services/warehousing-solutions" }, // Added warehousing-solutions
    { icon: Users2Icon, key: "logisticsConsulting", href: "/services/warehousing-solutions" }, // Added warehousing-solutions
  ]

  return (
    <section className="relative bg-gradient-services py-12 md:py-24 lg:py-28 section-overlap-top" id="services">
      <div className="container">
        {isTitle && (
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
            {t("servicesTitle")}
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("servicesDescription")}</p>
        </div>)}
        <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link key={index} href={service.href}> {/* Wrap Card with Link and set href */}
              <Card className="group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <CardContent className="relative p-6 flex justify-center">
                  <div className="space-y-4 flex flex-col justify-center text-center">
                    <div className="max-w-[50%] mx-auto  flex justify-center items-center">
                      <service.icon className="h-24 w-24 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{t(`${service.key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground ">{t(`${service.key}.description`)}</p> {/* Updated to use 'Description' */}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
