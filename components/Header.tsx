"use client";

import { useTranslations } from "next-intl"
import { usePathname, useParams } from "next/navigation" 
import Image from "next/image"
import { Link } from '@/i18n/routing';
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./LanguageSwitcher"
import MobileNav from "./MobileNav";

export default function Header() {
  const t = useTranslations("Header")
  const s = useTranslations("Services")
  
  // Get pathname and locale directly from client hooks
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string || 'en';
  
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
        { label: "packagingRepackaging", href: "/services/packaging-repackaging", title: s("packagingRepackaging.Title") },
        { label: "warehousingSolutions", href: "/services/warehousing-solutions", title: s("warehousingSolutions.Title") },
      ],
    },
    { label: "contact", href: "/contact" },
    { label: "faq", href: "/faq" },
  ];

  // Pre-translate all navigation items for passing to client component
  const translatedNavItems = navigationItems.map(item => ({
    ...item,
    translatedLabel: t(item.label)
  }));

  const isActive = (href: string) => {
    if (!pathname) return false;
    
    // Clean up pathname for comparison
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    
    // Special case for home page - exact match only
    if (href === '/') {
      return normalizedPathname === `/${currentLocale}` || 
             normalizedPathname === '' || 
             normalizedPathname === '/';
    }
    
    // For other pages, check if the pathname starts with the href
    // But make sure we're checking at path boundaries to avoid partial matches
    const localizedHref = `/${currentLocale}${href}`;
    return normalizedPathname === localizedHref || 
           (normalizedPathname.startsWith(localizedHref) && 
            (normalizedPathname.length === localizedHref.length || 
             normalizedPathname[localizedHref.length] === '/'));
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/najem_favicon.png"
              alt={t("logoAlt")}
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex">
            {navigationItems.map((item) => (
              item.isDropdown ? ( 
                // Dropdown menu for desktop
                <div key={item.label} className="relative group">
                  <Link 
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center group ${
                      isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {t(item.label)}
                    <svg 
                      className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
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
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-muted ${
                            isActive(dropdownItem.href) ? 'text-primary font-medium' : 'text-foreground'
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
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {t(item.label)}
                </Link>
              )
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          <Link href='/contact' className="hidden md:inline-flex">
            <Button className="bg-secondary hover:bg-secondary/80">{t("getQuote")}</Button>
          </Link>
          
          <Link href='https://app.malekdarwish.com/login'>
            <Button className="bg-primary hover:bg-primary/80">{t("login")}</Button>
          </Link>
          
          {/* Mobile Navigation - move to client component */}
          <MobileNav 
            navigationItems={translatedNavItems}
            getQuoteLabel={t("getQuote")}
            pathname={pathname}
            currentLocale={currentLocale}
          />
        </div>
      </div>
    </header>
  )
}
