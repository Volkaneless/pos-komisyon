interface SanalPOSHeaderProps {
  filteredCount: number;
}
const SanalPOSHeader = ({
  filteredCount
}: SanalPOSHeaderProps) => <div className="bg-white border-b sticky top-0 z-40">
    <div className="container mx-auto px-0 my-[22px] py-[84px]">
      <div className="max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Sanal POS Başvurusu - 2025 Komisyon Oranları
        </h1>
        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          E-ticaret siteniz için en uygun sanal POS çözümünü bulun. Güncel komisyon oranlarını karşılaştırın ve hemen başvurun.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            {filteredCount} Sanal POS Seçeneği
          </span>
          <span>✓ Güncel Komisyon Oranları</span>
          <span>✓ Hızlı Başvuru</span>
          <span>✓ Ücretsiz Karşılaştırma</span>
        </div>
      </div>
    </div>
  </div>;
export default SanalPOSHeader;