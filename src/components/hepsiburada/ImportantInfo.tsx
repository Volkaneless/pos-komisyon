
import { Card } from "@/components/ui/card";

const ImportantInfo = () => {
  return (
    <Card className="p-6 rounded-xl shadow-sm mt-6">
      <h3 className="text-lg font-semibold mb-4">Önemli Bilgiler</h3>
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-medium text-blue-600">Hepsiburada Komisyon Oranları</h4>
          <p className="mt-1 text-gray-600">
            Hepsiburada'da satış yaparken kategori bazlı farklı komisyon oranları uygulanmaktadır. 
            Genel olarak %10 ile %20 arasında değişen bu oranlar, ürün kategorisine göre farklılık gösterir.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-blue-600">Kategori Bazlı Komisyon Oranları</h4>
          <ul className="list-disc pl-5 mt-1 text-gray-600 space-y-1">
            <li>Elektronik ürünlerde: %10-15</li>
            <li>Moda ve giyim ürünlerinde: %18-20</li>
            <li>Kozmetik ürünlerinde: %16-18</li>
            <li>Ev ve Yaşam ürünlerinde: %15-17</li>
            <li>Kitap ve Kırtasiye ürünlerinde: %10-12</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-blue-600">Hepsiburada HepsiJet Kargo Ücreti</h4>
          <p className="mt-1 text-gray-600">
            Hepsiburada'nın kendi kargo hizmeti HepsiJet ile gönderim yapıldığında, 
            ürün boyutu ve ağırlığına göre farklı kargo ücretleri uygulanmaktadır. 
            Satıcı panelinden güncel kargo ücretlerini kontrol edebilirsiniz.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-blue-600">Diğer Bilgiler</h4>
          <ul className="list-disc pl-5 mt-1 text-gray-600 space-y-1">
            <li>Ödemeler genellikle 14 gün içerisinde satıcı hesabına aktarılır.</li>
            <li>İptal, iade ve değişim süreçlerinde komisyon ücretleri iade edilmektedir.</li>
            <li>Kampanya dönemlerinde bazı kategorilerde komisyon indirimleri uygulanabilir.</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ImportantInfo;
