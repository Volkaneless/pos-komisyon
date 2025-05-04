
import { Link } from "react-router-dom";

const SecondaryFooter = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          En Güncel Bilgiler ve Karşılaştırmalar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">
              POS Türleri
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/pos-types/banka" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Banka POS
                </Link>
              </li>
              <li>
                <Link to="/pos-types/sanal" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Sanal POS
                </Link>
              </li>
              <li>
                <Link to="/pos-types/yazarkasa" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Yazarkasa POS
                </Link>
              </li>
              <li>
                <Link to="/pos-types/mobil" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Mobil POS
                </Link>
              </li>
              <li>
                <Link to="/pos-types/cep" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Cep POS
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">
              Hesaplayıcılar
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  POS Komisyon Hesaplayıcı
                </Link>
              </li>
              <li>
                <Link to="/trendyol-komisyon" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Trendyol Komisyon Hesaplayıcı
                </Link>
              </li>
              <li>
                <Link to="/dolap-komisyon" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Dolap Komisyon Hesaplayıcı
                </Link>
              </li>
              <li>
                <Link to="/hepsiburada-komisyon" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Hepsiburada Komisyon Hesaplayıcı
                </Link>
              </li>
              <li>
                <Link to="/n11-komisyon" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  n11 Komisyon Hesaplayıcı
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">
              Blog Yazıları
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/blog/pos-komisyon-oranlari" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  POS Komisyon Oranları
                </Link>
              </li>
              <li>
                <Link to="/blog/pos-cihazi-nasil-alinir" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  POS Cihazı Nasıl Alınır?
                </Link>
              </li>
              <li>
                <Link to="/blog/pos-cihazi-nedir-nasil-kullanilir" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  POS Cihazı Nedir?
                </Link>
              </li>
              <li>
                <Link to="/blog/sanal-pos-fiziki-pos-karsilastirma" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Sanal POS vs Fiziki POS
                </Link>
              </li>
              <li>
                <Link to="/blog/pos-komisyon-oranlari-2025" className="text-gray-600 hover:text-primary flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  2025 Komisyon Oranları
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
