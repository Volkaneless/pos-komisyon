
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { LucideIcon } from "lucide-react";

interface POSTypePageProps {
  title: string;
  description: string;
  type: string;
  Icon: LucideIcon;
  whatIsContent: string;
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
  
  return (
    <>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Icon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-left">{type} Komisyon Oranları</h2>
          <p className="text-lg text-gray-600 max-w-3xl text-left mb-4">
            Bankaların ve fintech şirketlerinin güncel {type.toLowerCase()} komisyon oranlarını karşılaştırın, 
            işletmeniz için en uygun {type.toLowerCase()} çözümünü kolayca bulun. Aşağıdaki filtreleme seçenekleriyle 
            size en uygun {type.toLowerCase()} çözümünü seçebilirsiniz.
          </p>
          <div className="space-y-4 text-left mb-8">
            <h3 className="text-xl font-semibold text-gray-800">{type} Avantajları</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Gelişmiş mali kontrol ve raporlama özellikleri</li>
              <li>Yasal gerekliliklere tam uyumluluk</li>
              <li>Entegre ödeme çözümleri</li>
              <li>Otomatik güncelleme ve bakım desteği</li>
              <li>Çoklu ödeme seçenekleri (nakit, kredi kartı, QR)</li>
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Önemli Bilgiler: POS Komisyon Oranları</h3>
            <p className="text-gray-700 mb-3">
              {type} çözümleri, işletmenizin yasal gerekliliklerini karşılarken modern ödeme çözümlerini de 
              tek bir platformda birleştirir. 2024 yılı itibariyle tüm işletmelerin güvenli ödeme sistemleri 
              kullanması önerilmektedir.
            </p>
            <p className="text-gray-700">
              Komisyon oranları, aylık ciro, işlem hacmi ve tercih edilen bankaya göre değişiklik gösterebilir. 
              Detaylı bilgi için aşağıdaki karşılaştırma tablosunu inceleyebilirsiniz.
            </p>
          </div>
        </div>

        <div className="grid gap-8 mb-12">
          {filteredProviders.map(provider => <POSCard key={provider.id} {...provider} />)}
        </div>
      </div>
    </>
  );
};

export default POSTypePage;
