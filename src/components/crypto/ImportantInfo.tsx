
import { AlertTriangle, HelpCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ImportantInfo = () => {
  return (
    <div className="space-y-4 mt-8">
      <Alert variant="destructive" className="bg-amber-50 border-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Risk Uyarısı</AlertTitle>
        <AlertDescription className="text-amber-700">
          Kripto para yatırımları yüksek risk taşır. Yatırım yapmadan önce piyasa koşullarını ve riskleri değerlendirin. 
          Kaybetmeyi göze alabileceğiniz miktarda yatırım yapmanız önerilir.
        </AlertDescription>
      </Alert>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-start gap-3">
          <HelpCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Kripto Para Komisyon Oranları Hakkında</h3>
            <p className="text-gray-600 text-sm">
              Borsa komisyon oranları maker (emir defterine yazılan emirler) ve taker (anında eşleşen emirler) 
              olarak ikiye ayrılır. Listelenen oranlar standart komisyonlardır ve işlem hacmine, 
              token tutma durumuna göre değişiklik gösterebilir.
            </p>
            <a 
              href="https://www.spk.gov.tr/Sayfa/AltSayfa/1130" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary flex items-center gap-1 text-sm mt-2"
            >
              SPK Kripto Varlık Rehberi <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantInfo;
