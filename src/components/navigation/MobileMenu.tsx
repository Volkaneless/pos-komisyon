
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 h-full w-64 bg-white shadow-xl">
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <span className="text-lg font-medium">Menü</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link 
            to="/" 
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            Ana Sayfa
          </Link>
          <div className="space-y-2">
            <div className="px-4 text-sm font-medium text-gray-500">POS Türleri</div>
            <Link 
              to="/pos-types/yazarkasa"
              className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors pl-6"
              onClick={onClose}
            >
              Yazar Kasa POS
            </Link>
            <Link 
              to="/pos-types/sanal"
              className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors pl-6"
              onClick={onClose}
            >
              Sanal POS
            </Link>
            <Link 
              to="/pos-types/mobil"
              className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors pl-6"
              onClick={onClose}
            >
              Mobil POS
            </Link>
            <Link 
              to="/pos-types/cep"
              className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors pl-6"
              onClick={onClose}
            >
              Cep POS
            </Link>
            <Link 
              to="/pos-types/banka"
              className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors pl-6"
              onClick={onClose}
            >
              Banka POS
            </Link>
          </div>
          
          <Link 
            to="/shopier-komisyon"
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            Shopier Komisyon
          </Link>
          
          <Link 
            to="/trendyol-komisyon"
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            Trendyol Komisyon
          </Link>
          
          <Link 
            to="/dolap-komisyon"
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            Dolap Komisyon
          </Link>
          
          <Link 
            to="/blog"
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            Blog
          </Link>
          
          <Link 
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            Hakkımızda
          </Link>
          <Link 
            to="/contact"
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            İletişim
          </Link>
          <Link 
            to="/calculator"
            className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            onClick={onClose}
          >
            Hesaplayıcı
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
