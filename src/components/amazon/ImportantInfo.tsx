
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExternalLink, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ImportantInfo = () => {
  return (
    <Card className="rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Önemli Bilgiler</h3>
      
      <Alert className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Uyarı</AlertTitle>
        <AlertDescription>
          Bu hesaplama aracı yaklaşık değerler sunar. Amazon'un komisyon oranları ve FBA 
          ücretleri değişebilir. Kesin hesaplama için Amazon Seller Central'ı kontrol edin.
        </AlertDescription>
      </Alert>
      
      <div className="space-y-3 text-sm">
        <div className="space-y-1">
          <h4 className="font-medium">Amazon Komisyon Oranları:</h4>
          <p>Amazon'un referral ücretleri (komisyonlar), genellikle %8 ile %15 arasında değişmektedir.</p>
        </div>
        
        <div className="space-y-1">
          <h4 className="font-medium">FBA (Fulfillment by Amazon):</h4>
          <p>Ürünün ölçülerine ve ağırlığına göre depolama ve gönderim ücretleri değişiklik gösterir.</p>
        </div>
        
        <div className="space-y-1">
          <h4 className="font-medium">Amazon Satıcı Hesabı:</h4>
          <p>Bireysel satıcılar için ürün başına ücret, profesyonel satıcılar için aylık abonelik ücreti vardır.</p>
        </div>
        
        <div className="mt-4">
          <a href="https://sellercentral.amazon.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
            <ExternalLink className="h-4 w-4 mr-1" />
            Amazon Seller Central'ı Ziyaret Et
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ImportantInfo;
