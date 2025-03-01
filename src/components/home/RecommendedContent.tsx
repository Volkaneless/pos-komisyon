
import { Link } from "react-router-dom";

const RecommendedContent = () => {
  return (
    <div className="mt-16 mb-12">
      <h2 className="text-2xl font-semibold mb-6">Önerilen İçerikler</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/blog/pos-cihazi-nasil-alinir"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
        >
          <h3 className="font-medium text-primary mb-2">POS Cihazı Nasıl Alınır?</h3>
          <p className="text-sm text-gray-600">Detaylı başvuru rehberi</p>
        </Link>
        <Link
          to="/blog/pos-komisyon-oranlari"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
        >
          <h3 className="font-medium text-primary mb-2">POS Komisyon Oranları</h3>
          <p className="text-sm text-gray-600">2025 güncel oranlar</p>
        </Link>
        <Link
          to="/blog/sanal-pos-fiziki-pos-karsilastirma"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
        >
          <h3 className="font-medium text-primary mb-2">Sanal POS vs Fiziki POS</h3>
          <p className="text-sm text-gray-600">Detaylı karşılaştırma</p>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedContent;
