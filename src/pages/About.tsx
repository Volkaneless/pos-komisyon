import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | POS Komisyon - Şirket Bilgilerimiz</title>
        <meta name="description" content="POS Komisyon platformu hakkında bilgi edinin. POS cihazı karşılaştırma ve komisyon oranı hesaplama konusunda uzman ekibimiz ve misyonumuz." />
        <link rel="canonical" href="https://poskomisyon.com/about" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-8">Hakkımızda</h1>
        <p className="text-lg text-gray-600 mb-4">
          POS Komisyon, işletmelerin en uygun POS çözümlerini bulmalarına yardımcı olmak için kurulmuş bir platformdur. 
          Amacımız, kullanıcılarımıza en güncel ve doğru bilgileri sunarak, POS cihazları ve komisyon oranları hakkında bilinçli kararlar almalarını sağlamaktır.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Ekibimiz, finansal teknolojiler ve ödeme sistemleri alanında uzmanlaşmış profesyonellerden oluşmaktadır. 
          Müşteri memnuniyetini ön planda tutarak, her zaman en iyi hizmeti sunmayı hedefliyoruz.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          POS Komisyon platformu, kullanıcıların farklı bankaların ve ödeme kuruluşlarının POS cihazlarını karşılaştırmalarına, 
          komisyon oranlarını analiz etmelerine ve ihtiyaçlarına en uygun çözümü bulmalarına olanak tanır.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Bizimle iletişime geçmek veya daha fazla bilgi almak için lütfen <a href="/contact" className="text-primary hover:underline">İletişim</a> sayfamızı ziyaret edin.
        </p>
      </div>
    </>
  );
};

export default About;
