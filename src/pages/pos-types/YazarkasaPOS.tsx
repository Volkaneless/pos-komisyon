import { Helmet } from "react-helmet";
import { Terminal } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";

const YazarkasaPOS = () => {
  return (
    <>
      <Helmet>
        <title>Yazar Kasa POS Cihazları ve Komisyonları 2024</title>
        <meta 
          name="description" 
          content="Yazar kasa POS cihazları, ÖKC entegreli POS sistemleri ve komisyon oranları hakkında detaylı bilgi alın." 
        />
        <meta name="keywords" content="yazar kasa pos, ökc pos, yeni nesil yazar kasa, entegre pos cihazı, yazarkasa pos fiyatları" />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/yazarkasa" />
      </Helmet>
      
      <div>
        <POSTypePage
          title="Yazar Kasa POS Cihazları ve Komisyonları 2024"
          description="Yazar kasa POS cihazlarını karşılaştırın, size en uygun ÖKC POS çözümünü bulun."
          type="Yazar Kasa (ÖKC) POS"
          Icon={Terminal}
          whatIsContent=""
          advantages={[]}
        />

        <div className="container mx-auto px-4">
          <FAQ />
          <LatestBlogPosts />
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;