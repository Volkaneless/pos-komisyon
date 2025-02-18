
import { PrinterPosIcon } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const YazarkasaPOS = () => {
  return (
    <POSTypePage
      title="Yazar Kasa POS Komisyon Oranları 2025"
      description="2025 yılı yazar kasa (ÖKC) POS cihazı fiyatları, komisyon oranları ve karşılaştırma. Yasal mevzuata uygun, güncel yazar kasa POS çözümlerini inceleyin."
      type="Yazar Kasa (ÖKC) POS"
      Icon={PrinterPosIcon}
      whatIsContent="Yazar kasa POS cihazları, yasal gerekliliklere uygun şekilde hem fiş/fatura düzenleme hem de ödeme alma imkanı sunan entegre cihazlardır."
      advantages={[
        "Yasal mevzuata tam uyumluluk",
        "Fiş/fatura kesme ve ödeme alma tek cihazda",
        "Gelişmiş raporlama özellikleri",
        "Maliye Bakanlığı onaylı",
        "Otomatik güncelleme desteği"
      ]}
    />
  );
};

export default YazarkasaPOS;
