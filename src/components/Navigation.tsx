
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-lg py-2" : "bg-white/90 backdrop-blur-sm py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="POS Komisyon" className="h-9 w-auto" />
              </Link>
            </div>

            <div className="flex items-center flex-1 justify-between ml-8">
              <DesktopMenu />
              <div className="flex items-center space-x-3">
                <Link 
                  to="/calculator"
                  className="px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Hesaplayıcı
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-lg py-1.5" : "bg-white/90 backdrop-blur-sm py-2"
      }`}>
        <div className="flex items-center justify-between px-4">
          <Link to="/" className="flex items-center py-2">
            <img src="/logo.svg" alt="POS Komisyon" className="h-8 w-auto" />
          </Link>
          
          <div className="flex items-center space-x-3">
            <Link 
              to="/calculator"
              className="px-3 py-1.5 text-xs font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-all duration-300 shadow-sm"
            >
              Hesaplayıcı
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Menüyü Aç"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
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
