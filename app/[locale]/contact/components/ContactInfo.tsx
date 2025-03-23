import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building2,
  CalendarClock,
  AlertCircle,
  CalendarRange,
  ExternalLink
} from "lucide-react";
import { WhatsApp } from "@/components/Icons";
import { getCurrentBusinessPeriod, getShortHolidayInfo } from "@/lib/business-periods";
import contactDetails from "@/config/contact-details.json"  ;


export default function ContactInfo() {

  const t = useTranslations("Contact.info");
  const businessT = useTranslations("BusinessHours");
  const locale = useLocale();
  
  // Get current business period
  const currentPeriod = getCurrentBusinessPeriod();
  
  // Get special short holiday info if applicable
  const shortHolidayInfo = currentPeriod === 'short-holiday'
    ? getShortHolidayInfo(locale)
    : null;
  
  // Google Maps URL from config
  const contactMethods = [
    {
      icon: Phone,
      title: t("phone"),
      details: contactDetails.phone, // Use phone from config
      action: t("call"),
      href: `tel:${contactDetails.phone}`, // Use phone from config
      color: "text-blue-600",
      bgColor: "bg-blue-100/50",
    },
    {
      icon: WhatsApp,
      title: t("whatsapp"),
      details: contactDetails.whatsapp, // Use whatsapp from config
      action: t("message"),
      href: `https://wa.me/${contactDetails.whatsapp}`, // Use whatsapp from config
      color: "text-green-600",
      bgColor: "bg-green-100/50",
    },
    {
      icon: Mail,
      title: t("email"),
      details: contactDetails.email, // Use email from config
      action: t("write"),
      href: `mailto:${contactDetails.email}`, // Use email from config
      color: "text-amber-600",
      bgColor: "bg-amber-100/50",
    },
  ];

  return (
    <div className="space-y-8 h-fit w-full lg:overflow-y-auto">
      {/* Contact cards */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center p-4 rounded-lg border bg-card shadow-sm"
          >
            <div className={`flex-shrink-0 p-3 rounded-full ${method.bgColor}`}>
              <method.icon className={`h-6 w-6 ${method.color}`} />
            </div>
            <div className="mx-4 flex-1">
              <h3 className="font-medium">{method.title}</h3>
              {/* Force LTR direction for phone numbers, email addresses */}
              <p className="text-muted-foreground" dir={method.icon === Phone || method.icon === WhatsApp ? "ltr" : "auto"}>
                {method.details}
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-shrink-0 w-[80px] justify-center"
            >
              <Link href={method.href} target="_blank" rel="noopener noreferrer">
                {method.action}
              </Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Location & hours */}
      <div className="rounded-lg border bg-card shadow-sm p-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="mx-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{t("address")}</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 gap-1 text-xs text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  asChild
                >
                  <Link href={contactDetails.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{t("getDirections")}</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
              <p className="text-muted-foreground whitespace-pre-line">
                {t("addressDetails")}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="mx-3">
              <h3 className="font-medium">{t("office")}</h3>
              <p className="text-muted-foreground">
                {t("officeDetails")}
              </p>
            </div>
          </div>
          
          {/* Regular business hours - always show these */}
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="mx-3">
              <h3 className="font-medium">{t("hours")}</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {businessT("regular.hours")}
              </p>
            </div>
          </div>
          
          {/* Special period hours - only show if different from regular */}
          {currentPeriod !== 'regular' && (
            <div className="flex items-start border-t border-dashed border-muted pt-4 mt-4">
              <CalendarRange className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="mx-3">
                <h3 className="font-medium text-amber-600">
                  {currentPeriod === 'short-holiday' && shortHolidayInfo 
                    ? businessT("shortHoliday.title") 
                    : businessT(`${currentPeriod}.title`)}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {currentPeriod === 'short-holiday' && shortHolidayInfo 
                    ? shortHolidayInfo.hours 
                    : businessT(`${currentPeriod}.hours`)}
                </p>
              </div>
            </div>
          )}
          
          {/* Special period notice */}
          {((shortHolidayInfo && shortHolidayInfo.notice) ||
            (currentPeriod !== 'regular' && businessT(`${currentPeriod}.notice`, { fallback: '' }) !== '')) && (
            <div className="flex items-start mt-2 bg-muted/60 p-3 rounded-lg">
              {currentPeriod === 'short-holiday' ? (
                <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              ) : (
                <CalendarClock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              )}
              <div className="mx-3">
                <h3 className="font-medium text-amber-600">
                  {businessT("notice.title")}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {/* Emergency contact numbers should also be LTR */}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: formatEmergencyNumbers(
                        shortHolidayInfo 
                          ? shortHolidayInfo.notice 
                          : businessT(`${currentPeriod}.notice`)
                      ) 
                    }}
                  />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Formats text containing phone numbers to ensure numbers display correctly in RTL contexts
 * Looks for patterns like: +971 54 996 8485 and wraps them in LTR spans
 */
function formatEmergencyNumbers(text: string): string {
  if (!text) return '';
  
  // Regex to find phone number patterns
  const phoneRegex = /(\+\d{1,4}\s?\d{1,3}\s?\d{3,4}\s?\d{4})/g;
  
  // Replace phone numbers with LTR-wrapped versions
  return text.replace(phoneRegex, '<span dir="ltr">$1</span>');
}
