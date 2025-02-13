
import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const BankaPOS = () => {
  return (
    <POSTypePage
      title="Banka POS Komisyon Oranları 2025"
      description="Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun."
      type="Banka POS"
      Icon={Terminal}
      whatIsContent="Banka POS'ları, bankaların işletmelere sunduğu ödeme çözümleridir. Güvenli ve hızlı ödeme almanızı sağlar."
      advantages={[
        "Güvenilir banka altyapısı",
        "7/24 teknik destek",
        "Farklı kart ve taksit seçenekleri",
        "Kapsamlı raporlama özellikleri",
        "Geniş servis ağı"
      ]}
    />
  );
};

export default BankaPOS;
