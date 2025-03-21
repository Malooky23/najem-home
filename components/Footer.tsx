import { useTranslations } from "next-intl"
import {Link} from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="border-t bg-gradient-to-b from-blue-50 to-white">
      <div className="container flex h-16 items-center justify-center">
        <p className=" text-sm text-muted-foreground text-center">{t("copyright")}</p>
        {/* <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-secondary">
            {t("privacyPolicy")}
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-secondary">
            {t("termsOfService")}
          </Link> */}
        {/* </nav> */}
      </div>
    </footer>
  )
}

// import { useTranslations } from "next-intl"
// import {Link} from '@/i18n/routing';

// export default function Footer() {
//   const t = useTranslations("Footer")

//   const serviceLinks = [
//     { labelKey: "containerShippingTitle", href: "/services/container-shipping" },
//     { labelKey: "freightForwardingTitle", href: "/services/freight-forwarding" },
//     { labelKey: "customsClearanceTitle", href: "/services/customs-clearance" },
//     { labelKey: "carTransportationTitle", href: "/services/car-transportation" },
//     { labelKey: "packagingRepackagingTitle", href: "/services/packaging-repackaging" },
//     { labelKey: "warehousingSolutionsTitle", href: "/services/warehousing-solutions" },
//   ];


//   return (
//     <footer className="border-t bg-gradient-to-b from-blue-50 to-white">
//       <div className="container flex flex-col md:flex-row h-auto md:h-16 items-center justify-center md:justify-between py-4 md:py-0">
//         <p className=" text-sm text-muted-foreground text-center md:text-left">{t("copyright")}</p>
//         <nav className="hidden md:flex gap-4 sm:gap-6">
//           {serviceLinks.map((serviceLink) => (
//             <Link 
//               key={serviceLink.href} 
//               href={serviceLink.href} 
//               className="text-sm text-muted-foreground hover:text-secondary"
//             >
//               {t(`Services.${serviceLink.labelKey}`)} {/* Use Services. prefix for service titles */}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </footer>
//   )
// }
