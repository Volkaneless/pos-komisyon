
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SecondaryFooter = () => {
  const mainPages = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hesaplayıcı", path: "/calculator" },
    { name: "Blog", path: "/blog" },
    { name: "Hakkımızda", path: "/about" },
    { name: "İletişim", path: "/contact" },
  ];

  const posTypes = [
    { name: "Banka POS", path: "/pos-types/banka" },
    { name: "Yazarkasa POS", path: "/pos-types/yazarkasa" },
    { name: "Sanal POS", path: "/pos-types/sanal" },
    { name: "Mobil POS", path: "/pos-types/mobil" },
    { name: "Cep POS", path: "/pos-types/cep" },
  ];

  const posProviders = [
    { name: "Akbank POS", path: "/pos/akbank-fiziki-pos" },
    { name: "İş Bankası Anında POS", path: "/pos/isbank-aninda-pos" },
    { name: "Garanti POS", path: "/pos/garanti-pos" },
    { name: "Ziraat POS", path: "/pos/ziraat-pos" },
    { name: "QNB POS", path: "/pos/qnb-pay-pos" },
    { name: "Yapı Kredi POS", path: "/pos/tosla-isim-pos" },
  ];

  return (
    <div className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sayfalar</h3>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link 
                    to={page.path}
                    className="text-gray-600 hover:text-primary flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{page.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">POS Tipleri</h3>
            <ul className="space-y-2">
              {posTypes.map((type) => (
                <li key={type.path}>
                  <Link 
                    to={type.path}
                    className="text-gray-600 hover:text-primary flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{type.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">POS Sağlayıcıları</h3>
            <ul className="space-y-2">
              {posProviders.map((provider) => (
                <li key={provider.path}>
                  <Link 
                    to={provider.path}
                    className="text-gray-600 hover:text-primary flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{provider.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
