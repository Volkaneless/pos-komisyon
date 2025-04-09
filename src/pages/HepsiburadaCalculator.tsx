import HepsiburadaCalculator from "@/components/hepsiburada/HepsiburadaCalculator";
import MetaTags from "@/components/MetaTags";

const HepsiburadaCalculatorPage = () => {
  return (
    <>
      <MetaTags
        title="Hepsiburada Komisyon Hesaplama & Oranları | POS Komisyon"
        description="Hepsiburada'da satış yaparken ödeyeceğiniz komisyon ücretlerini hesaplayın. Kategori bazlı komisyon oranları ve kargo ücretleri ile net karınızı öğrenin."
        canonicalPath="/hepsiburada-komisyon"
        priority={20}
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-3">Hepsiburada Komisyon Hesaplama & Oranları</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hepsiburada'da satış yaparken ödeyeceğiniz komisyon ücretlerini, KDV tutarlarını ve kargo bedellerini hesaplayarak, 
            net karınızı ve kar marjınızı öğrenin.
          </p>
        </div>
        
        <HepsiburadaCalculator />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Hepsiburada Komisyon Oranları Hakkında</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Hepsiburada Satıcı Olmanın Avantajları</h3>
              <p className="text-gray-600">
                Hepsiburada Türkiye'nin en büyük e-ticaret platformlarından biridir. Platform üzerinde satıcı olarak yer almak, 
                milyonlarca potansiyel müşteriye ulaşmanızı sağlar. Hepsiburada'nın sağladığı lojistik, ödeme ve müşteri hizmetleri 
                desteği ile satışlarınızı kolayca yönetebilirsiniz.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Hepsiburada Satış Maliyetleri</h3>
              <p className="text-gray-600">
                Hepsiburada'da satış yaparken ana maliyet kalemi, satış tutarı üzerinden alınan komisyon oranlarıdır. Bu oranlar, 
                ürün kategorilerine göre değişiklik göstermektedir. Ayrıca, kargo maliyetleri de satıcının üstlendiği bir başka gider 
                kalemidir.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Hepsiburada HepsiJet Entegrasyonu</h3>
              <p className="text-gray-600">
                Hepsiburada, kendi lojistik hizmeti olan HepsiJet ile satıcılara avantajlı kargo fiyatları sunmaktadır. 
                Bu sayede kargo maliyetlerinizi düşürebilir, teslimat süreçlerini hızlandırabilirsiniz. HepsiJet entegrasyonu, 
                satıcı paneli üzerinden kolayca yapılabilir.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Sıkça Sorulan Sorular</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Hepsiburada'da satış yapmak için ne kadar komisyon öderim?</h4>
                  <p className="text-gray-600">
                    Hepsiburada'da komisyon oranları, ürünün kategorisine göre değişmektedir. Elektronik ürünlerde %10-15, 
                    moda ve giyim ürünlerinde %18-20, kozmetikte %16-18 gibi farklı oranlarda komisyon alınmaktadır. 
                    Yukarıdaki hesaplayıcı ile kesin rakamları öğrenebilirsiniz.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Hepsiburada ödemelerimi ne zaman yapar?</h4>
                  <p className="text-gray-600">
                    Hepsiburada, ürünün müşteriye teslim edilmesini takiben genellikle 14 gün içerisinde ödeme yapmaktadır. 
                    Satıcı performansına göre bu süre kısalabilir veya uzayabilir.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Hepsiburada'da iade durumunda komisyon iadesi yapılır mı?</h4>
                  <p className="text-gray-600">
                    Evet, müşteri tarafından yapılan iade işlemlerinde, satıcıdan kesilen komisyon ücreti iade edilmektedir. 
                    İade işlemi tamamlandıktan sonra komisyon tutarı satıcı hesabına aktarılır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HepsiburadaCalculatorPage;
