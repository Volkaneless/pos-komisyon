import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Terminal, Smartphone, Computer, Cloud, CreditCard, List } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const posTypes = [
    { 
      name: "Yazarkasa POS",
      icon: Terminal,
      path: "/pos-types/yazarkasa-pos",
      description: "Yazarkasa POS sistemleri ve komisyon oranları"
    },
    { 
      name: "Sanal POS",
      icon: Computer,
      path: "/pos-types/sanal-pos",
      description: "E-ticaret için sanal POS çözümleri"
    },
    { 
      name: "CepPOS",
      icon: Smartphone,
      path: "/pos-types/cep-pos",
      description: "Mobil cihazlar için CepPOS sistemleri"
    },
    { 
      name: "Sabit POS",
      icon: Terminal,
      path: "/pos-types/sabit-pos",
      description: "Masaüstü sabit POS cihazları"
    },
    { 
      name: "Ortak POS",
      icon: CreditCard,
      path: "/pos-types/ortak-pos",
      description: "Çoklu banka destekli ortak POS sistemleri"
    },
    { 
      name: "Döviz POS",
      icon: CreditCard,
      path: "/pos-types/doviz-pos",
      description: "Dövizli işlemler için POS çözümleri"
    },
    { 
      name: "Bulut Tabanlı POS",
      icon: Cloud,
      path: "/pos-types/bulut-pos",
      description: "Cloud tabanlı modern POS sistemleri"
    },
    { 
      name: "Self-Servis POS",
      icon: Terminal,
      path: "/pos-types/self-servis-pos",
      description: "Self servis ödeme sistemleri"
    },
    { 
      name: "Mobil POS",
      icon: Smartphone,
      path: "/pos-types/mobil-pos",
      description: "Taşınabilir mobil POS çözümleri"
    }
  ];

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
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                      {posTypes.map((posType) => (
                        <Link 
                          key={posType.path}
                          to={posType.path}
                          className="flex items-start gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <posType.icon className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <div className="font-medium">{posType.name}</div>
                            <p className="text-sm text-gray-500">{posType.description}</p>
                          </div>
                        </Link>
                      ))}
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