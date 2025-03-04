
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const ImportantInfo = () => {
  return (
    <Card className="p-4 mt-6 bg-amber-50 border-amber-200">
      <div className="flex items-start space-x-2">
        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-amber-800">
          <p className="font-medium mb-1">Önemli Bilgiler:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Yukarıdaki hesaplama tahmini sonuçlar göstermektedir.</li>
            <li>Kesin bilgiler için sahibinden.com resmi kanallarını kontrol ediniz.</li>
            <li>16 Ocak 2025 tarihi itibariyle bireysel hesap sahibi satıcılardan komisyon bedeli alınmaya başlanacaktır.</li>
            <li>Sahibinden.com, komisyon oranlarını değiştirme hakkını saklı tutmaktadır.</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ImportantInfo;
