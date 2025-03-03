
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Terminal, Smartphone, Cloud, CreditCard, Banknote, ShoppingBag, ShoppingCart } from "lucide-react";

const DesktopMenu = () => {
  const location = useLocation();

  return (
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
                <Link 
                  to="/pos-types/banka"
                  className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                >
                  <Banknote className="w-4 h-4" />
                  <div>
                    <div className="font-medium">Banka POS</div>
                    <p className="text-sm text-gray-500">Bankaların sunduğu POS çözümleri</p>
                  </div>
                </Link>
                <Link 
                  to="/shopier-komisyon"
                  className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <div>
                    <div className="font-medium">Shopier</div>
                    <p className="text-sm text-gray-500">Shopier komisyon oranları ve hesaplama</p>
                  </div>
                </Link>
                <Link 
                  to="/trendyol-komisyon"
                  className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <div>
                    <div className="font-medium">Trendyol</div>
                    <p className="text-sm text-gray-500">Trendyol komisyon oranları ve hesaplama</p>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Link 
        to="/shopier-komisyon" 
        className={`text-sm transition-colors duration-200 ${
          location.pathname === "/shopier-komisyon" 
            ? "text-primary font-medium" 
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Shopier Komisyon
      </Link>
      
      <Link 
        to="/trendyol-komisyon" 
        className={`text-sm transition-colors duration-200 ${
          location.pathname === "/trendyol-komisyon" 
            ? "text-primary font-medium" 
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Trendyol Komisyon
      </Link>
      
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
  );
};

export default DesktopMenu;
