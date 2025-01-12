import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./navigation/MobileMenu";
import DesktopMenu from "./navigation/DesktopMenu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/80 to-primary-light/50 backdrop-blur-lg border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-105">
                POS Compare
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Mobile Navigation */}
          <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/calculator"
              className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Hesaplayıcı
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;