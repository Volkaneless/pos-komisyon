import { Helmet } from "react-helmet";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Kullanım Koşulları | POS Komisyon</title>
        <meta name="description" content="POS Komisyon kullanım koşulları ve hizmet şartları hakkında bilgiler." />
        <link rel="canonical" href="https://poskomisyon.com/terms-of-service" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Kullanım Koşulları</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Hizmet Kullanımı</h2>
              <p>
                POS Komisyon platformunu kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>18 yaşından büyük olduğunuzu</li>
                <li>Verdiğiniz bilgilerin doğru olduğunu</li>
                <li>Hizmeti yasal amaçlar için kullanacağınızı</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Fikri Mülkiyet</h2>
              <p>
                Site içeriğinin tüm hakları saklıdır. İzinsiz kullanılamaz ve kopyalanamaz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Sorumluluk Reddi</h2>
              <p>
                POS Komisyon, sunduğu bilgilerin doğruluğu için çaba göstermekle birlikte, 
                kesinliği konusunda garanti vermemektedir. Kullanıcılar, kararlarını 
                kendi sorumluluklarında vermelidir.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;