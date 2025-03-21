import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const t = useTranslations("Breadcrumbs");

  return (
    <nav
      className={`flex items-center text-sm text-muted-foreground/70 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">{t("home")}</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="mx-1 h-3 w-3 text-muted-foreground/40" aria-hidden="true" />
            
            {item.href && index !== items.length - 1 ? (
              <Link 
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground/80" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
