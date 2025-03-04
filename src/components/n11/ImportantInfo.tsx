
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const ImportantInfo = () => {
  return (
    <Alert className="mt-6 bg-blue-50 border-blue-200">
      <InfoIcon className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-800">Bilgilendirme</AlertTitle>
      <AlertDescription className="text-blue-700">
        <p className="mt-2 text-sm">
          Bu hesaplama aracı, n11 satıcılarına yardımcı olmak için tasarlanmıştır ve tahmini değerler sunmaktadır. 
          Kesin komisyon oranları için n11 Satıcı Paneli'nizi kontrol edin.
        </p>
        <p className="mt-2 text-sm">
          n11 komisyon oranları kategori bazında farklılık gösterebilir ve zaman içinde değişebilir.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default ImportantInfo;
