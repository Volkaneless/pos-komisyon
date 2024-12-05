import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Hakkımızda</h3>
            <p className="text-sm">
              POS karşılaştırma platformumuz ile işletmeniz için en uygun POS çözümünü bulmanıza yardımcı oluyoruz.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="/calculator" className="hover:text-white transition-colors">Komisyon Hesaplayıcı</a></li>
              <li><a href="/banka-pos" className="hover:text-white transition-colors">Banka POS Komisyonları</a></li>
              <li><a href="/pos-fiyatlari" className="hover:text-white transition-colors">POS Cihazı Fiyatları</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li>info@poshesaplayici.com</li>
              <li>+90 (212) 123 45 67</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Bizi Takip Edin</h3>
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
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 POS Hesaplayıcı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;