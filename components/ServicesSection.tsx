import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Container, ShipForward, CustomsClearance, CarTransport } from "@/components/Icons"

export default function ServicesSection() {
  const t = useTranslations("Index")

  const services = [
    { icon: Container, key: "containerShipping" },
    { icon: ShipForward, key: "freightForwarding" },
    { icon: CustomsClearance, key: "customsClearance" },
    { icon: CarTransport, key: "carTransportation" },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-32" id="services">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter text-primary md:text-5xl lg:leading-[1.1]">
          {t("servicesTitle")}
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">{t("servicesDescription")}</p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <CardContent className="relative p-6 flex justify-center">
              <div className="space-y-4 flex flex-col justify-center text-center">
                <div className="max-w-[50%] mx-auto  flex justify-center items-center">
                  <service.icon className="h-24 w-24 text-secondary" />
                </div>

                <h3 className="text-xl font-bold text-primary">{t(`${service.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground text-left">{t(`${service.key}.description`)}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

