
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const CepPOS = () => {
  return (
    <POSTypePage
      title="Cep POS Komisyon Oranları 2025"
      description="Akıllı telefonunuzu POS cihazına dönüştürün. 2025 yılı cep POS uygulamaları, komisyon oranları ve özellikler. En uygun cep POS çözümünü seçin."
      type="Cep POS"
      Icon={Smartphone}
      whatIsContent="Cep POS uygulamaları, akıllı telefonları ödeme terminaline dönüştüren modern ödeme çözümleridir."
      advantages={[
        "Sıfır donanım maliyeti",
        "Hızlı kurulum",
        "Düşük komisyon oranları",
        "Kolay kullanım",
        "Anlık raporlama"
      ]}
    />
  );
};

export default CepPOS;
