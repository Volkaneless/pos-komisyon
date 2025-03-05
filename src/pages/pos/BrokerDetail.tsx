
import { useParams } from "react-router-dom";
import { borsaAraciKurumProviders } from "@/data/pos-types/borsaAraciKurum";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { useEffect } from "react";

const BrokerDetail = () => {
  const { id } = useParams();
  const broker = borsaAraciKurumProviders.find(b => b.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!broker) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-2xl font-bold mb-4">Aracı Kurum Bulunamadı</h1>
        <p>Aradığınız aracı kurum sistemimizde bulunamadı.</p>
      </div>
    );
  }

  return <POSDetailPage provider={broker} />;
};

export default BrokerDetail;
