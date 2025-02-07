
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
