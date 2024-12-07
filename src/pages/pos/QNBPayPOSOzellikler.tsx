import { Helmet } from "react-helmet";
import { posProviders } from "@/data/posProviders";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const QNBPayPOSOzellikler = () => {
  const provider = posProviders.find(p => p.id === "qnbpay-pos")!;
  
  console.log('Rendering QNBPayPOSOzellikler page');

  return (
    <>
      <Helmet>
        <title>QNBPay POS Özellikleri ve Avantajları | POS Komisyon</title>
        <meta 
          name="description" 
          content="QNBPay POS cihazının tüm özellikleri, teknik detayları ve kullanım avantajları. QNBPay POS'un sunduğu hizmetleri keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/qnbpay-pos/ozellikleri" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8">QNBPay POS Özellikleri</h1>
        
        <div className="grid gap-6">
          {provider.features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg">{feature}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default QNBPayPOSOzellikler;