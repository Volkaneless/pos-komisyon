import { Helmet } from "react-helmet";
import MetaTags from "@/components/MetaTags";

const CerezPolitikasi = () => {
  return (
    <>
      <MetaTags
        title="Çerez Politikası | POS Komisyon"
        description="POS Komisyon çerez politikası. Web sitemizde kullanılan çerezler ve bunların nasıl yönetileceği hakkında bilgi alın."
        canonicalPath="/cerez-politikasi"
        priority={20}
      />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <article className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Çerez Politikası</h1>
          
          <div className="text-sm text-gray-500 mb-8">
            Son Güncelleme Tarihi: 1 Haziran 2024
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Çerezler Nedir?</h2>
          <p>
            Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza indirilen küçük metin dosyalarıdır. 
            Bu dosyalar, web sitemizi kullanımınızla ilgili bilgileri saklayarak size daha iyi bir kullanıcı deneyimi sunmamıza yardımcı olur.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Kullandığımız Çerez Türleri</h2>
          <p>
            Web sitemizde aşağıdaki çerez türlerini kullanmaktayız:
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">2.1 Zorunlu Çerezler</h3>
          <p>
            Bu çerezler, web sitemizin temel işlevlerini yerine getirmesi için gereklidir. 
            Bu çerezler olmadan, web sitesi düzgün çalışmayabilir ve bu çerezleri devre dışı bırakamazsınız.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">2.2 Analitik Çerezler</h3>
          <p>
            Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığını anlamamıza yardımcı olur. 
            Örneğin, hangi sayfaların en çok ziyaret edildiğini ve kullanıcıların site içinde nasıl gezindiğini gösterir. 
            Bu çerezlerin topladığı tüm bilgiler anonimdir.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">2.3 İşlevsellik Çerezleri</h3>
          <p>
            Bu çerezler, web sitemizi daha işlevsel ve kişiselleştirilmiş hale getirmek için kullanılır. 
            Örneğin, dil tercihlerinizi veya bölge ayarlarınızı hatırlar.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">2.4 Pazarlama Çerezleri</h3>
          <p>
            Bu çerezler, web sitemizde veya diğer web sitelerinde ilgi alanlarınıza yönelik reklamlar göstermek için kullanılır. 
            Bu çerezler, ziyaret ettiğiniz siteleri ve çevrimiçi etkinliklerinizi takip edebilir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Google Analytics ve Google AdSense</h2>
          <p>
            Web sitemizde, Google Analytics ve Google AdSense hizmetlerini kullanmaktayız. Bu hizmetler, site trafiğini analiz etmek 
            ve size ilgi alanlarınıza göre reklamlar göstermek için çerezler kullanır. Bu çerezler, IP adresiniz gibi kişisel verileri 
            toplayabilir, ancak bu bilgiler Google tarafından saklanır ve işlenir. 
          </p>
          <p>
            Google'ın veri toplama ve işleme uygulamaları hakkında daha fazla bilgi edinmek için 
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> Google'ın Çerez Politikasını</a> inceleyebilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p>
            Çoğu web tarayıcısı, çerezleri kabul etmeyi varsayılan olarak ayarlar. Ancak, tarayıcı ayarlarınızı değiştirerek 
            çerezleri engellemeyi veya çerezler hakkında sizi uyarmayı seçebilirsiniz. Çerezleri nasıl yönetebileceğiniz hakkında 
            daha fazla bilgi için tarayıcınızın yardım sayfalarını ziyaret edin:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/tr-tr/microsoft-edge/microsoft-edge-de-tanımlama-bilgilerini-silme-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
          </ul>
          <p>
            Ayrıca, sitemizin alt kısmında bulunan çerez ayarları panelini kullanarak çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Çerez Politikası Değişiklikleri</h2>
          <p>
            Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Politikada yapılan önemli değişiklikler hakkında sizi bilgilendireceğiz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. İletişim</h2>
          <p>
            Çerez politikamızla ilgili sorularınız için 
            <a href="mailto:info@poskomisyon.com" className="text-primary hover:underline"> info@poskomisyon.com</a> adresinden bizimle iletişime geçebilirsiniz.
          </p>
        </article>
      </div>
    </>
  );
};

export default CerezPolitikasi;
