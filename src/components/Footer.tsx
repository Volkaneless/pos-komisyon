
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Hakkımızda</h3>
            <p className="text-sm mb-4">
              POS karşılaştırma platformumuz ile işletmeniz için en uygun POS çözümünü bulmanıza yardımcı oluyoruz. 
              En güncel komisyon oranları ve detaylı karşılaştırmalar ile doğru kararı vermenizi sağlıyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">POS Tipleri</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pos-types/yazarkasa" className="hover:text-white transition-colors">Yazarkasa POS</Link></li>
              <li><Link to="/pos-types/sanal" className="hover:text-white transition-colors">Sanal POS</Link></li>
              <li><Link to="/pos-types/mobil" className="hover:text-white transition-colors">Mobil POS</Link></li>
              <li><Link to="/pos-types/cep" className="hover:text-white transition-colors">Cep POS</Link></li>
              <li><Link to="/shopier-komisyon" className="hover:text-white transition-colors">Shopier Komisyon</Link></li>
              <li><Link to="/trendyol-komisyon" className="hover:text-white transition-colors">Trendyol Komisyon</Link></li>
              <li><Link to="/amazon-komisyon" className="hover:text-white transition-colors">Amazon Komisyon</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Blog Yazıları</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog/pos-komisyon-oranlari-2025" className="hover:text-white transition-colors">2025 POS Komisyon Oranları</Link></li>
              <li><Link to="/blog/pos-cihazi-nedir-nasil-kullanilir" className="hover:text-white transition-colors">POS Cihazı Nedir?</Link></li>
              <li><Link to="/blog/pos-cihazi-nasil-alinir" className="hover:text-white transition-colors">POS Cihazı Nasıl Alınır?</Link></li>
              <li><Link to="/blog/sanal-pos-vs-fiziki-pos-karsilastirma" className="hover:text-white transition-colors">Sanal vs Fiziki POS</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Sayfalar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition-colors">Komisyon Hesaplayıcı</Link></li>
              <li><Link to="/trendyol-komisyon" className="hover:text-white transition-colors">Trendyol Komisyon</Link></li>
              <li><Link to="/kripto-borsalari" className="hover:text-white transition-colors">Kripto Borsaları</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">İletişim</Link></li>
              <li><Link to="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
              <li><Link to="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p>&copy; 2024 POS Hesaplayıcı. Tüm hakları saklıdır.</p>
            </div>
            <div className="text-sm md:text-right">
              <ul className="flex flex-wrap gap-4 justify-start md:justify-end">
                <li><Link to="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
                <li><Link to="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">İletişim</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
