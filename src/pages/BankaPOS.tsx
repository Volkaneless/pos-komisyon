import { Helmet } from "react-helmet";

const BankaPOS = () => {
  return (
    <>
      <Helmet>
        <title>Banka POS Komisyon Oranları 2024 | POS Komisyon</title>
        <meta 
          name="description" 
          content="2024 yılı güncel banka POS komisyon oranlarını karşılaştırın. En uygun banka POS komisyon oranlarını bulun ve hemen başvurun." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Banka POS Komisyon Oranları 2024</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun POS çözümünü bulun.
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

export default BankaPOS;