import { Link } from "react-router-dom";
import { Terminal, Smartphone, Cloud, CreditCard } from "lucide-react";

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
      <div className="flex flex-col space-y-3 p-4">
        <div className="space-y-2">
          <div className="font-medium text-sm text-gray-600 px-2">POS Türleri</div>
          <Link 
            to="/pos-types/yazarkasa"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm">Yazar Kasa POS</span>
          </Link>
          <Link 
            to="/pos-types/sanal"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-sm">Sanal POS</span>
          </Link>
          <Link 
            to="/pos-types/mobil"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm">Mobil POS</span>
          </Link>
          <Link 
            to="/pos-types/cep"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <CreditCard className="w-4 h-4 text-primary" />
            <span className="text-sm">Cep POS</span>
          </Link>
        </div>
        
        <div className="space-y-1 pt-2 border-t border-gray-100">
          <Link 
            to="/blog"
            className="block p-2 text-sm hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            Blog
          </Link>
          <Link 
            to="/about"
            className="block p-2 text-sm hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            Hakkımızda
          </Link>
          <Link 
            to="/contact"
            className="block p-2 text-sm hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            İletişim
          </Link>
          <Link 
            to="/calculator"
            className="block mt-4 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg text-center transition-all duration-300"
            onClick={onClose}
          >
            Hesaplayıcı
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;