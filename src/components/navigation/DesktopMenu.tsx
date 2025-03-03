
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopMenu = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
            Ana Sayfa
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary">POS Türleri</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
              <Link to="/pos-types/yazarkasa" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                <div className="font-medium">Yazar Kasa POS</div>
                <div className="text-sm text-gray-500">Tek cihazda hem yazarkasa hem POS özelliği</div>
              </Link>
              <Link to="/pos-types/sanal" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                <div className="font-medium">Sanal POS</div>
                <div className="text-sm text-gray-500">Online ödemeler için entegre çözümler</div>
              </Link>
              <Link to="/pos-types/mobil" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                <div className="font-medium">Mobil POS</div>
                <div className="text-sm text-gray-500">Taşınabilir ve kablosuz ödeme cihazları</div>
              </Link>
              <Link to="/pos-types/cep" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                <div className="font-medium">Cep POS</div>
                <div className="text-sm text-gray-500">Akıllı telefonları ödeme terminaline dönüştürür</div>
              </Link>
              <Link to="/pos-types/banka" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                <div className="font-medium">Banka POS</div>
                <div className="text-sm text-gray-500">Bankaların sunduğu klasik POS çözümleri</div>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/shopier-komisyon" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
            Shopier Komisyon
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/trendyol-komisyon" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
            Trendyol Komisyon
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/dolap-komisyon" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
            Dolap Komisyon
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/blog" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
            Blog
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
            Hakkımızda
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/contact" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
            İletişim
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
