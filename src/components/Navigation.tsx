import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          POS Compare
        </Link>
        <div className="flex gap-6">
          <Link 
            to="/" 
            className={`transition-colors duration-200 ${
              location.pathname === "/" 
                ? "text-primary font-medium" 
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Karşılaştır
          </Link>
          <Link 
            to="/calculator" 
            className={`transition-colors duration-200 ${
              location.pathname === "/calculator" 
                ? "text-primary font-medium" 
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Hesaplayıcı
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;