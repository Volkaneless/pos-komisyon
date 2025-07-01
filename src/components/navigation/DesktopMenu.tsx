
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DesktopMenu = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="flex items-center space-x-6">
      {/* Ana Sayfa */}
      <Link 
        to="/" 
        className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
      >
        Ana Sayfa
      </Link>

      {/* POS Çözümleri Dropdown */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors duration-200">
          POS Çözümleri
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {isServicesOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
            <Link 
              to="/pos-types/banka" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Banka POS
            </Link>
            <Link 
              to="/pos-types/sanal" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Sanal POS
            </Link>
            <Link 
              to="/pos-types/mobil" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Mobil POS
            </Link>
            <Link 
              to="/pos-types/cep" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Cep POS
            </Link>
          </div>
        )}
      </div>

      {/* Blog */}
      <Link 
        to="/blog" 
        className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
      >
        Blog
      </Link>
    </div>
  );
};

export default DesktopMenu;
