// "use client";

// import { useTranslations } from "next-intl";
// import { useParams, usePathname } from "next/navigation";
// import Image from "next/image";
// import { Link } from '@/i18n/routing';
// import { Button } from "@/components/ui/button";
// import LanguageSwitcher from "./LanguageSwitcher";
// import MobileNav from "./MobileNav";
// import { useIsActive } from "@/lib/hooks/useIsActive"; // Import useIsActive hook

// export default function Header() {
//   const t = useTranslations("Header");
//   const s = useTranslations("Services");

//   // Get pathname and locale directly from client hooks
//   const pathname = usePathname();
//   const params = useParams();
//   const currentLocale = params.locale as string || 'en';


//   // Navigation items with proper page routes
//   const navigationItems = [
//     { label: "home", href: "/" },
//     { label: "about", href: "/about" },
//     {
//       label: "services",
//       href: "/services",
//       isDropdown: true,
//       dropdownItems: [
//         { label: "containerShipping", href: "/services/container-shipping", title: s("containerShipping.Title") },
//         { label: "freightForwarding", href: "/services/freight-forwarding", title: s("freightForwarding.Title") },
//         { label: "customsClearance", href: "/services/customs-clearance", title: s("customsClearance.Title") },
//         { label: "carTransportation", href: "/services/car-transportation", title: s("carTransportation.Title") },
//         { label: "packagingRepackaging", href: "/services/packaging-repackaging", title: s("packagingRepackaging.Title") },
//         { label: "warehousingSolutions", href: "/services/warehousing-solutions", title: s("warehousingSolutions.Title") },
//         { label: "logisticsConsulting", href: "/services/logistics-consultation", title: s("logisticsConsulting.Title") },
//         { label: "shippingToSyria", href: "/services/shipping-to-syria", title: s("shippingToSyria.Title") },
//       ],
//     },
//     { label: "contact", href: "/contact" },
//     { label: "faq", href: "/faq" },
//   ];

//   // Pre-translate all navigation items for passing to client component
//   const translatedNavItems = navigationItems.map(item => ({
//     ...item,
//     translatedLabel: t(item.label)
//   }));

//   // Use the shared useIsActive hook
//   const isActive = useIsActive;

//   return (
//     <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-8">
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src="/najem_favicon.png"
//               alt={t("logoAlt")}
//               width={180}
//               height={50}
//               className="h-10 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden gap-6 md:flex">
//             {navigationItems.map((item) => (
//               item.isDropdown ? (
//                 // Dropdown menu for desktop
//                 <div key={item.label} className="relative group">
//                   <Link
//                     href={item.href}
//                     className={`text-sm font-medium transition-colors hover:text-primary flex items-center group ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground' // Correct usage: Pass item.href to isActive
//                       }`}
//                   >
//                     {t(item.label)}
//                     <svg
//                       className="mx-1 h-4 w-4 transition-transform group-hover:rotate-180"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <polyline points="6 9 12 15 18 9"></polyline>
//                     </svg>
//                   </Link>
//                   <div className="absolute left-0 hidden pt-2 group-hover:block z-10">
//                     <div className="bg-card rounded-md shadow-md border border-border py-2 w-64">
//                       {item.dropdownItems.map((dropdownItem) => (
//                         <Link
//                           key={dropdownItem.label}
//                           href={dropdownItem.href}
//                           className={`block px-4 py-2 text-sm transition-colors hover:bg-muted ${isActive(dropdownItem.href) ? 'text-primary font-medium' : 'text-foreground' // Correct usage: Pass dropdownItem.href
//                             }`}
//                         >
//                           {dropdownItem.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Regular nav link for desktop
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground' // Correct usage: Pass item.href
//                     }`}
//                 >
//                   {t(item.label)}
//                 </Link>
//               )
//             ))}
//           </nav>
//         </div>

//         <div className="flex items-center gap-2 sm:gap-4">
//           <LanguageSwitcher />

//           {/* Only show Get Quote button on desktop */}
//           <Link href='/contact' className="hidden md:inline-flex">
//             <Button className="bg-secondary hover:bg-secondary/80">{t("getQuote")}</Button>
//           </Link>

//           {/* Only show Login button on desktop */}
//           <Link href='https://app.najemaleen.com/' className="hidden md:inline-flex">
//             <Button className="bg-primary hover:bg-primary/80">{t("login")}</Button>
//           </Link>

//           {/* Mobile Navigation - move to client component */}
//           <MobileNav
//             navigationItems={translatedNavItems}
//             getQuoteLabel={t("getQuote")}
//             getLoginInLabel={t("login")}
//             pathname={pathname} // Pass pathname prop to MobileNav - CORRECTED (already present, re-confirming)
//             currentLocale={currentLocale}
//           />
//         </div>
//       </div>
//     </header>
//   )
// }
"use client"

import { useTranslations } from "next-intl"
import { useParams, usePathname } from "next/navigation"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./LanguageSwitcher"
import MobileNav from "./MobileNav"
import { useIsActive } from "@/lib/hooks/useIsActive" // Import useIsActive hook
import { useState } from "react"
import { Menu } from "lucide-react"

export default function Header() {
  const t = useTranslations("Header")
  const s = useTranslations("Services")

  // Get pathname and locale directly from client hooks
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = (params.locale as string) || "en"

  // Navigation items with proper page routes
  const navigationItems = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    {
      label: "services",
      href: "/services",
      isDropdown: true,
      dropdownItems: [
        { label: "containerShipping", href: "/services/container-shipping", title: s("containerShipping.Title") },
        { label: "freightForwarding", href: "/services/freight-forwarding", title: s("freightForwarding.Title") },
        { label: "customsClearance", href: "/services/customs-clearance", title: s("customsClearance.Title") },
        { label: "carTransportation", href: "/services/car-transportation", title: s("carTransportation.Title") },
        {
          label: "packagingRepackaging",
          href: "/services/packaging-repackaging",
          title: s("packagingRepackaging.Title"),
        },
        {
          label: "warehousingSolutions",
          href: "/services/warehousing-solutions",
          title: s("warehousingSolutions.Title"),
        },
        {
          label: "logisticsConsulting",
          href: "/services/logistics-consultation",
          title: s("logisticsConsulting.Title"),
        },
        { label: "shippingToSyria", href: "/services/shipping-to-syria", title: s("shippingToSyria.Title") },
      ],
    },
    { label: "contact", href: "/contact" },
    { label: "faq", href: "/faq" },
  ]

  // Pre-translate all navigation items for passing to client component
  const translatedNavItems = navigationItems.map((item) => ({
    ...item,
    translatedLabel: t(item.label),
  }))

  // Use the shared useIsActive hook
  const isActive = useIsActive
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image src="/name_banner.png" alt={t("logoAlt")} width={180} height={50} className="h-10 w-auto" />
            {/* <Image src="/android-chrome-512x512.png" alt={t("logoAlt")} width={180} height={50} className="h-10 w-auto" /> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex">
            {navigationItems.map((item) =>
              item.isDropdown ? (
                // Dropdown menu for desktop
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center group ${isActive(item.href) ? "text-primary" : "text-muted-foreground" // Correct usage: Pass item.href to isActive
                      }`}
                  >
                    {t(item.label)}
                    <svg
                      className="mx-1 h-4 w-4 transition-transform group-hover:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </Link>
                  <div className="absolute left-0 hidden pt-2 group-hover:block z-10">
                    <div className="bg-card rounded-md shadow-md border border-border py-2 w-64">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-muted ${isActive(dropdownItem.href) ? "text-primary font-medium" : "text-foreground" // Correct usage: Pass dropdownItem.href
                            }`}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Regular nav link for desktop
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground" // Correct usage: Pass item.href
                    }`}
                >
                  {t(item.label)}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />

          {/* Only show Get Quote button on desktop */}
          <Link href="/contact" className="hidden md:inline-flex">
            <Button className="bg-secondary hover:bg-secondary/80">{t("getQuote")}</Button>
          </Link>

          {/* Only show Login button on desktop */}
          <Link href="https://app.najemaleen.com/" className="hidden md:inline-flex">
            <Button className="bg-primary hover:bg-primary/80">{t("login")}</Button>
          </Link>

          {/* Mobile menu toggle button only */}
          <div className="md:hidden">
            <button
              className="p-2 -mx-2 text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - moved outside container */}
      <MobileNav
        navigationItems={translatedNavItems}
        getQuoteLabel={t("getQuote")}
        getLoginInLabel={t("login")}
        pathname={pathname}
        currentLocale={currentLocale}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />
    </header>
  )
}

