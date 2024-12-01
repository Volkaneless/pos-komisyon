import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const CepPOS = () => {
  return (
    <POSTypePage
      title="Cep POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel Cep POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun mobil ödeme çözümünü seçin."
      type="Cep POS"
      Icon={Smartphone}
      whatIsContent="Cep POS sistemleri, akıllı telefonları ödeme terminaline dönüştüren yenilikçi çözümlerdir. NFC teknolojisi sayesinde temassız ödemeleri destekleyen bu sistemler, özellikle küçük işletmeler ve seyyar satıcılar için ideal bir ödeme çözümüdür. Düşük maliyetli ve taşınabilir yapısıyla, geleneksel POS cihazlarına modern bir alternatif sunar."
      advantages={[
        "Sıfır başlangıç maliyeti",
        "Android cihazlarla kolay entegrasyon",
        "Temassız ödeme desteği",
        "Anlık satış takibi ve raporlama",
        "Hızlı kurulum ve kullanıma başlama",
        "Kompakt ve taşınabilir yapı",
        "Düzenli yazılım güncellemeleri",
        "Çoklu kullanıcı desteği",
        "Düşük komisyon oranları",
        "7/24 teknik destek"
      ]}
    />
  );
};

export default CepPOS;