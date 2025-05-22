import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ/CepPOSFAQ";
import MetaTags from "@/components/MetaTags";

const CepPOS = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <MetaTags 
        title={`Cep POS Komisyon Oranları ${currentYear} - En Uygun Cep POS`} 
        description={`${currentYear} yılı güncel cep POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun cep POS çözümünü bulun.`} 
        keywords="cep pos komisyon oranları, cep pos başvuru, cep pos cihazları, mobil pos, telefonda pos, akıllı telefon pos" 
        canonicalPath="/pos-types/cep" 
        priority={20}
      />

      <POSTypePage 
        title="Cep POS Komisyon Oranları"
        description="Akıllı telefonunuzu POS cihazına dönüştüren cep POS çözümleri, komisyon oranları ve karşılaştırmalar" 
        type="Cep POS" 
        Icon={Smartphone}
        whatIsContent="Cep POS uygulamaları, akıllı telefonunuzu veya tabletinizi bir POS cihazına dönüştüren yazılım çözümleridir. Ek bir donanıma gerek duymadan, mevcut mobil cihazınızla ödeme kabul etmenizi sağlar."
        advantages={[
          "Ekstra donanım maliyeti olmadan ödeme alma", 
          "Düşük komisyon oranları", 
          "Anında kurulum ve kullanım", 
          "Temassız ödeme desteği", 
          "Kolay entegrasyon imkanı", 
          "Detaylı satış raporlama",
          "Mobil kullanım kolaylığı"
        ]} 
      />

      <div className="container mx-auto px-4 py-16">
        <div className="relative bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 pt-28 pb-16">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                <Smartphone className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Cep POS Komisyon Oranları {currentYear}
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                İşletmeniz için en uygun cep POS çözümleri, komisyon oranları ve detaylı karşılaştırmalar
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Cep POS Karşılaştır
                </Button>
                <Button size="lg" variant="outline">
                  Komisyon Hesapla
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Cep POS Komisyon Oranları {currentYear} - Cep POS Nedir?</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">Cep POS Nedir?</h3>
            <p className="text-gray-700 mb-0">
              Cep POS, akıllı telefonunuzu bir ödeme terminaline dönüştüren yenilikçi bir çözümdür. 
              Herhangi bir ek donanım gerektirmeden, telefonunuz üzerinden güvenli bir şekilde kredi kartı ödemeleri alabilirsiniz.
              {currentYear} yılında giderek yaygınlaşan bu teknoloji, özellikle küçük işletmeler ve serbest çalışanlar için
              ideal bir çözüm sunmaktadır.
            </p>
          </div>

          <Separator className="my-10" />

          <h3 className="text-2xl font-semibold mb-4">Cep POS: Başvuru ve Kullanım</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-medium mb-4">Başvuru Süreci</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Kimler Başvurabilir?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Bireysel işletme sahipleri</li>
                      <li>Limited ve anonim şirketler</li>
                      <li>Serbest meslek sahipleri</li>
                      <li>Şahıs şirketleri</li>
                      <li>E-ticaret platformu kullanan satıcılar</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Gerekli Belgeler</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Kimlik fotokopisi veya e-Devlet kimlik belgesi</li>
                      <li>Vergi levhası</li>
                      <li>İmza sirküleri (şirket başvurularında)</li>
                      <li>Faaliyet belgesi</li>
                      <li>İşletme hesabı veya banka hesap bilgileri</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Başvuru Aşamaları</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                      <li>Online başvuru formunu eksiksiz doldurun</li>
                      <li>Gerekli belgeleri sisteme yükleyin</li>
                      <li>Bilgilerin doğrulanmasını bekleyin (1-3 iş günü)</li>
                      <li>Onay e-postası alın</li>
                      <li>Uygulamayı indirin ve hesap bilgilerinizle giriş yapın</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-4">Kullanım Aşamaları</h4>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600 text-sm">1</span>
                    </div>
                    <h5 className="font-semibold">Hesap Kurulumu</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    Hesap bilgilerinizle uygulamaya giriş yapın ve profil bilgilerinizi güncelleyin.
                    Banka hesabınızı entegre ederek ödeme alma sürecini tamamlayın.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600 text-sm">2</span>
                    </div>
                    <h5 className="font-semibold">Ödeme Alma</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ana ekrandan "Ödeme Al" butonuna tıklayın, tutar ve taksit bilgilerini girin.
                    Temassız ödeme, kart okutma veya QR kod yöntemlerinden birini seçerek ödeme alın.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600 text-sm">3</span>
                    </div>
                    <h5 className="font-semibold">İşlem Takibi</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    "İşlemlerim" bölümünden geçmiş işlemleri görüntüleyin, raporlar oluşturun ve
                    e-fatura entegrasyonu ile faturalarınızı düzenleyin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS: Güvenlik Özellikleri</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-3 flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                Veri Güvenliği
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>End-to-end şifreleme</li>
                <li>PCI DSS uyumluluğu</li>
                <li>ISO 27001 sertifikasyonu</li>
                <li>Kart verilerinin cihazda saklanmaması</li>
                <li>Düzenli güvenlik kontrolleri</li>
              </ul>
            </div>
            
            <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-3 flex items-center">
                <WifiHigh className="h-5 w-5 mr-2 text-primary" />
                İşlem Güvenliği
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Gerçek zamanlı doğrulama</li>
                <li>3D Secure entegrasyonu</li>
                <li>Anlık işlem bildirimleri</li>
                <li>Lokasyon doğrulama</li>
                <li>İşlem limiti belirleme</li>
              </ul>
            </div>
            
            <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Dolandırıcılık Koruması
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Yapay zeka tabanlı risk analizi</li>
                <li>Şüpheli işlem tespit sistemi</li>
                <li>İşlem geçmişi kontrolü</li>
                <li>Anormal davranış tespiti</li>
                <li>BDDK onaylı güvenlik protokolleri</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS: Maliyet Optimizasyonu</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-12">
            <p className="text-gray-700 mb-4">
              İşletmenizin maliyetlerini optimize etmek için öneriler:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Komisyon Optimizasyonu</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>İşlem hacminize göre özel fiyatlandırma talep edin</li>
                  <li>Farklı sağlayıcılardan teklif alarak karşılaştırın</li>
                  <li>Yıllık sözleşme yaparak indirimli oranlar alın</li>
                  <li>Taksit yapısını işletme nakit akışına göre optimize edin</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Ek Maliyet Tasarrufu</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>POS cihazı satın alma maliyetinden kurtulun</li>
                  <li>Bakım ve servis ücretlerinden tasarruf edin</li>
                  <li>Kağıt slip maliyetini azaltın (e-slip kullanımı)</li>
                  <li>Personel eğitim maliyetlerini minimize edin</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md text-sm">
              <p className="font-medium flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-700">Maliyet İpucu:</span>
              </p>
              <p className="mt-1 text-gray-700">
                Aylık 25.000 TL ve üzeri ciro yapan işletmeler genellikle özel komisyon oranları için pazarlık yapabilirler.
                Düzenli işlem hacminizi belgeleyerek daha avantajlı oranlar elde etmeniz mümkündür.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">Cep POS Avantajları ve Dezavantajları</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Avantajlar
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sıfır donanım maliyeti</li>
                <li>Kolay kurulum ve entegrasyon</li>
                <li>Düşük işlem komisyonları</li>
                <li>Mobil kullanım esnekliği</li>
                <li>Tüm kredi kartlarıyla uyumluluk</li>
                <li>Gelişmiş raporlama imkanları</li>
                <li>7/24 teknik destek</li>
                <li>Sürekli güncellenen yazılım</li>
                <li>E-fatura entegrasyonu</li>
                <li>Temassız ödeme imkanı</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h4 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Dezavantajlar
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>İnternet bağlantısı gerekliliği</li>
                <li>Batarya ömrü kısıtlaması</li>
                <li>Bazı durumlarda bağlantı sorunları</li>
                <li>Telefon hafıza kapasitesi ihtiyacı</li>
                <li>Büyük işletmeler için sınırlı fonksiyonellik</li>
                <li>Yazılım güncellemelerine bağımlılık</li>
                <li>Telefon/tablet arızasında kesinti riski</li>
                <li>Fiziksel POS'lara göre daha yavaş işlem hızı</li>
                <li>Yüksek hacimli işlemlerde sınırlılık</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl my-16">
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
        
        <div className="my-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Son Yazılarımız</h3>
            <p className="text-center text-gray-600 mb-8">
              Cep POS ve ödeme sistemleri hakkında en güncel bilgiler ve makaleler
            </p>
            <LatestBlogPosts />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl my-16 text-center">
          <h3 className="text-2xl font-bold mb-4">En Uygun Cep POS Çözümünü Bulun</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına en uygun cep POS çözümünü bulmak için hemen karşılaştırma yapın ve özel tekliflerden yararlanın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Cep POS Karşılaştır
            </Button>
            <Button size="lg" variant="outline">
              Komisyon Hesapla
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CepPOS;
