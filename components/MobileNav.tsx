"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  title?: string;
}

interface NavigationItem {
  label: string;
  translatedLabel: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface MobileNavProps {
  navigationItems: NavigationItem[];
  getQuoteLabel: string;
  pathname: string;
  currentLocale?: string;
}

export default function MobileNav({ 
  navigationItems, 
  getQuoteLabel, 
  pathname,
  currentLocale = 'en'
}: MobileNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const clientPathname = usePathname(); // Get the pathname directly
  
  const isActive = (href: string) => {
    // Use the client-side pathname
    if (!clientPathname) return false;
    
    // Special case for home page
    if (href === '/') {
      return clientPathname === '/' || clientPathname === `/${currentLocale}`;
    }
    
    // For other pages
    return clientPathname.includes(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2 -mx-2 text-muted-foreground" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-border bg-background absolute top-16 left-0 right-0 z-50">
          <nav className="flex flex-col space-y-4 container">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.isDropdown ? (
                  // Dropdown for mobile
                  <div>
                    <button 
                      className={`flex items-center justify-between w-full py-2 text-sm ${
                        isActive(item.href) ? 'text-primary font-medium' : 'text-foreground'
                      }`}
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    >
                      {item.translatedLabel}
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {servicesDropdownOpen && item.dropdownItems && (
                      <div className="mx-4 mt-2 space-y-2 border-l border-border pl-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className={`block py-2 text-sm ${
                              isActive(dropdownItem.href) ? 'text-primary font-medium' : 'text-muted-foreground'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular nav link for mobile
                  <Link
                    href={item.href}
                    className={`block py-2 text-sm ${
                      isActive(item.href) ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.translatedLabel}
                  </Link>
                )}
              </div>
            ))}
            
            <Link href='/contact' className="mt-2">
              <Button className="w-full bg-secondary hover:bg-secondary/80">{getQuoteLabel}</Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
