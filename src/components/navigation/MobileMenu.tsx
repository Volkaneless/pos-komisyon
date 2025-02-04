import { Link } from "react-router-dom";
import { Terminal, Cloud, Smartphone, CreditCard, Calculator, FileText, Phone, Info } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`
        fixed inset-x-0 top-16 md:hidden
        bg-white/95 backdrop-blur-lg border-b border-gray-100
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        shadow-lg z-40 max-h-[calc(100vh-4rem)] overflow-y-auto
      `}
    >
      <div className="flex flex-col space-y-4 p-4">
        <div className="space-y-2">
          <div className="font-medium text-sm text-gray-600 px-2">POS Türleri</div>
          <div className="grid grid-cols-2 gap-2">
            <Link 
              to="/pos-types/yazarkasa-pos"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm">Yazar Kasa POS</span>
            </Link>
            <Link 
              to="/pos-types/sanal-pos"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <Cloud className="w-4 h-4 text-primary" />
              <span className="text-sm">Sanal POS</span>
            </Link>
            <Link 
              to="/pos-types/mobil-pos"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm">Mobil POS</span>
            </Link>
            <Link 
              to="/pos-types/cep-pos"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-sm">Cep POS</span>
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-medium text-sm text-gray-600 px-2">Diğer</div>
          <div className="grid grid-cols-2 gap-2">
            <Link 
              to="/blog"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm">Blog</span>
            </Link>
            <Link 
              to="/about"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <Info className="w-4 h-4 text-primary" />
              <span className="text-sm">Hakkımızda</span>
            </Link>
            <Link 
              to="/contact"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">İletişim</span>
            </Link>
            <Link 
              to="/calculator"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={onClose}
            >
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm">Hesaplayıcı</span>
            </Link>
          </div>
        </div>

        <Link 
          to="/calculator"
          className="block mt-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg text-center transition-all duration-300"
          onClick={onClose}
        >
          POS Komisyon Hesapla
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;