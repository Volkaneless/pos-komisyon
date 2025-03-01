
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">POS Komisyon</h3>
            <p className="text-sm text-gray-600 mb-4">
              2025 yılı güncel POS komisyon oranları ve karşılaştırma platformu.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">POS Türleri</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pos-types/yazarkasa" className="text-gray-600 hover:text-primary transition-colors">
                  Yazar Kasa POS
                </Link>
              </li>
              <li>
                <Link to="/pos-types/sanal" className="text-gray-600 hover:text-primary transition-colors">
                  Sanal POS
                </Link>
              </li>
              <li>
                <Link to="/pos-types/mobil" className="text-gray-600 hover:text-primary transition-colors">
                  Mobil POS
                </Link>
              </li>
              <li>
                <Link to="/pos-types/cep" className="text-gray-600 hover:text-primary transition-colors">
                  Cep POS
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-primary transition-colors">
                  POS Hesaplayıcı
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/gizlilik-politikasi" className="text-gray-600 hover:text-primary transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link to="/cerez-politikasi" className="text-gray-600 hover:text-primary transition-colors">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <a href="mailto:info@poskomisyon.com" className="text-gray-600 hover:text-primary transition-colors">
                  İletişim: info@poskomisyon.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {currentYear} POS Compare. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
