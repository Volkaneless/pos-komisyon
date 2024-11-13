import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Bu hesaplayıcı tahmini değerler sunar. Gerçek komisyon oranları ve
          ücretler bankanızla yapacağınız anlaşmaya göre değişiklik gösterebilir.
        </AlertDescription>
      </Alert>

      <Accordion type="single" collapsible>
        <AccordionItem value="guide">
          <AccordionTrigger>Kullanım Kılavuzu</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Banka ve POS türünü seçin</li>
              <li>İşlem tutarını girin</li>
              <li>Komisyon oranını ayarlayın</li>
              <li>Taksit seçeneğini belirleyin</li>
              <li>Varsa sabit ücreti ekleyin</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="terms">
          <AccordionTrigger>Komisyon Politikası</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-gray-600">
              POS komisyon oranları, işlem hacmi, taksit sayısı ve banka
              anlaşmalarına göre değişiklik gösterebilir. Taksitli işlemlerde
              genellikle daha yüksek komisyon oranları uygulanır.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rates">
          <AccordionTrigger>Güncel Piyasa Koşulları</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-gray-600">
              Piyasadaki ortalama POS komisyon oranları peşin işlemlerde %1.5-2.5,
              taksitli işlemlerde %2-4 arasında değişmektedir. Bu oranlar
              sektöre ve işlem hacmine göre farklılık gösterebilir.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InfoSection;