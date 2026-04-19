import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Je kemp vhodný i pro úplné začátečníky?",
    a: "Ano, kemp je vhodný pro všechny děti bez ohledu na úroveň. Aktivity přizpůsobujeme tak, aby si je užili jak začátečníci, tak sportovně pokročilejší děti.",
  },
  {
    q: "Jak probíhá běžný den na kempu?",
    a: "Každý den zahrnuje sportovní aktivity, hry a soutěže. Dbáme na pestrost programu, aby děti nebyly přetížené a zároveň se bavily. Součástí dne je i čas na odpočinek.",
  },
  {
    q: "Co by si mělo dítě vzít s sebou na kemp?",
    a: "Děti budou potřebovat sportovní oblečení, pokrývku hlavy, láhev na pití a obuv dovnitř do haly i ven.",
  },
  {
    q: "Co se děje v případě špatného počasí?",
    a: "V případě špatného počasí se s programem přesuneme do kryté haly. Přesný plán aktivit vždy přizpůsobujeme aktuálním podmínkám tak, aby si děti kemp užily za každého počasí.",
  },
  {
    q: "Je zajištěný oběd a pitný režim?",
    a: "Ano, děti mají zajištěný oběd, svačinky i pitný režim po celý den.",
  },
  {
    q: "Je možné vyzvednout dítě dříve?",
    a: "Ano, po domluvě je možné dítě vyzvednout i dříve.",
  },
  {
    q: "Může být dítě ve skupině se svým kamarádem?",
    a: "Ano, rádi děti zařadíme do stejné skupiny. Stačí tuto informaci uvést při přihlášení nebo poslat na e-mail.",
  },
  {
    q: "Co když dítě onemocní nebo se nemůže kempu zúčastnit?",
    a: "Pro tyto situace doporučujeme sjednat si níže uvedené pojištění storna. Pokud by dítě před zahájením kempu onemocnělo nebo se zranilo, pojišťovna vám na základě toho vyplatí podstatnou část uhrazené částky zpět.",
  },
  {
    q: "Může dítě na kemp přicházet nebo odcházet samo?",
    a: "Samostatný příchod i odchod je možný, podmínkou je však odevzdání písemného souhlasu trenérům hned první den. Tímto potvrzením rodič stvrzuje, že za dítě v době mimo program kempu přebírá veškerou odpovědnost.",
  },
  {
    q: "Do kdy je potřeba kemp uhradit?",
    a: "Platbu je nutné provést nejpozději do jednoho měsíce od podání přihlášky.",
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Často kladené otázky</h2>
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
