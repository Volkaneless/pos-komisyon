
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface POSTypePageProps {
  title: string;
  description: string;
  type: string;
  Icon: LucideIcon;
  whatIsContent: string | React.ReactNode;
  advantages: string[];
}

const POSTypePage = ({
  title,
  description,
  type,
  Icon,
  whatIsContent,
  advantages
}: POSTypePageProps) => {
  const filteredProviders = posProviders.filter(provider => provider.type === type);
  const currentDate = new Date();
  const lastUpdated = `${currentDate.getDate()} ${currentDate.toLocaleString('tr-TR', { month: 'long' })} ${currentDate.getFullYear()}`;
  const initialDate = "1 Ocak 2025";
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">{description}</p>
        <div className="text-sm text-gray-500 flex justify-center items-center gap-2">
          <span>Son güncelleme: {lastUpdated}</span>
          <span className="mx-2">•</span>
          <span>Giriş tarihi: {initialDate}</span>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Öne Çıkan Bilgiler - 2025</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>2025 yılı güncel {type} komisyon oranları</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Tüm banka ve fintech {type} çözümleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Ücretsiz {type} başvurusu imkanı</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Detaylı {type} komisyon hesaplama araçları</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Banka karşılaştırma ve değerlendirme</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Sektöre özel {type} çözümleri</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        {typeof whatIsContent === 'string' ? (
          <div className="prose prose-lg max-w-none mb-8">{whatIsContent}</div>
        ) : whatIsContent}
        
        {advantages && advantages.length > 0 && (
          <div className="space-y-4 text-left mb-8">
            <h3 className="text-2xl font-bold mb-4">Avantajlar</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    {advantage}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popüler {type} Çözümleri</h2>
        <div>
          {filteredProviders.slice(0, 6).map(provider => <POSCard key={provider.id} {...provider} />)}
        </div>
      </div>
      
      {filteredProviders.length > 6 && <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Diğer {type} Çözümleri</h2>
          <div>
            {filteredProviders.slice(6).map(provider => <POSCard key={provider.id} {...provider} />)}
          </div>
        </div>}
    </div>
  );
};

export default POSTypePage;
