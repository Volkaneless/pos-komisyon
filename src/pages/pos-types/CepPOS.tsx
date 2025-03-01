import { Helmet } from "react-helmet";
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import CepPOSFAQ from "@/components/FAQ/CepPOSFAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";

const CepPOS = () => {
  return <>
      <Helmet>
        <title>Cep POS Komisyon Oranları 2025 - Cep POS Nedir?</title>
        <meta name="description" content="Cep POS uygulamaları ile akıllı telefonunuzu POS cihazına dönüştürün. 2025 komisyon oranları, başvuru şartları ve detaylı bilgiler." />
        <meta name="keywords" content="cep pos, mobil pos uygulaması, telefon pos, android pos uygulaması, ios pos uygulaması, cep pos komisyon oranları 2025" />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/cep" />
      </Helmet>

      <POSTypePage 
        title="Cep POS Komisyon Oranları 2025 - Cep POS Nedir?" 
        description="En uygun cep POS uygulamalarını karşılaştırın, işletmeniz için en uygun cep POS çözümünü seçin." 
        posType="Cep POS" 
        Icon={Smartphone} 
        whatIsContent="Cep POS uygulamaları, akıllı telefonları ödeme terminaline dönüştüren modern yazılım çözümleridir. Bu uygulamalar sayesinde, herhangi bir ek donanıma ihtiyaç duymadan akıllı telefonunuz üzerinden kredi kartı ödemesi alabilirsiniz. 2025 yılında artan dijitalleşme ile birlikte Cep POS sistemleri daha da yaygınlaşmaktadır." 
        advantages={["Ek donanım maliyeti yok", "Hızlı kurulum ve kullanım", "Düşük işlem maliyetleri", "Mobil cihaz entegrasyonu", "Anlık ödeme takibi", "7/24 teknik destek", "Taksit imkanı", "Temassız ödeme desteği"]} 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Kolay Kullanım</h3>
            <p className="text-gray-600">
              Basit arayüz ve hızlı kurulum ile dakikalar içinde ödeme almaya başlayın.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Güvenli Altyapı</h3>
            <p className="text-gray-600">
              SSL şifreleme ve PCI DSS uyumlu güvenlik standartları ile güvenli ödeme.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Uygun Komisyon</h3>
            <p className="text-gray-600">
              Rekabetçi komisyon oranları ve ek maliyet olmadan kullanım imkanı.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden Cep POS?</h2>
            <p className="text-gray-600">
              İşletmeniz için en uygun Cep POS çözümünü sunuyoruz. Güvenli, hızlı ve ekonomik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Aktif Kullanıcı</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">%99.9</div>
              <div className="text-gray-600">Uptime Garantisi</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Banka Desteği</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">%1.49</div>
              <div className="text-gray-600">Komisyon Oranından Başlayan</div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-6">Cep POS Komisyon Oranları 2025 - Cep POS Nedir?</h2>
          
          <h3 className="text-2xl font-semibold mb-4">Cep POS Nedir?</h3>
          <p className="text-gray-600 mb-6">
            Cep POS, akıllı telefonunuzu bir ödeme terminaline dönüştüren yenilikçi bir çözümdür. 
            Herhangi bir ek donanım gerektirmeden, telefonunuz üzerinden güvenli bir şekilde kredi kartı ödemeleri alabilirsiniz.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Komisyon Oranları</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">İşlem Tipi</th>
                  <th className="border border-gray-300 px-4 py-2">Komisyon Oranı</th>
                  <th className="border border-gray-300 px-4 py-2">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Peşin</td>
                  <td className="border border-gray-300 px-4 py-2">%0,79 - %1,49</td>
                  <td className="border border-gray-300 px-4 py-2">Standart ödeme komisyonu</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3 Taksit</td>
                  <td className="border border-gray-300 px-4 py-2">%1,89 - %2,49</td>
                  <td className="border border-gray-300 px-4 py-2">Kısa vadeli taksit seçeneği</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">6 Taksit</td>
                  <td className="border border-gray-300 px-4 py-2">%2,29 - %3,49</td>
                  <td className="border border-gray-300 px-4 py-2">Orta vadeli taksit seçeneği</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">9 Taksit</td>
                  <td className="border border-gray-300 px-4 py-2">%3,29 - %4,49</td>
                  <td className="border border-gray-300 px-4 py-2">Uzun vadeli ödeme imkanı</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cep POS: Başvuru ve Kullanım</h3>
          <p className="text-gray-600 mb-6">
            Cep POS kullanımı için izlemeniz gereken adımlar:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Vergi levhası ve işletme belgeleri hazırlama</li>
            <li>Cep POS uygulamasını indirme ve kurulum</li>
            <li>Hesap doğrulama ve aktivasyon</li>
            <li>Ödeme alma testleri</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Cep POS: Güvenlik ve Sertifikasyon</h3>
          <p className="text-gray-600 mb-6">
            Cep POS sistemleri, yüksek güvenlik standartlarına sahiptir:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>End-to-end şifreleme</li>
            <li>3D Secure desteği</li>
            <li>Bankacılık düzenlemelerine uygunluk</li>
            <li>Düzenli güvenlik güncellemeleri</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Cep POS: Avantajlar ve Özellikler</h3>
          <p className="text-gray-600 mb-6">
            Cep POS kullanmanın işletmenize sağlayacağı faydalar:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Sıfır donanım maliyeti</li>
            <li>Düşük komisyon oranları</li>
            <li>Anında para transferi</li>
            <li>Detaylı satış raporları</li>
            <li>Çoklu kullanıcı desteği</li>
          </ul>
        </div>

        <CepPOSFAQ />
        <LatestBlogPosts />
      </div>
    </>;
};
export default CepPOS;
