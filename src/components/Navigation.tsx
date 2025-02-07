
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="POS Komisyon" className="h-8 w-auto" />
              </Link>
            </div>

            <div className="flex items-center flex-1 justify-between ml-8">
              <DesktopMenu />
              <Link 
                to="/calculator"
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300"
              >
                Hesaplayıcı
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="POS Komisyon" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navigation;
