
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menü</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex flex-col space-y-3 mt-4">
          <Link to="/" onClick={onClose} className="text-base font-medium hover:text-primary">
            Ana Sayfa
          </Link>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="py-1 text-base font-medium hover:text-primary">
                Komisyon Hesaplayıcılar
              </AccordionTrigger>
              <AccordionContent className="pl-4 space-y-3">
                <Link to="/calculator" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  POS Komisyon Hesaplayıcı
                </Link>
                <Link to="/trendyol-komisyon" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Trendyol Komisyon Hesaplayıcı
                </Link>
                <Link to="/dolap-komisyon" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Dolap Komisyon Hesaplayıcı
                </Link>
                <Link to="/hepsiburada-komisyon" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Hepsiburada Komisyon Hesaplayıcı
                </Link>
                <Link to="/param-guvende-komisyon" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Param Güvende Komisyon Hesaplayıcı
                </Link>
                <Link to="/n11-komisyon" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  n11 Komisyon Hesaplayıcı
                </Link>
                <Link to="/amazon-komisyon" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Amazon Komisyon Hesaplayıcı
                </Link>
                <Link to="/shopier-komisyon" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Shopier Komisyon Hesaplayıcı
                </Link>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="py-1 text-base font-medium hover:text-primary">
                POS Türleri
              </AccordionTrigger>
              <AccordionContent className="pl-4 space-y-3">
                <Link to="/pos-types/banka" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Banka POS
                </Link>
                <Link to="/pos-types/yazarkasa" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Yazarkasa POS
                </Link>
                <Link to="/pos-types/sanal" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Sanal POS
                </Link>
                <Link to="/pos-types/mobil" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Mobil POS
                </Link>
                <Link to="/pos-types/cep" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Cep POS
                </Link>
                <Link to="/pos-types/borsa" onClick={onClose} className="block text-sm font-medium hover:text-primary">
                  Borsa Aracı Kurum
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <Link to="/kripto-borsalari" onClick={onClose} className="text-base font-medium hover:text-primary">
            Kripto Borsaları
          </Link>
          
          <Link to="/blog" onClick={onClose} className="text-base font-medium hover:text-primary">
            Blog
          </Link>
          
          <Link to="/about" onClick={onClose} className="text-base font-medium hover:text-primary">
            Hakkında
          </Link>
          
          <Link to="/contact" onClick={onClose} className="text-base font-medium hover:text-primary">
            İletişim
          </Link>
          
          <div className="pt-4">
            <Link
              to="/calculator"
              onClick={onClose}
              className="block text-center w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Hesaplayıcı
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
