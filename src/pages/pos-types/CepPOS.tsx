import { Helmet } from "react-helmet";
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const CepPOS = () => {
  return (
    <>
      <Helmet>
        <title>Cep POS Uygulamaları ve Komisyon Oranları 2024</title>
        <meta 
          name="description" 
          content="Cep POS uygulamaları ile akıllı telefonunuzu POS cihazına dönüştürün. Komisyon oranları ve başvuru şartları hakkında bilgi alın." 
        />
        <meta name="keywords" content="cep pos, mobil pos uygulaması, telefon pos, android pos uygulaması, ios pos uygulaması" />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/cep" />
      </Helmet>
      <POSTypePage
        title="Cep POS Uygulamaları ve Komisyon Oranları 2024"
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
    </>
  );
};

export default CepPOS;