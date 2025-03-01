
const FeaturedInfo = () => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 p-6 rounded-lg mb-12">
      <h2 className="text-xl font-semibold mb-4">Öne Çıkan Bilgiler - 2025</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>2025 yılı güncel POS komisyon oranları</li>
          <li>Tüm banka ve fintech POS çözümleri</li>
          <li>Ücretsiz POS başvurusu imkanı</li>
        </ul>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Detaylı POS komisyon hesaplama araçları</li>
          <li>Banka karşılaştırma ve değerlendirme</li>
          <li>Sektöre özel POS çözümleri</li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturedInfo;
