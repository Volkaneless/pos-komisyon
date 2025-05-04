
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SecondaryFooter = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          En Güncel Bilgiler ve Karşılaştırmalar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2 flex items-center">
              <span className="w-2 h-6 bg-primary rounded-full mr-2.5"></span>
              POS Türleri
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pos-types/banka" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Banka POS</span>
                </Link>
              </li>
              <li>
                <Link to="/pos-types/sanal" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Sanal POS</span>
                </Link>
              </li>
              <li>
                <Link to="/pos-types/yazarkasa" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Yazarkasa POS</span>
                </Link>
              </li>
              <li>
                <Link to="/pos-types/mobil" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Mobil POS</span>
                </Link>
              </li>
              <li>
                <Link to="/pos-types/cep" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Cep POS</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2 flex items-center">
              <span className="w-2 h-6 bg-primary rounded-full mr-2.5"></span>
              Hesaplayıcılar
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>POS Komisyon Hesaplayıcı</span>
                </Link>
              </li>
              <li>
                <Link to="/trendyol-komisyon" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Trendyol Komisyon Hesaplayıcı</span>
                </Link>
              </li>
              <li>
                <Link to="/dolap-komisyon" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Dolap Komisyon Hesaplayıcı</span>
                </Link>
              </li>
              <li>
                <Link to="/hepsiburada-komisyon" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Hepsiburada Komisyon Hesaplayıcı</span>
                </Link>
              </li>
              <li>
                <Link to="/n11-komisyon" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>n11 Komisyon Hesaplayıcı</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2 flex items-center">
              <span className="w-2 h-6 bg-primary rounded-full mr-2.5"></span>
              Blog Yazıları
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog/pos-cihazi-nedir-nasil-kullanilir" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>POS Cihazı Nedir?</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/pos-cihazi-nasil-alinir" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>POS Cihazı Nasıl Alınır?</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/pos-cihazi-secerken-dikkat-edilmesi-gerekenler" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>POS Cihazı Seçerken Dikkat Edilmesi Gerekenler</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/pos-komisyon-oranlari-2025" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>2025 Komisyon Oranları</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/sanal-pos-fiziki-pos-karsilastirma" className="text-gray-600 hover:text-primary flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Sanal POS vs Fiziki POS</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
