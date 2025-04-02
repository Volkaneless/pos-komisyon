
import { Banknote } from "lucide-react";
import { Helmet } from "react-helmet";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankaPOSFeatures from "@/components/pos-types/banka/BankaPOSFeatures";
import BankaPOSFAQ from "@/components/pos-types/banka/BankaPOSFAQ";
import BankaPOSAgreements from "@/components/pos-types/banka/BankaPOSAgreements";
import BankaPOSProviderCards from "@/components/pos-types/banka/BankaPOSProviderCards";
import CanonicalLink from "@/components/CanonicalLink";

const BankaPOS = () => {
  return (
    <>
      <Helmet>
        <title>Banka POS Komisyon Oranları 2025 | POS Compare</title>
        <meta name="description" content="Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun." />
      </Helmet>
      
      {/* Use correct path with CanonicalLink component */}
      <CanonicalLink path="/pos-types/banka" />
      
      <POSTypePage
        title="Banka POS Komisyon Oranları 2025"
        description="Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun."
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
