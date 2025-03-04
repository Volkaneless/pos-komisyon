
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary">
        Ana Sayfa
      </Link>
      <div className="relative group">
        <button className="text-sm font-medium text-gray-700 hover:text-primary flex items-center">
          Komisyon Hesaplayıcılar
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <Link to="/calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            POS Komisyon Hesaplayıcı
          </Link>
          <Link to="/trendyol-komisyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Trendyol Komisyon Hesaplayıcı
          </Link>
          <Link to="/dolap-komisyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Dolap Komisyon Hesaplayıcı
          </Link>
          <Link to="/hepsiburada-komisyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Hepsiburada Komisyon Hesaplayıcı
          </Link>
          <Link to="/param-guvende-komisyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Param Güvende Komisyon Hesaplayıcı
          </Link>
          <Link to="/n11-komisyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            n11 Komisyon Hesaplayıcı
          </Link>
          <Link to="/shopier-komisyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Shopier Komisyon Hesaplayıcı
          </Link>
        </div>
      </div>
      <div className="relative group">
        <button className="text-sm font-medium text-gray-700 hover:text-primary flex items-center">
          POS Türleri
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <Link to="/pos-types/banka" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Banka POS
          </Link>
          <Link to="/pos-types/yazarkasa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Yazarkasa POS
          </Link>
          <Link to="/pos-types/sanal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sanal POS
          </Link>
          <Link to="/pos-types/mobil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Mobil POS
          </Link>
          <Link to="/pos-types/cep" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Cep POS
          </Link>
          <Link to="/pos-types/borsa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Borsa Aracı Kurum
          </Link>
        </div>
      </div>
      <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-primary">
        Blog
      </Link>
      <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary">
        Hakkında
      </Link>
      <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-primary">
        İletişim
      </Link>
    </div>
  );
};

export default DesktopMenu;
