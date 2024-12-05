import { Helmet } from "react-helmet";

const POSFiyatlari = () => {
  return (
    <>
      <Helmet>
        <title>POS Cihazı Fiyatları 2024 | POS Komisyon</title>
        <meta 
          name="description" 
          content="2024 yılı güncel POS cihazı fiyatlarını karşılaştırın. En uygun POS cihazı fiyatlarını bulun ve hemen başvurun." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">POS Cihazı Fiyatları 2024</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Güncel POS cihazı fiyatlarını karşılaştırın, işletmeniz için en uygun POS çözümünü bulun.
          </p>

          <div className="space-y-8">
            {/* Content will be added later */}
            <p>Bu sayfa yapım aşamasındadır.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default POSFiyatlari;