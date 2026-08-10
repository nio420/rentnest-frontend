import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "../shared/fade-in";

const faqs = [
  {
    question: "Are all property listings on the platform verified?",
    answer:
      "Yes! Every listing undergoes a strict review process to verify landlord details, location accuracy, and real photos before it goes live.",
    direction: "down" as const,
  },
  {
    question: "How do I schedule a property visit?",
    answer:
      "Simply click on 'Request Visit' on any property page. Select your preferred date and time, and the landlord will be notified directly.",
    direction: "left" as const,
  },
  {
    question: "Are there any hidden fees or agent commissions?",
    answer:
      "No. Our platform connects tenants and landlords directly with zero hidden charges or unnecessary middleman fees.",
    direction: "right" as const,
  },
  {
    question: "How can I list my property as a landlord?",
    answer:
      "Sign up as a Landlord, click 'Add New Property' in your dashboard, upload photos and property details, and submit. Your listing will go live once verified.",
    direction: "up" as const,
  },
  {
    question: "What should I do if I suspect a scam?",
    answer:
      "We strictly prohibit advance payments without visiting the property. If you encounter any suspicious activity, use the 'Report Listing' button or contact our support team immediately.",
    direction: "down" as const,
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-muted/20 border-t">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn direction="down" delay={0.1}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Everything you need to know about renting and listing properties.
            </p>
          </div>
        </FadeIn>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <FadeIn
              key={index}
              direction={faq.direction}
              delay={0.12 * (index + 1)}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border rounded-xl px-4 bg-card shadow-2xs"
              >
                <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeIn>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
