
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0">
        <div className="h-full flex flex-col">
          <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-left font-bold text-gray-800">POSKomisyon Menü</SheetTitle>
              <button 
                onClick={onClose}
                className="rounded-full p-1 hover:bg-gray-200 transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <Separator className="my-0" />
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={onClose} className="text-base font-medium hover:text-primary transition-colors flex items-center">
                Ana Sayfa
              </Link>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-100">
                  <AccordionTrigger className="py-2 text-base font-medium hover:text-primary">
                    Komisyon Hesaplayıcılar
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 space-y-3">
                    <Link to="/calculator" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      POS Komisyon Hesaplayıcı
                    </Link>
                    <Link to="/trendyol-komisyon" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Trendyol Komisyon Hesaplayıcı
                    </Link>
                    <Link to="/dolap-komisyon" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Dolap Komisyon Hesaplayıcı
                    </Link>
                    <Link to="/hepsiburada-komisyon" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Hepsiburada Komisyon Hesaplayıcı
                    </Link>
                    <Link to="/param-guvende-komisyon" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Param Güvende Komisyon Hesaplayıcı
                    </Link>
                    <Link to="/n11-komisyon" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      n11 Komisyon Hesaplayıcı
                    </Link>
                    <Link to="/amazon-komisyon" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Amazon Komisyon Hesaplayıcı
                    </Link>
                    <Link to="/shopier-komisyon" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Shopier Komisyon Hesaplayıcı
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-gray-100">
                  <AccordionTrigger className="py-2 text-base font-medium hover:text-primary">
                    POS Türleri
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 space-y-3">
                    <Link to="/pos-types/banka" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Banka POS
                    </Link>
                    <Link to="/pos-types/yazarkasa" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Yazarkasa POS
                    </Link>
                    <Link to="/pos-types/sanal" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Sanal POS
                    </Link>
                    <Link to="/pos-types/mobil" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Mobil POS
                    </Link>
                    <Link to="/pos-types/cep" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Cep POS
                    </Link>
                    <Link to="/pos-types/borsa" onClick={onClose} className="block py-2 text-sm font-medium hover:text-primary">
                      Borsa Aracı Kurum
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Link to="/kripto-borsalari" onClick={onClose} className="text-base font-medium hover:text-primary transition-colors py-2">
                Kripto Borsaları
              </Link>
              
              <Link to="/blog" onClick={onClose} className="text-base font-medium hover:text-primary transition-colors py-2">
                Blog
              </Link>
              
              <Link to="/about" onClick={onClose} className="text-base font-medium hover:text-primary transition-colors py-2">
                Hakkında
              </Link>
              
              <Link to="/contact" onClick={onClose} className="text-base font-medium hover:text-primary transition-colors py-2">
                İletişim
              </Link>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <Link
              to="/calculator"
              onClick={onClose}
              className="block text-center w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
            >
              POS Komisyon Hesaplayıcı
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
