import { Link } from "react-router-dom";
import DesktopMenu from "./navigation/DesktopMenu";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;