import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What should kids bring?",
    a: "Comfortable sportswear, indoor and outdoor shoes, a water bottle, sunscreen, and a hat. We'll send a detailed packing list after registration.",
  },
  {
    q: "What if my child is a complete beginner?",
    a: "That's exactly who we're here for! All activities are designed so every child can participate, learn, and have fun regardless of skill level.",
  },
  {
    q: "What happens in bad weather?",
    a: "We have access to indoor facilities. The program continues rain or shine — we simply move activities indoors.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer is our primary payment method. You'll receive payment details and an invoice after registration.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Full refund up to 14 days before camp starts. 50% refund up to 7 days before. No refund within 7 days of the start date, except for medical reasons with documentation.",
  },
  {
    q: "Is lunch included?",
    a: "Yes! A balanced lunch and afternoon snack are included in the price. Please let us know about any dietary requirements or allergies in the registration form.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
