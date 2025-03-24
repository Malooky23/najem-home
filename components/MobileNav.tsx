"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { X, ChevronDown, ChevronRight } from "lucide-react"

interface DropdownItem {
  label: string
  href: string
  title?: string
}

interface NavigationItem {
  label: string
  translatedLabel: string
  href: string
  isDropdown?: boolean
  dropdownItems?: DropdownItem[]
}

interface MobileNavProps {
  navigationItems: NavigationItem[]
  getQuoteLabel: string
  getLoginInLabel: string
  pathname: string
  currentLocale?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function MobileNav({
  navigationItems,
  getQuoteLabel,
  getLoginInLabel,
  pathname,
  currentLocale = "en",
  isOpen,
  setIsOpen,
}: MobileNavProps) {
  const [ servicesDropdownOpen, setServicesDropdownOpen ] = useState(false)
  const clientPathname = usePathname()

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow
    const originalPaddingRight = window.getComputedStyle(document.body).paddingRight

    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = "hidden"
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
    } else {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
    }

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
    }
  }, [ isOpen ])

  const isActive = (href: string) => {
    if (!clientPathname) return false
    if (href === "/") {
      return clientPathname === "/" || clientPathname === `/${currentLocale}`
    }
    return clientPathname.includes(href)
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[90vh] md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`fixed inset-0 h-[90vh] w-[100vw] flex flex-col bg-slate-100/95 shadow-lg backdrop-blur-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-lg font-semibold"></span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 overscroll-contain">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.isDropdown ? (
                    <div>
                      <button
                        className={`flex items-center justify-between w-full py-3 text-lg font-semibold ${isActive(item.href) ? "text-blue-600" : "text-foreground"
                          }`}
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        aria-expanded={servicesDropdownOpen}
                      >
                        {item.translatedLabel}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`mt-2 space-y-2 border-l-2 border-border pl-4 overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? "opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className={`flex items-center py-3 text-base group ${isActive(dropdownItem.href) ? "text-blue-600 font-medium" : "text-muted-foreground"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-3 text-lg font-semibold transition-colors hover:text-blue-600 ${isActive(item.href) ? "text-blue-600" : "text-foreground"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.translatedLabel}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-border space-y-4">
            <Link href="/contact" className="block" onClick={() => setIsOpen(false)}>
              <Button className="w-full h-12 text-base bg-orange-500 hover:bg-orange-600 transition-colors">
                {getQuoteLabel}
              </Button>
            </Link>
            <Link href="https://app.najemaleen.com/" className="block" onClick={() => setIsOpen(false)}>
              <Button className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700 transition-colors">
                {getLoginInLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}