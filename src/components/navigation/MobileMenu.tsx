
import { X, Home, Calculator, Smartphone, CreditCard, Cloud, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/logo.svg" alt="POS Komisyon" className="h-6 w-auto" />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menüyü Kapat"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-1">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Ana Sayfa
          </Link>

          <Link
            to="/calculator"
            onClick={handleLinkClick}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
          >
            <Calculator className="w-5 h-5" />
            POS Hesaplayıcı
          </Link>

          {/* POS Solutions Section */}
          <div className="py-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              POS Çözümleri
            </h3>
            <div className="space-y-1">
              <Link
                to="/pos-types/banka"
                onClick={handleLinkClick}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
              >
                <CreditCard className="w-5 h-5" />
                Banka POS
              </Link>
              <Link
                to="/pos-types/sanal"
                onClick={handleLinkClick}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
              >
                <Cloud className="w-5 h-5" />
                Sanal POS
              </Link>
              <Link
                to="/pos-types/mobil"
                onClick={handleLinkClick}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
              >
                <Smartphone className="w-5 h-5" />
                Mobil POS
              </Link>
              <Link
                to="/pos-types/cep"
                onClick={handleLinkClick}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
              >
                <Smartphone className="w-5 h-5" />
                Cep POS
              </Link>
            </div>
          </div>

          <Link
            to="/blog"
            onClick={handleLinkClick}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
          >
            <BookOpen className="w-5 h-5" />
            Blog
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
