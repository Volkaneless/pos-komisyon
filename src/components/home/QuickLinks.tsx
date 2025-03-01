
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      <Link
        to="/calculator"
        className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
      >
        <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
          POS Komisyon Hesaplayıcı
        </h3>
        <p className="text-sm text-gray-600">
          Güncel komisyon oranlarıyla hesaplama yapın
        </p>
      </Link>
      <Link
        to="/pos-types/sanal"
        className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
      >
        <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
          Sanal POS Çözümleri
        </h3>
        <p className="text-sm text-gray-600">
          E-ticaret için sanal POS seçenekleri
        </p>
      </Link>
      <Link
        to="/pos-types/yazarkasa"
        className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
      >
        <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
          Yazar Kasa POS
        </h3>
        <p className="text-sm text-gray-600">
          ÖKC entegreli POS sistemleri
        </p>
      </Link>
      <Link
        to="/pos-types/mobil"
        className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
      >
        <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
          Mobil POS Sistemleri
        </h3>
        <p className="text-sm text-gray-600">
          Taşınabilir POS çözümleri
        </p>
      </Link>
    </div>
  );
};

export default QuickLinks;
