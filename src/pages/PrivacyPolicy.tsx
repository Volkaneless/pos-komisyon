import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası | POS Komisyon</title>
        <meta name="description" content="POS Komisyon gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler." />
        <link rel="canonical" href="https://poskomisyon.com/privacy-policy" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Gizlilik Politikası</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Veri Toplama</h2>
              <p>
                POS Komisyon olarak, hizmetlerimizi kullanırken aşağıdaki bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>İletişim bilgileri (ad, e-posta, telefon numarası)</li>
                <li>Kullanım verileri (site ziyaret bilgileri, tıklama verileri)</li>
                <li>Cihaz bilgileri (IP adresi, tarayıcı türü)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Çerezler</h2>
              <p>
                Sitemizde çerezler kullanılmaktadır. Bu çerezler:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Temel site fonksiyonlarını sağlamak</li>
                <li>Kullanıcı deneyimini iyileştirmek</li>
                <li>Google AdSense reklamlarını kişiselleştirmek</li>
                <li>Site trafiğini analiz etmek için kullanılmaktadır</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Verilerinizin Kullanımı</h2>
              <p>
                Toplanan veriler şu amaçlarla kullanılmaktadır:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Hizmet kalitesini artırmak</li>
                <li>Kişiselleştirilmiş içerik sunmak</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;