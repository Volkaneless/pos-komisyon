import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const SabitPOS = () => {
  return (
    <POSTypePage
      title="Sabit POS Sistemleri ve Komisyon Oranları 2024"
      description="2024 yılı güncel sabit POS sistemleri, komisyon oranları ve karşılaştırmaları. İşletmeniz için en uygun sabit POS çözümünü seçin."
      type="Sabit POS"
      Icon={Terminal}
      whatIsContent="Sabit POS cihazları, işletmelerde kasa noktalarında kullanılan geleneksel ödeme terminalleridir. Güvenilir ve dayanıklı yapılarıyla yüksek işlem hacmine sahip işletmeler için ideal çözümlerdir. Modern sabit POS'lar, temassız ödeme, QR kod okuma ve gelişmiş raporlama özellikleri sunar."
      advantages={[
        "Yüksek işlem hacmi kapasitesi",
        "Dayanıklı donanım yapısı",
        "Kesintisiz çalışma performansı",
        "Geniş banka ve kart desteği",
        "Gelişmiş güvenlik özellikleri",
        "Entegre yazıcı sistemi",
        "Profesyonel görünüm",
        "7/24 teknik destek"
      ]}
    />
  );
};

export default SabitPOS;