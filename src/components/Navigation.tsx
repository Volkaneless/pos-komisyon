
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Calculator } from "lucide-react";
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
      <nav className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-lg py-2" : "bg-white/90 backdrop-blur-sm py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="POS Komisyon" className="h-8 w-auto" />
            </Link>

            {/* Desktop Menu - Simplified */}
            <div className="flex items-center space-x-8">
              <DesktopMenu />
              <Link 
                to="/calculator"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Calculator className="w-4 h-4" />
                Hesapla
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-lg" : "bg-white/90 backdrop-blur-sm"
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="POS Komisyon" className="h-7 w-auto" />
          </Link>
          
          {/* Mobile Actions */}
          <div className="flex items-center space-x-2">
            <Link 
              to="/calculator"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-all duration-200"
            >
              <Calculator className="w-3.5 h-3.5" />
              Hesapla
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menüyü Aç"
            >
              <Menu className="h-5 w-5 text-gray-700" />
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
