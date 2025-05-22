
import { Banknote } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankaPOSFeatures from "@/components/pos-types/banka/BankaPOSFeatures";
import BankaPOSFAQ from "@/components/pos-types/banka/BankaPOSFAQ";
import BankaPOSAgreements from "@/components/pos-types/banka/BankaPOSAgreements";
import BankaPOSProviderCards from "@/components/pos-types/banka/BankaPOSProviderCards";
import MetaTags from "@/components/MetaTags";

const BankaPOS = () => {
  return (
    <>
      <MetaTags
        title="Banka POS Komisyon Oranları 2025 | POS Compare"
        description="Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun."
        keywords="banka pos, fiziksel pos, banka pos komisyon oranları 2025, pos karşılaştırma, pos cihazı ücretleri"
        canonicalPath="/pos-types/banka"
        priority={20}
      />
      
      <POSTypePage
        title="Banka POS Komisyon Oranları 2025"
        description="2025 yılında güncel POS komisyon oranları ile işletme maliyetlerinizi optimize edin. Bankaların POS komisyon oranlarını karşılaştırın ve size en uygun POS çözümünü bulun."
        type="Banka POS"
        Icon={Banknote}
        whatIsContent="Banka POS'ları, bankaların işletmelere sunduğu güvenilir ödeme çözümleridir. Yüksek işlem hacmi ve çoklu ödeme seçenekleri sunar."
        advantages={[
          "Güvenilir banka altyapısı",
          "7/24 teknik destek",
          "Farklı kart ve taksit seçenekleri",
          "Kapsamlı raporlama özellikleri",
          "Geniş servis ağı"
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="w-full justify-start space-x-4 border-b rounded-none">
            <TabsTrigger value="features">Özellikler</TabsTrigger>
            <TabsTrigger value="faq">Sık Sorulan Sorular</TabsTrigger>
            <TabsTrigger value="agreements">Özel Anlaşmalar</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <BankaPOSFeatures />
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <BankaPOSFAQ />
          </TabsContent>

          <TabsContent value="agreements" className="mt-6">
            <BankaPOSAgreements />
          </TabsContent>
        </Tabs>

        <BankaPOSProviderCards />
      </div>
    </>
  );
};

export default BankaPOS;
