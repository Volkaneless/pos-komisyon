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
        fixed inset-x-0 top-[57px] p-4 md:hidden
        bg-white/80 backdrop-blur-lg border-b border-gray-100
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <div className="font-medium px-2">POS Türleri</div>
          <Link 
            to="/pos-types/yazarkasa"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <Terminal className="w-4 h-4" />
            <span>Yazar Kasa POS</span>
          </Link>
          <Link 
            to="/pos-types/sanal"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <Cloud className="w-4 h-4" />
            <span>Sanal POS</span>
          </Link>
          <Link 
            to="/pos-types/mobil"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobil POS</span>
          </Link>
          <Link 
            to="/pos-types/cep"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <CreditCard className="w-4 h-4" />
            <span>Cep POS</span>
          </Link>
        </div>
        
        <Link 
          to="/blog"
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={onClose}
        >
          Blog
        </Link>
        <Link 
          to="/about"
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={onClose}
        >
          Hakkımızda
        </Link>
        <Link 
          to="/contact"
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={onClose}
        >
          İletişim
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;