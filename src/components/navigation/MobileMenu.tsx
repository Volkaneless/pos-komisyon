import { Link } from "react-router-dom";
import { Terminal, Cloud, Smartphone, CreditCard, Calculator, FileText, Phone, Info } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Menu Panel */}
      <div
        className={`
          fixed inset-x-0 top-16 md:hidden
          bg-white/95 backdrop-blur-lg
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          shadow-lg z-40 max-h-[calc(100vh-4rem)] overflow-y-auto
          border-t border-gray-200
        `}
      >
        <div className="px-4 py-6 space-y-6">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-900 px-2">POS Türleri</div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <Link 
                to="/pos-types/yazarkasa-pos"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Yazar Kasa POS</span>
              </Link>
              <Link 
                to="/pos-types/sanal-pos"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <Cloud className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Sanal POS</span>
              </Link>
              <Link 
                to="/pos-types/mobil-pos"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Mobil POS</span>
              </Link>
              <Link 
                to="/pos-types/cep-pos"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Cep POS</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-900 px-2">Diğer</div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <Link 
                to="/blog"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Blog</span>
              </Link>
              <Link 
                to="/about"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <Info className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Hakkımızda</span>
              </Link>
              <Link 
                to="/contact"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">İletişim</span>
              </Link>
              <Link 
                to="/calculator"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <Calculator className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Hesaplayıcı</span>
              </Link>
            </div>
          </div>

          <div className="mt-6 px-2">
            <Link 
              to="/calculator"
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              onClick={onClose}
            >
              POS Komisyon Hesapla
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;