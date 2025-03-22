// useIsActive.ts (Hook)
import { usePathname, useParams } from "next/navigation";

export const useIsActive = (href: string) => {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params?.locale as string || 'en';

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
        normalizedPathname[ localizedHref.length ] === '/'));
};