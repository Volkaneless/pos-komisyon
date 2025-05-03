import { CreditCard, ShieldCheck, Globe, Coins, TrendingUp, LockKeyhole } from "lucide-react";
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
  return;
};
export default CryptoFeatures;