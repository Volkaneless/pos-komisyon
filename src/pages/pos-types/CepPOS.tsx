import { Helmet } from "react-helmet";
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const CepPOS = () => {
  return (
    <POSTypePage
      title="Cep POS Çözümleri"
      description="En uygun cep POS uygulamalarını karşılaştırın, işletmeniz için en uygun cep POS çözümünü seçin."
      type="Cep POS"
      Icon={Smartphone}
      whatIsContent="Cep POS uygulamaları, akıllı telefonları ödeme terminaline dönüştüren yazılım çözümleridir. Bu uygulamalar sayesinde, herhangi bir ek donanıma ihtiyaç duymadan akıllı telefonunuz üzerinden kredi kartı ödemesi alabilirsiniz."
      advantages={[
        "Ek donanım maliyeti yok",
        "Hızlı kurulum ve kullanım",
        "Düşük işlem maliyetleri",
        "Mobil cihaz entegrasyonu",
        "Anlık ödeme takibi"
      ]}
    />
  );
};

export default CepPOS;