import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const POSFAQ = () => {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <HelpCircle className="w-5 h-5" />
        Sıkça Sorulan Sorular
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Başvuru için gerekli belgeler nelerdir?</AccordionTrigger>
          <AccordionContent>
            Başvuru için vergi levhanız, işletme sahibinin kimlik fotokopisi ve işletmenizin faaliyet belgesi gerekmektedir.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Başvuru sonrası POS kurulumu ne kadar sürer?</AccordionTrigger>
          <AccordionContent>
            Başvurunuz onaylandıktan sonra ortalama 2-3 iş günü içerisinde POS kurulumu gerçekleştirilir.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};