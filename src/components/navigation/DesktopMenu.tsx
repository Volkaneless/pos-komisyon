
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const DesktopMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
            Ana Sayfa
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-primary bg-transparent hover:bg-gray-50">
            Komisyon Hesaplayıcılar
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
              <Link to="/calculator" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">POS Komisyon Hesaplayıcı</div>
                  <p className="text-xs text-gray-500">POS seçeneklerini karşılaştırın</p>
                </div>
              </Link>
              
              <Link to="/trendyol-komisyon" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">Trendyol Komisyon</div>
                  <p className="text-xs text-gray-500">En güncel Trendyol komisyonları</p>
                </div>
              </Link>
              
              <Link to="/dolap-komisyon" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">Dolap Komisyon</div>
                  <p className="text-xs text-gray-500">En güncel Dolap komisyonları</p>
                </div>
              </Link>
              
              <Link to="/hepsiburada-komisyon" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">Hepsiburada Komisyon</div>
                  <p className="text-xs text-gray-500">Hepsiburada komisyon hesaplama</p>
                </div>
              </Link>
              
              <Link to="/n11-komisyon" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">n11 Komisyon</div>
                  <p className="text-xs text-gray-500">En güncel n11 komisyonları</p>
                </div>
              </Link>
              
              <Link to="/amazon-komisyon" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">Amazon Komisyon</div>
                  <p className="text-xs text-gray-500">Amazon komisyon oranları</p>
                </div>
              </Link>
              
              <Link to="/param-guvende-komisyon" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">Param Güvende</div>
                  <p className="text-xs text-gray-500">Param Güvende komisyonları</p>
                </div>
              </Link>
              
              <Link to="/shopier-komisyon" className="group flex h-full w-full flex-col justify-between rounded-md bg-gray-50 p-3 hover:bg-primary/10 transition-colors">
                <div>
                  <div className="font-medium group-hover:text-primary">Shopier Komisyon</div>
                  <p className="text-xs text-gray-500">Shopier komisyon hesaplama</p>
                </div>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-primary bg-transparent hover:bg-gray-50">
            POS Türleri
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-3 p-4 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/pos-types/banka" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10"
                  >
                    <div className="text-sm font-medium leading-none">Banka POS</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Bankaların sunduğu fiziki POS çözümleri
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/pos-types/yazarkasa" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10"
                  >
                    <div className="text-sm font-medium leading-none">Yazarkasa POS</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Yazarkasa ve POS bir arada çözümler
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/pos-types/sanal" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10"
                  >
                    <div className="text-sm font-medium leading-none">Sanal POS</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Çevrimiçi ödeme kabul çözümleri
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/pos-types/mobil" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10"
                  >
                    <div className="text-sm font-medium leading-none">Mobil POS</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Taşınabilir ödeme kabul çözümleri
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/pos-types/cep" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10"
                  >
                    <div className="text-sm font-medium leading-none">Cep POS</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Telefonunuzu POS'a dönüştürün
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/pos-types/borsa" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10"
                  >
                    <div className="text-sm font-medium leading-none">Borsa Aracı Kurum</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Borsa aracı kurumların komisyonları
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/kripto-borsalari" className="text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
            Kripto Borsaları
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
            Blog
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
            Hakkında
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
            İletişim
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
