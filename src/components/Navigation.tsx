import { Link, useLocation } from "react-router-dom";

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
            <Link 
              to="/" 
              className={`text-sm transition-colors duration-200 ${
                location.pathname === "/" 
                  ? "text-primary font-medium" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Karşılaştır
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

          <div className="flex items-center space-x-4">
            <Link 
              to="/calculator"
              className={`px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-colors duration-200`}
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