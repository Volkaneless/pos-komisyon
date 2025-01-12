import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Terminal, Smartphone, Computer, Cloud, CreditCard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              POS Compare
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>POS Türleri</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <Link 
                        to="/pos-types/yazarkasa"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                      >
                        <Terminal className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Yazar Kasa POS</div>
                          <p className="text-sm text-gray-500">Yazar kasa entegreli POS cihazları</p>
                        </div>
                      </Link>
                      <Link 
                        to="/pos-types/sanal"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                      >
                        <Cloud className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Sanal POS</div>
                          <p className="text-sm text-gray-500">E-ticaret ve online ödemeler için</p>
                        </div>
                      </Link>
                      <Link 
                        to="/pos-types/mobil"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                      >
                        <Smartphone className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Mobil POS</div>
                          <p className="text-sm text-gray-500">Taşınabilir POS cihazları</p>
                        </div>
                      </Link>
                      <Link 
                        to="/pos-types/cep"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                      >
                        <CreditCard className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Cep POS</div>
                          <p className="text-sm text-gray-500">Akıllı telefon uygulamalı POS çözümleri</p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/blog" 
              className={`text-sm transition-colors duration-200 ${
                location.pathname === "/blog" 
                  ? "text-primary font-medium" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors duration-200 ${
                location.pathname === "/about" 
                  ? "text-primary font-medium" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors duration-200 ${
                location.pathname === "/contact" 
                  ? "text-primary font-medium" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className={`
            fixed inset-x-0 top-[57px] p-4 md:hidden
            bg-white/80 backdrop-blur-lg border-b border-gray-100
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          `}>
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="font-medium px-2">POS Türleri</div>
                <Link 
                  to="/pos-types/yazarkasa"
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Terminal className="w-4 h-4" />
                  <span>Yazar Kasa POS</span>
                </Link>
                <Link 
                  to="/pos-types/sanal"
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Cloud className="w-4 h-4" />
                  <span>Sanal POS</span>
                </Link>
                <Link 
                  to="/pos-types/mobil"
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Mobil POS</span>
                </Link>
                <Link 
                  to="/pos-types/cep"
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cep POS</span>
                </Link>
              </div>
              
              <Link 
                to="/blog"
                className="p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about"
                className="p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                to="/contact"
                className="p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/calculator"
              className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-colors duration-200"
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