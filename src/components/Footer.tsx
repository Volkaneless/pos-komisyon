
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Top Section with Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-8 border-b border-gray-700">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="POS Komisyon" className="h-10 w-auto invert" />
            </Link>
          </div>
          <p className="text-sm md:text-base text-center md:text-right max-w-md">
            İşletmeniz için en uygun POS çözümünü bulmak artık daha kolay. 
            En güncel komisyon oranları ve detaylı karşılaştırmalarla yanınızdayız.
          </p>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4">Hakkımızda</h3>
            <p className="text-sm mb-6">
              POS karşılaştırma platformumuz ile işletmeniz için en uygun POS çözümünü bulmanıza yardımcı oluyoruz. 
              En güncel komisyon oranları ve detaylı karşılaştırmalar ile doğru kararı vermenizi sağlıyoruz.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-white transition-colors hover:scale-110" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors hover:scale-110" aria-label="Twitter">
                <Twitter size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors hover:scale-110" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700 space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:info@poskomisyon.com" className="text-sm hover:text-white transition-colors">
                  info@poskomisyon.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+902129999999" className="text-sm hover:text-white transition-colors">
                  +90 (212) 999 99 99
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <p className="text-sm">
                  İstanbul, Türkiye
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">POS Tipleri</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/pos-types/yazarkasa" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Yazarkasa POS</Link></li>
              <li><Link to="/pos-types/sanal" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Sanal POS</Link></li>
              <li><Link to="/pos-types/mobil" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Mobil POS</Link></li>
              <li><Link to="/pos-types/cep" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Cep POS</Link></li>
              <li><Link to="/shopier-komisyon" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Shopier Komisyon</Link></li>
              <li><Link to="/trendyol-komisyon" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Trendyol Komisyon</Link></li>
              <li><Link to="/amazon-komisyon" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Amazon Komisyon</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Blog Yazıları</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/blog/pos-komisyon-oranlari-2025" className="hover:text-white transition-colors hover:translate-x-1 inline-block">2025 POS Komisyon Oranları</Link></li>
              <li><Link to="/blog/pos-cihazi-nedir-nasil-kullanilir" className="hover:text-white transition-colors hover:translate-x-1 inline-block">POS Cihazı Nedir?</Link></li>
              <li><Link to="/blog/pos-cihazi-nasil-alinir" className="hover:text-white transition-colors hover:translate-x-1 inline-block">POS Cihazı Nasıl Alınır?</Link></li>
              <li><Link to="/blog/sanal-pos-vs-fiziki-pos-karsilastirma" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Sanal vs Fiziki POS</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Sayfalar</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Ana Sayfa</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Komisyon Hesaplayıcı</Link></li>
              <li><Link to="/trendyol-komisyon" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Trendyol Komisyon</Link></li>
              <li><Link to="/kripto-borsalari" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Kripto Borsaları</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Hakkımızda</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">İletişim</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p>&copy; {currentYear} POS Komisyon. Tüm hakları saklıdır.</p>
            </div>
            <div className="text-sm md:text-right">
              <ul className="flex flex-wrap gap-6 justify-start md:justify-end">
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
