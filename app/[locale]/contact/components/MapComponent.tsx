"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import contactDetails from '@/config/contact-details.json'; // Import contact details

export default function MapComponent() {
  const t = useTranslations("Contact");
  const mapRef = useRef<HTMLDivElement>(null);

  // Google Maps URL from config
  const googleMapsUrl = contactDetails.googleMapsUrl;
  console.log("Google Maps URL:", googleMapsUrl);

  useEffect(() => {
    // This loads the Google Maps iframe only when the component mounts
    if (mapRef.current) {
      const iframe = document.createElement('iframe');

      // Updated map embed URL with:
      // - Higher zoom level (16 instead of default)
      // - Road map type (m instead of satellite/terrain)
      // - Removed unnecessary parameters
      // - Added marker visibility
    //   iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5746604229513!2d55.389554075836796!3d25.288824977707815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c15e7bfa01b%3A0xa5d777c805956776!2sNajem%20Aleen%20Shipping%20L.L.C!5e0!3m2!1sen!2sae!4v1742560453298!5m2!1sen!2sae";
    //   iframe.src = "https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d115438.18663119563!2d55.38542!3d25.289305!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c15e7bfa01b%3A0xa5d777c805956776!2sNajem%20Aleen%20Shipping%20L.L.C!5e0!3m2!1sen!2sse!4v1742555299633!5m2!1sen!2sse"
      iframe.src = "https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d50356.14920926708!2d55.335252268607086!3d25.281074744917078!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c15e7bfa01b%3A0xa5d777c805956776!2sNajem%20Aleen%20Shipping%20L.L.C!5e0!3m2!1sen!2sse!4v1742555366296!5m2!1sen!2sse"
      iframe.width = "100%";
      iframe.height = "450";
      iframe.style.border = "0";
      iframe.loading = "lazy";
      iframe.allowFullscreen = false;
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.title = "Najem Aleen Shipping Location";

      // Clear existing content and append iframe
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <div>
      <div ref={mapRef} className="h-[450px] w-full bg-muted flex items-center justify-center rounded-xl">
        <div className="animate-pulse text-muted-foreground">{t("mapLoading")}</div>
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
