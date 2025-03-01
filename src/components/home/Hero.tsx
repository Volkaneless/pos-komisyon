
import { Link } from "react-router-dom";

interface HeroProps {
  pageTitle: string;
  pageDescription: string;
  currentDate: string;
}

const Hero = ({ pageTitle, pageDescription, currentDate }: HeroProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        {pageTitle}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
        2025 yılında güncel POS komisyon oranları ile işletme maliyetlerinizi optimize edin. Bankaların POS komisyon oranlarını karşılaştırın ve size en uygun POS çözümünü bulun.
      </p>
      <div className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-4 flex-wrap">
        <span>Son güncelleme: {currentDate}</span>
        <span className="hidden md:inline">•</span>
        <span>Giriş tarihi: 1 Ocak 2025</span>
      </div>
    </div>
  );
};

export default Hero;
