
import { CreditCard, ShieldCheck, Globe, Coins, TrendingUp, LockKeyhole } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CryptoFeatures = () => {
  const features = [{
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Güvenlik",
    description: "Güvenilir kripto para borsaları, 2FA, soğuk cüzdan saklama ve sigorta gibi ileri güvenlik önlemleri sunar."
  }, {
    icon: <Coins className="w-10 h-10 text-primary" />,
    title: "Likidite",
    description: "Yüksek likiditeye sahip borsalar, emirlerinizin hızlı ve adil fiyatlarla gerçekleşmesini sağlar."
  }, {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Trading Araçları",
    description: "Gelişmiş grafik araçları, limit emirleri ve teknik analiz göstergeleri ile trading deneyiminizi geliştirin."
  }, {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Kripto Çeşitliliği",
    description: "Geniş yelpazede kripto para birimleri, farklı yatırım fırsatları için portföyünüzü çeşitlendirmenize olanak tanır."
  }, {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Ödeme Yöntemleri",
    description: "Kredi kartı, banka havalesi ve diğer yerel ödeme yöntemleriyle kolay para yatırma ve çekme imkanları."
  }, {
    icon: <LockKeyhole className="w-10 h-10 text-primary" />,
    title: "Regülasyon",
    description: "Yasal düzenlemelere uygun faaliyet gösteren borsalar, varlıklarınızın güvende olmasını sağlar."
  }];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="border-gray-100 hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary-lighter p-3 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CryptoFeatures;
