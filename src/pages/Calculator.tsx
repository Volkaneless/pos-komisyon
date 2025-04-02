import { Helmet } from "react-helmet";
import Calculator from "../components/Calculator";
import MetaTags from "@/components/MetaTags";

const CalculatorPage = () => {
  return (
    <>
      <MetaTags
        title="POS Komisyon Oranları Hesaplama Programı - 2025"
        description="2025 yılı güncel POS komisyon oranları hesaplama aracı. Banka POS cihazları için komisyon tutarlarını kolayca hesaplayın. Taksit seçenekleri ve detaylı maliyet analizi."
        keywords="pos komisyon hesaplama 2025, pos komisyon oranları, pos komisyon hesaplama programı, pos maliyet hesaplama, pos taksit komisyon hesaplama"
        canonicalPath="/calculator"
        priority={20}
      />

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            POS Komisyon Oranları Hesaplama Programı
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            2025 yılı güncel POS komisyon oranlarını hesaplayın, taksit seçeneklerini karşılaştırın
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Banka ve finans kuruluşlarının POS komisyon oranlarını kolayca hesaplayın,
            maliyetlerinizi optimize edin.
          </p>
        </div>

        <Calculator />

        <article className="prose prose-lg max-w-4xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">POS Komisyon Hesaplama: Formül, Excel Araçları ve Banka Oranları</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="mb-4">
              POS cihazları, işletmelerin ödeme süreçlerini hızlandıran önemli bir araçtır. Ancak, POS cihazı kullanımında komisyon oranlarını doğru hesaplamak, işletme maliyetlerini optimize etmek için kritik öneme sahiptir. Bu yazıda, POS komisyon hesaplama formülü, bankaların POS komisyon oranları ve en uygun seçenekleri nasıl bulacağınızı detaylı bir şekilde açıklıyoruz.
            </p>

            <h3 className="text-xl font-semibold mb-4">POS Komisyon Hesaplama Formülü</h3>
            <p className="mb-4">
              POS komisyonları, işlem tutarınıza ve bankanın belirlediği oranlara göre hesaplanır. İşte temel formül:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono">POS Komisyonu = (İşlem Tutarı × Komisyon Oranı) + Sabit Ücret (Varsa)</p>
            </div>

            <div className="bg-primary-light p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Örnek:</h4>
              <ul className="list-none space-y-1">
                <li>İşlem Tutarı: 1.000 TL</li>
                <li>Komisyon Oranı: %2</li>
                <li>Sabit Ücret: 1 TL</li>
                <li>Hesaplama: (1.000 × 0.02) + 1 = 21 TL komisyon ödersiniz.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">POS Komisyon Hesaplama için Excel Kullanımı</h3>
            <p className="mb-4">Excel'de komisyon hesaplama oldukça kolaydır. İşte bir örnek tablo:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">İşlem Tutarı</th>
                    <th className="px-4 py-2 border">Komisyon Oranı (%)</th>
                    <th className="px-4 py-2 border">Sabit Ücret</th>
                    <th className="px-4 py-2 border">Toplam Komisyon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">1.000</td>
                    <td className="px-4 py-2 border">2</td>
                    <td className="px-4 py-2 border">1</td>
                    <td className="px-4 py-2 border font-mono">=A2*(B2/100)+C2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-4">Önemli Bilgilendirme</h4>
            <p className="text-gray-700">
              Bu hesaplama aracı tahmini sonuçlar sunar. Kesin oranlar için bankanızla iletişime geçmenizi öneririz. 
              Komisyon oranları piyasa koşullarına göre değişiklik gösterebilir.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">POS komisyon oranı nedir?</h4>
                <p>
                  POS komisyon oranı, kredi kartı ile yapılan işlemlerde bankalar tarafından 
                  işlem tutarı üzerinden alınan hizmet bedelidir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Komisyon oranları nasıl belirlenir?</h4>
                <p>
                  Komisyon oranları işletmenin cirosu, sektörü, taksit seçenekleri ve 
                  banka ile yapılan anlaşmalara göre belirlenir.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Not: Hesaplamalar tahmini değerler içerir. Gerçek komisyon tutarları
            bankanıza ve anlaşmanıza göre değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
