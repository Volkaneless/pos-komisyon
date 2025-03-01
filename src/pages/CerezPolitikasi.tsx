
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CerezPolitikasi = () => {
  return (
    <>
      <Helmet>
        <title>Çerez Politikası | POS Komisyon</title>
        <meta name="description" content="POS Komisyon web sitesi çerez politikası ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgiler." />
        <link rel="canonical" href="https://poskomisyon.com/cerez-politikasi" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Çerez Politikası</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <h2>1. Çerezler Nedir?</h2>
            <p>
              Çerezler (cookies), web siteleri tarafından bilgisayarınıza, akıllı telefonunuza veya tabletinize yerleştirilen küçük metin dosyalarıdır. 
              Bu dosyalar, web sitemizi ziyaret ettiğinizde tarayıcınız tarafından saklanır ve sonraki ziyaretlerinizde web sitesinin sizi tanımasını sağlar.
            </p>
            
            <h2>2. Çerez Türleri</h2>
            <p>Web sitemizde kullandığımız çerez türleri şunlardır:</p>
            
            <h3>2.1. Zorunlu Çerezler</h3>
            <p>
              Bu çerezler, web sitemizin düzgün çalışması için gereklidir ve sistemlerimizde kapatılamazlar. 
              Genellikle yalnızca sizin tarafınızdan yapılan ve gizlilik tercihlerinizi ayarlama, oturum açma veya form doldurma gibi hizmet taleplerine yanıt olarak ayarlanırlar.
            </p>
            
            <h3>2.2. Performans Çerezleri</h3>
            <p>
              Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığı hakkında bilgi toplamamıza olanak tanır. 
              Bu bilgileri, sitemizin performansını ve navigasyonunu iyileştirmek için kullanırız.
            </p>
            
            <h3>2.3. İşlevsellik Çerezleri</h3>
            <p>
              Bu çerezler, web sitemizde gelişmiş işlevsellik ve kişiselleştirme sağlar. 
              Bunlar, bizim tarafımızdan veya yerleştirdiğimiz üçüncü taraf sağlayıcılar tarafından ayarlanabilir.
            </p>
            
            <h3>2.4. Hedefleme/Reklam Çerezleri</h3>
            <p>
              Bu çerezler, Google AdSense gibi reklam ortaklarımız tarafından web sitemize yerleştirilebilir. 
              Bu ortaklar, ilgi alanlarınız hakkında bilgi toplamak ve size ilgili reklamlar göstermek için bu çerezleri kullanabilir.
            </p>
            
            <h2>3. Kullandığımız Çerezler</h2>
            <p>Web sitemizde kullandığımız belirli çerezler:</p>
            
            <h3>3.1. Google Analytics</h3>
            <p>
              Web sitemizin kullanımını analiz etmek için Google Analytics'i kullanıyoruz. 
              Google Analytics, çerezler kullanarak web sitemizi nasıl kullandığınız hakkında bilgi toplar.
            </p>
            
            <h3>3.2. Google AdSense</h3>
            <p>
              Web sitemizde kişiselleştirilmiş reklamlar göstermek için Google AdSense hizmetini kullanıyoruz. 
              Google AdSense, ilgi alanlarınıza dayalı reklamlar göstermek için çerezler kullanır.
            </p>
            
            <h2>4. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
            <p>
              Çoğu web tarayıcısı, çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. 
              Ancak, tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez ayarlandığında uyarı alabilirsiniz. 
              Web sitemizde çerez kullanımını reddetmek istiyorsanız, tarayıcınızın ayarlarını değiştirebilirsiniz.
            </p>
            
            <p>Popüler tarayıcılarda çerezleri yönetme yöntemleri:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/tr-tr/microsoft-edge/microsoft-edge-de-%C3%A7erezleri-silme-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            </ul>
            
            <p>
              Ayrıca, web sitemizde bulunan "Çerez Tercihlerini Yönet" seçeneğini kullanarak da çerez tercihlerinizi düzenleyebilirsiniz.
            </p>
            
            <p>
              Çerezleri devre dışı bırakmanın, web sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabileceğini lütfen unutmayın.
            </p>
            
            <h2>5. Reklam Çerezlerini Reddetme</h2>
            <p>
              Google tarafından sağlanan reklamları kişiselleştirmeyi reddetmek isterseniz, 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Reklam Ayarları</a> sayfasını ziyaret edebilirsiniz.
            </p>
            <p>
              Ayrıca, <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices</a> web sitesini ziyaret ederek birçok reklam ağının davranışsal reklamcılık uygulamalarını devre dışı bırakabilirsiniz.
            </p>
            
            <h2>6. İletişim</h2>
            <p>
              Bu Çerez Politikası hakkında sorularınız veya endişeleriniz varsa, lütfen <a href="mailto:info@poskomisyon.com" className="text-primary hover:underline">info@poskomisyon.com</a> adresinden bizimle iletişime geçin.
            </p>
            
            <p>
              Daha fazla bilgi için <Link to="/gizlilik-politikasi" className="text-primary hover:underline">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
            </p>
          </div>
          
          <div className="mt-8 p-6 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">Çerez Tercihlerini Yönet</h3>
            <p className="mb-4">Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.</p>
            
            <button 
              onClick={() => {
                localStorage.removeItem("cookieConsent");
                localStorage.removeItem("cookieConsentTimestamp");
                window.location.reload();
              }}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            >
              Çerez Tercihlerini Yönet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CerezPolitikasi;
