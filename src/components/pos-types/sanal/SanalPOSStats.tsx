
const SanalPOSStats = () => {
  return (
    <div className="mb-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Neden Sanal POS?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          E-ticaret işletmeniz için en uygun sanal POS çözümünü sunuyoruz. Güvenli, hızlı ve ekonomik çözümlerle işletmenizin büyümesine katkı sağlıyoruz.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2">1000+</div>
          <div className="text-gray-600">Aktif E-ticaret Müşterisi</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2">%99.9</div>
          <div className="text-gray-600">Uptime Garantisi</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2">15+</div>
          <div className="text-gray-600">Entegrasyon Seçeneği</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold text-primary mb-2">%0.59</div>
          <div className="text-gray-600">Komisyon Oranından Başlayan</div>
        </div>
      </div>
    </div>
  );
};

export default SanalPOSStats;
