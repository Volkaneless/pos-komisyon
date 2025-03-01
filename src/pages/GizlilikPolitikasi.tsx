
import { Helmet } from "react-helmet";

const GizlilikPolitikasi = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası | POS Komisyon</title>
        <meta name="description" content="POS Komisyon web sitesi gizlilik politikası ve kişisel verilerin korunması ile ilgili bilgiler." />
        <link rel="canonical" href="https://poskomisyon.com/gizlilik-politikasi" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Gizlilik Politikası</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <h2>1. Giriş</h2>
            <p>
              POS Komisyon ("biz", "bizim", "poskomisyon.com") olarak, gizliliğinizi korumayı taahhüt ediyoruz. 
              Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde kişisel verilerinizin nasıl toplandığını, 
              kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
            
            <h2>2. Topladığımız Veriler</h2>
            <p>Aşağıdaki kişisel verileri toplayabiliriz:</p>
            <ul>
              <li><strong>İletişim Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası gibi iletişim formları aracılığıyla gönderdiğiniz bilgiler.</li>
              <li><strong>Kullanım Verileri:</strong> IP adresi, tarayıcı türü, ziyaret ettiğiniz sayfalar, sitede geçirdiğiniz süre gibi web sitesi kullanımınıza ilişkin bilgiler.</li>
              <li><strong>Çerezler ve İzleme Teknolojileri:</strong> Web sitemizde bulunan çerezler ve diğer izleme teknolojileri aracılığıyla toplanan bilgiler.</li>
            </ul>
            
            <h2>3. Verileri Toplama Amacımız</h2>
            <p>Kişisel verilerinizi şu amaçlarla kullanıyoruz:</p>
            <ul>
              <li>Web sitemizi işletmek ve geliştirmek</li>
              <li>Size ürün ve hizmetlerimiz hakkında bilgi sağlamak</li>
              <li>İletişim taleplerinize yanıt vermek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>Web sitemizin performansını analiz etmek</li>
              <li>Kişiselleştirilmiş reklamlar sunmak</li>
            </ul>
            
            <h2>4. Üçüncü Taraflarla Veri Paylaşımı</h2>
            <p>Kişisel verilerinizi şu üçüncü taraflarla paylaşabiliriz:</p>
            <ul>
              <li><strong>Hizmet Sağlayıcılar:</strong> Web sitemizi işletmemize yardımcı olan hizmet sağlayıcılar (hosting, analiz, müşteri desteği).</li>
              <li><strong>Reklam Ortakları:</strong> Google AdSense gibi reklam hizmetleri sağlayan partnerlerimiz.</li>
              <li><strong>Yasal Yükümlülükler:</strong> Yasal bir yükümlülüğü yerine getirmek için gerekli olduğunda resmi kurumlar.</li>
            </ul>
            
            <h2>5. Google AdSense ve Reklamlar</h2>
            <p>
              Web sitemizde Google AdSense reklamlarını kullanıyoruz. Google AdSense, ziyaretçilerin ilgi alanlarına göre 
              reklamlar göstermek için çerezler kullanabilir. Google'ın veri toplama uygulamaları hakkında daha fazla bilgi 
              için <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Gizlilik ve Şartlar</a> sayfasını ziyaret edebilirsiniz.
            </p>
            
            <h2>6. Çerez Kullanımı</h2>
            <p>
              Web sitemizde, deneyiminizi geliştirmek ve analiz yapmak için çerezleri kullanıyoruz. 
              Çerezler hakkında daha fazla bilgi için <a href="/cerez-politikasi" className="text-primary hover:underline">Çerez Politikası</a> sayfamızı ziyaret edebilirsiniz.
            </p>
            
            <h2>7. Veri Koruma Haklarınız</h2>
            <p>
              GDPR ve diğer ilgili veri koruma yasaları kapsamında, kişisel verilerinizle ilgili belirli haklara sahipsiniz:
            </p>
            <ul>
              <li>Verilerinize erişim talep etme hakkı</li>
              <li>Verilerinizin düzeltilmesini veya silinmesini talep etme hakkı</li>
              <li>Verilerinizin işlenmesini kısıtlama hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
              <li>Rıza verdiğiniz durumlarda, rızanızı geri çekme hakkı</li>
            </ul>
            <p>
              Bu haklarınızı kullanmak için <a href="mailto:info@poskomisyon.com" className="text-primary hover:underline">info@poskomisyon.com</a> adresinden bizimle iletişime geçebilirsiniz.
            </p>
            
            <h2>8. Veri Saklama</h2>
            <p>
              Kişisel verilerinizi yalnızca toplandığı amaçlar için gerekli olduğu sürece saklarız. 
              Yasal yükümlülükler nedeniyle daha uzun süre saklanması gerekmedikçe, verilerinizi toplandıktan sonra en fazla 24 ay saklarız.
            </p>
            
            <h2>9. Güvenlik</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemleri alıyoruz. 
              Ancak, internet üzerinden hiçbir veri iletiminin %100 güvenli olmadığını lütfen unutmayın.
            </p>
            
            <h2>10. Çocukların Gizliliği</h2>
            <p>
              Web sitemiz 16 yaşın altındaki çocuklara yönelik değildir ve bilerek 16 yaşın altındaki çocuklardan kişisel veri toplamayız.
            </p>
            
            <h2>11. Bu Politikadaki Değişiklikler</h2>
            <p>
              Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. 
              Güncellemeler yapıldığında, web sitemizde yeni bir versiyon yayınlayarak sizi bilgilendireceğiz.
            </p>
            
            <h2>12. Bize Ulaşın</h2>
            <p>
              Bu Gizlilik Politikası hakkında sorularınız veya endişeleriniz varsa, 
              <a href="mailto:info@poskomisyon.com" className="text-primary hover:underline">info@poskomisyon.com</a> adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GizlilikPolitikasi;
