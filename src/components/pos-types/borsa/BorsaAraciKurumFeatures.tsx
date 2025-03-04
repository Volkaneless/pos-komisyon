
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Shield, Clock, LineChart, MonitorSmartphone } from "lucide-react";

const BorsaAraciKurumFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <BarChart2 className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Düşük Komisyon Oranları</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Aracı kurumlar arasında rekabetçi komisyon oranları ile daha fazla kazanç elde edin. Birikimlerinizi daha verimli değerlendirmeniz için en uygun komisyon oranlarını sunuyoruz.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <Shield className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Güvenli İşlem Altyapısı</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            SPK denetiminde faaliyet gösteren lisanslı kurumlar ile güvenli bir şekilde yatırımlarınızı gerçekleştirin. Şifreli iletişim protokolleri ve güvenlik önlemleri ile işlemleriniz koruma altında.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <LineChart className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Teknik Analiz Araçları</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Gelişmiş grafik ve teknik analiz araçları ile piyasaları daha iyi analiz edin. İndikatörler, osilatörler ve formasyonlar ile yatırım kararlarınızı güçlendirin.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <Clock className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Hızlı İşlem Platformu</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Milisaniyeler içinde işlemlerinizi gerçekleştirin. Düşük gecikme süreleri ile fiyat fırsatlarını kaçırmadan alım satım yapın.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <MonitorSmartphone className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Çoklu Platform Desteği</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Web, masaüstü ve mobil uygulamalar ile dilediğiniz yerden borsa işlemlerinizi yapın. Her cihazda senkronize çalışan portföy yönetimi ile yatırımlarınızı takip edin.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default BorsaAraciKurumFeatures;
