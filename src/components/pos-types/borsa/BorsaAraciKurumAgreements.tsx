
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Gift, Zap, Percent, AlertCircle } from "lucide-react";

const BorsaAraciKurumAgreements = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Özel Anlaşmalar</h2>
      
      <p className="text-gray-700 mb-8">
        Borsa aracı kurumları ile yapabileceğiniz özel anlaşmalar sayesinde daha uygun komisyon oranları ve ek 
        avantajlardan yararlanabilirsiniz. Aşağıda en yaygın özel anlaşma türleri ve bunların sağladığı avantajlar 
        listelenmiştir.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <Award className="h-8 w-8 text-primary mb-2" />
            <CardTitle>VIP Müşteri Programı</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Belirli bir portföy büyüklüğüne sahip yatırımcılar için sunulan VIP müşteri programları, düşük komisyon 
              oranları, öncelikli müşteri desteği ve kişiselleştirilmiş yatırım danışmanlığı hizmetleri sunar.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Percent className="h-8 w-8 text-primary mb-2" />
            <CardTitle>İşlem Hacmine Göre Komisyon İndirimi</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Aylık veya üç aylık periyotlarda belirli işlem hacmine ulaşan yatırımcılar için kademeli komisyon indirimleri
              sağlanır. İşlem hacminiz arttıkça, komisyon oranınız otomatik olarak düşer.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Zap className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Aktif Trader Programı</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Günlük alım-satım işlemi yapan aktif yatırımcılar için özel fiyatlandırma ve düşük komisyon oranları sunan 
              program. Yüksek frekanslı işlem yapan yatırımcılar için idealdir.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Gift className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Referans Kampanyaları</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Arkadaşlarınızı aracı kuruma yönlendirdiğinizde hem size hem de arkadaşınıza komisyon indirimi veya 
              bedava işlem hakkı sunan referans programları. Sosyal ağınızı genişleterek avantaj sağlayabilirsiniz.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <AlertCircle className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Özel Durum Anlaşmaları</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Portföy büyüklüğü, mesleki durum (akademisyen, öğrenci, emekli vb.) veya uzun vadeli yatırım 
              stratejileri gibi özel durumlara göre bireysel olarak müzakere edilebilen komisyon oranları ve 
              hizmet paketleri.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Anlaşma Yaparken Dikkat Edilmesi Gerekenler</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Anlaşma şartlarını ve süresini net olarak öğrenin</li>
          <li>Komisyon indirimi dışındaki hizmetleri ve ek ücretleri mutlaka sorgulayın</li>
          <li>Minimum işlem hacmi veya portföy büyüklüğü gereklilikleri olup olmadığını kontrol edin</li>
          <li>Anlaşma şartlarının değişebileceği durumları ve bildirim yükümlülüklerini öğrenin</li>
          <li>Farklı aracı kurumların tekliflerini karşılaştırın ve pazarlık yapın</li>
        </ul>
      </div>
    </div>
  );
};

export default BorsaAraciKurumAgreements;
