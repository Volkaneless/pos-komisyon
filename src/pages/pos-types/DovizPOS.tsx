import { CreditCard } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const DovizPOS = () => {
  return (
    <POSTypePage
      title="Döviz POS Sistemleri"
      description="Dövizli işlemler için POS sistemleri ve komisyon oranlarını karşılaştırın. Size en uygun döviz POS çözümünü seçin."
      type="Döviz POS"
      Icon={CreditCard}
      whatIsContent="Döviz POS sistemleri, yabancı para birimleriyle ödeme kabul etmenizi sağlayan özel ödeme terminalleridir. Bu sistemler, özellikle turizm sektörü ve uluslararası ticaret yapan işletmeler için idealdir."
      advantages={[
        "Çoklu döviz desteği",
        "Anlık kur güncellemeleri",
        "Otomatik döviz çevrimi",
        "Detaylı döviz raporlaması",
        "Uluslararası kart desteği"
      ]}
    />
  );
};

export default DovizPOS;