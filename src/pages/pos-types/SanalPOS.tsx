import { Helmet } from "react-helmet";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Card } from "@/components/ui/card";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SanalPOS = () => {
  return (
    <>
      <Helmet>
        <title>Sanal POS Komisyon Oranları 2025 | E-Ticaret POS Komisyonları</title>
        <meta
          name="description"
          content="2025 yılı güncel sanal POS komisyon oranları karşılaştırması. E-ticaret siteniz için en uygun sanal POS ve ödeme çözümlerini keşfedin."
        />
        <meta
          name="keywords"
          content="sanal pos, e-ticaret pos, online ödeme sistemleri, sanal pos komisyon oranları 2025, en ucuz sanal pos, sanal pos başvuru"
        />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/sanal" />
        <link rel="alternate" href="https://poskomisyon.com/" />
      </Helmet>

      <POSTypePage
        title="Sanal POS Komisyon Oranları 2025"
        description="E-ticaret ve online satış yapan işletmeler için en uygun sanal POS çözümleri ve güncel komisyon oranları."
        content={
          <div className="prose max-w-none">
            <p>Sanal POS, internet üzerinden yapılan satışlar için ödeme kabul etmenizi sağlayan sistemlerdir. E-ticaret siteleri, mobil uygulamalar ve online rezervasyon sistemleri için idealdir.</p>
            
            <h3>Sanal POS Avantajları</h3>
            <ul>
              <li>7/24 kesintisiz ödeme kabul edebilme</li>
              <li>Fiziksel POS cihazı maliyeti olmadan çalışabilme</li>
              <li>Kolay entegrasyon ve API desteği</li>
              <li>Uluslararası ödemeleri kabul edebilme</li>
              <li>Otomatik tekrarlayan ödemeler alabilme</li>
              <li>Gelişmiş raporlama ve analiz özellikleri</li>
              <li>Mobil cihaz ve uygulama uyumluluğu</li>
              <li>Gelişmiş dolandırıcılık önleme sistemleri</li>
            </ul>
          </div>
        }
      />

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="providers" className="mb-8">
          <TabsList className="w-full justify-start space-x-4 border-b rounded-none">
            <TabsTrigger value="providers">Sanal POS Sağlayıcıları</TabsTrigger>
            <TabsTrigger value="features">Özellikler</TabsTrigger>
            <TabsTrigger value="pricing">Komisyon Oranları</TabsTrigger>
          </TabsList>
          <TabsContent value="providers" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sanalPOSProviders.map((provider) => (
                <Card key={provider.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="h-8 object-contain"
                      />
                      <span className="text-sm text-gray-500">{provider.type}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
                    <p className="text-gray-600 mb-4">
                      Komisyon Oranı: %{provider.commission_rate}
                    </p>
                    <Link to={`/pos-providers/${provider.id}`}>
                      <Button className="w-full">Detayları İncele</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <div className="prose max-w-none">
              <h3>Sanal POS Özellikleri</h3>
              <ul>
                <li>Hızlı ve güvenli ödeme alma</li>
                <li>Kolay entegrasyon</li>
                <li>Mobil uyumluluk</li>
                <li>7/24 destek</li>
              </ul>
            </div>
          </TabsContent>
           <TabsContent value="pricing" className="mt-6">
            <div className="prose max-w-none">
              <h3>Sanal POS Komisyon Oranları</h3>
              <p>Güncel komisyon oranları hakkında bilgi alın.</p>
              <ul>
                <li>Banka komisyon oranları</li>
                <li>Ödeme kuruluşu komisyon oranları</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default SanalPOS;
