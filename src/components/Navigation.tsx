import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Terminal, Smartphone, Computer, Cloud, CreditCard, List } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              POS Compare
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>POS Türleri</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <Link 
                        to="/pos-types/yazarkasa"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
                      >
                        <Terminal className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Yazar Kasa POS</div>
                          <p className="text-sm text-gray-500">Yazar kasa entegreli POS cihazları</p>
                        </div>
                      </Link>
                      <Link 
                        to="/pos-types/sanal"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
                      >
                        <Cloud className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Sanal POS</div>
                          <p className="text-sm text-gray-500">E-ticaret ve online ödemeler için</p>
                        </div>
                      </Link>
                      <Link 
                        to="/pos-types/mobil"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
                      >
                        <Smartphone className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Mobil POS</div>
                          <p className="text-sm text-gray-500">Taşınabilir POS cihazları</p>
                        </div>
                      </Link>
                      <Link 
                        to="/pos-types/cep"
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
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

          <div className="flex items-center space-x-4">
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