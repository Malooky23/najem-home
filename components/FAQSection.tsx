import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

interface FAQSectionProps {
  fullWidth?: boolean;
}

export default function FAQSection({ fullWidth = false }: FAQSectionProps) {
  const t = useTranslations("FAQ");
  const locale = useLocale();
  const isRTL = locale === "ar";
  
  const questionsData = Object.keys(t.raw("questions")).map((key) => ({
    id: key,
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`),
  }));

  // CSS classes for text alignment based on language direction
  const titleTextClass = isRTL ? "text-right" : "text-left";
  const contentTextClass = isRTL ? "text-right" : "text-left";
  
  // Adjust prose size class based on language - larger for Arabic
  const proseClass = isRTL ? "prose prose-base" : "prose prose-sm";

  if (fullWidth) {
    // Full FAQ page layout
    return (
      <div className="mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {questionsData.map((question) => (
            <AccordionItem
              key={question.id}
              value={question.id}
              className="border border-border rounded-lg px-6"
              dir={isRTL ? "rtl" : "ltr"}
            >
              <AccordionTrigger className={`text-lg font-medium py-4 ${titleTextClass} w-full`}>
                {question.question}
              </AccordionTrigger>
              <AccordionContent className={`text-muted-foreground pb-4 pt-2 ${contentTextClass}`}>
                <div className={`${proseClass} dark:prose-invert`}>
                  <p>{question.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  // Home page layout (simplified version with CTA)
  return (
    <section 
      className="relative bg-gradient-faq py-16 md:py-24 md:section-overlap-top min-h-screen flex flex-col justify-center" 
      id="faq"
    >
      {/* Add a spacer div for mobile only to prevent overlap */}
      <div className="md:hidden h-16"></div>
      
      <div className="container relative z-10">
        <div className={`text-center mb-12 ${isRTL ? "rtl" : "ltr"}`}>
          <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description") || "Find answers to commonly asked questions about our shipping and logistics services."}
          </p>
        </div>

        {/* Only show the first 3 FAQs on the home page */}
        <div className="mx-auto max-w-3xl mb-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {questionsData.slice(0, 3).map((question) => (
              <AccordionItem
                key={question.id}
                value={question.id}
                className="border border-border rounded-lg px-6"
                dir={isRTL ? "rtl" : "ltr"}
              >
                <AccordionTrigger className={`text-lg font-medium py-4 ${titleTextClass} w-full`}>
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className={`text-muted-foreground pb-4 pt-2 ${contentTextClass}`}>
                  <div className={`${proseClass} dark:prose-invert`}>
                    <p>{question.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center pb-8">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/faq">
              {t("viewAllFAQs") || "View All FAQs"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
