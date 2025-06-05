
interface SanalPOSHeaderProps {
  filteredCount: number;
}

const SanalPOSHeader = ({
  filteredCount
}: SanalPOSHeaderProps) => (
  <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Sanal POS Başvurusu - 2025 Komisyon Oranları
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-3xl">
            E-ticaret siteniz için en uygun sanal POS çözümünü bulun. Güncel komisyon oranlarını karşılaştırın ve hemen başvurun.
          </p>
          
          {/* Feature badges - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-primary/10 text-primary px-3 md:px-4 py-2 md:py-2.5 rounded-full font-medium text-xs md:text-sm text-center">
              {filteredCount} Sanal POS Seçeneği
            </div>
            <div className="bg-green-50 text-green-700 px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm text-center font-medium">
              ✓ Güncel Komisyon Oranları
            </div>
            <div className="bg-blue-50 text-blue-700 px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm text-center font-medium">
              ✓ Hızlı Başvuru
            </div>
            <div className="bg-purple-50 text-purple-700 px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm text-center font-medium">
              ✓ Ücretsiz Karşılaştırma
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SanalPOSHeader;
