import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const CepPOS = () => {
  return (
    <POSTypePage
      title="CepPOS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel CepPOS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun mobil ödeme çözümünü seçin."
      type="CepPOS"
      Icon={Smartphone}
      whatIsContent="CepPOS sistemleri, akıllı telefonları ödeme terminaline dönüştüren yenilikçi çözümlerdir. NFC teknolojisi sayesinde temassız ödemeleri destekleyen bu sistemler, özellikle küçük işletmeler ve seyyar satıcılar için ideal bir ödeme çözümüdür. Düşük maliyetli ve taşınabilir yapısıyla, geleneksel POS cihazlarına modern bir alternatif sunar."
      advantages={[
        "Düşük başlangıç maliyeti",
        "Mobil cihazlarla kolay entegrasyon",
        "Temassız ödeme desteği",
        "Anlık satış takibi ve raporlama",
        "Hızlı kurulum ve kullanıma başlama",
        "Kompakt ve taşınabilir yapı",
        "Düzenli yazılım güncellemeleri",
        "Çoklu kullanıcı desteği"
      ]}
    />
  );
};

export default CepPOS;