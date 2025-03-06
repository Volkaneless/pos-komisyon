
import { Link } from "react-router-dom";

const SecondaryFooter = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">POS Türleri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pos-types/banka" className="text-gray-600 hover:text-primary">Banka POS</Link>
              </li>
              <li>
                <Link to="/pos-types/sanal" className="text-gray-600 hover:text-primary">Sanal POS</Link>
              </li>
              <li>
                <Link to="/pos-types/yazarkasa" className="text-gray-600 hover:text-primary">Yazarkasa POS</Link>
              </li>
              <li>
                <Link to="/pos-types/mobil" className="text-gray-600 hover:text-primary">Mobil POS</Link>
              </li>
              <li>
                <Link to="/pos-types/cep" className="text-gray-600 hover:text-primary">Cep POS</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hesaplayıcılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-primary">POS Komisyon Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/trendyol-komisyon" className="text-gray-600 hover:text-primary">Trendyol Komisyon Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/dolap-komisyon" className="text-gray-600 hover:text-primary">Dolap Komisyon Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/hepsiburada-komisyon" className="text-gray-600 hover:text-primary">Hepsiburada Komisyon Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/param-guvende-komisyon" className="text-gray-600 hover:text-primary">Param Güvende Komisyon Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/n11-komisyon" className="text-gray-600 hover:text-primary">n11 Komisyon Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/amazon-komisyon" className="text-gray-600 hover:text-primary">Amazon Komisyon Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/shopier-komisyon" className="text-gray-600 hover:text-primary">Shopier Komisyon Hesaplayıcı</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Blog Yazıları</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/pos-komisyon-oranlari" className="text-gray-600 hover:text-primary">POS Komisyon Oranları</Link>
              </li>
              <li>
                <Link to="/blog/pos-cihazi-nasil-alinir" className="text-gray-600 hover:text-primary">POS Cihazı Nasıl Alınır?</Link>
              </li>
              <li>
                <Link to="/blog/pos-cihazi-nedir-nasil-kullanilir" className="text-gray-600 hover:text-primary">POS Cihazı Nedir?</Link>
              </li>
              <li>
                <Link to="/blog/sanal-pos-fiziki-pos-karsilastirma" className="text-gray-600 hover:text-primary">Sanal POS vs Fiziki POS</Link>
              </li>
              <li>
                <Link to="/blog/pos-komisyon-oranlari-2025" className="text-gray-600 hover:text-primary">2025 Komisyon Oranları</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
