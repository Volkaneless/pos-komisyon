
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Clock, LineChart, Smartphone, ShieldCheck, AlertTriangle } from "lucide-react";

const SanalPOSFeatureTabs = () => {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Sanal POS Özellikleri</h2>
      </div>

      <Tabs defaultValue="features" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="features">Temel Özellikler</TabsTrigger>
          <TabsTrigger value="security">Güvenlik</TabsTrigger>
          <TabsTrigger value="integration">Entegrasyon</TabsTrigger>
        </TabsList>
        <TabsContent value="features" className="bg-white p-6 rounded-xl shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Çoklu Kart Desteği</h4>
                <p className="text-gray-600">Tüm yerel ve uluslararası kartları destekleyen ödeme altyapısı</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">7/24 Ödeme Alma</h4>
                <p className="text-gray-600">Kesintisiz ödeme kabul etme imkanı ile satışlarınızı artırın</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <LineChart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Detaylı Raporlama</h4>
                <p className="text-gray-600">İşlem bazlı detaylı raporlar ve analitik veriler</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Mobil Uyumluluk</h4>
                <p className="text-gray-600">Tüm mobil cihazlarda sorunsuz çalışan ödeme sayfaları</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security" className="bg-white p-6 rounded-xl shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">PCI DSS Uyumlu</h4>
                <p className="text-gray-600">En yüksek güvenlik standartlarına uygun ödeme altyapısı</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Fraud Koruması</h4>
                <p className="text-gray-600">Gelişmiş dolandırıcılık önleme sistemleri ile güvenli ödeme</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">3D Secure</h4>
                <p className="text-gray-600">Ekstra güvenlik katmanı ile korunan ödeme işlemleri</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">SSL Şifreleme</h4>
                <p className="text-gray-600">256-bit SSL şifreleme ile güvenli veri transferi</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="integration" className="bg-white p-6 rounded-xl shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">REST API</h4>
                <p className="text-gray-600">Kolay entegre edilebilen modern REST API desteği</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Hazır Modüller</h4>
                <p className="text-gray-600">Popüler e-ticaret platformları için hazır eklentiler</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Webhook Desteği</h4>
                <p className="text-gray-600">Gerçek zamanlı bildirimler için webhook entegrasyonu</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">SDK Paketleri</h4>
                <p className="text-gray-600">Popüler programlama dilleri için SDK desteği</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default SanalPOSFeatureTabs;
