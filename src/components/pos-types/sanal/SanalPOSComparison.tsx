
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SanalPOSComparison = () => {
  return (
    <div className="mb-16" id="comparison">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Sanal POS Karşılaştırma 2025</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Piyasadaki en popüler sanal POS çözümlerini karşılaştırın ve işletmeniz için en uygun seçeneği bulun.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left font-semibold text-gray-700">Sanal POS Sağlayıcı</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700">Tek Çekim Komisyon</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700">Aylık Ücret</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700">Kurulum Süresi</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700">Detaylar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 flex items-center">
                  <img src="/logos/iyzico.webp" alt="iyzico Logo" className="w-8 h-8 mr-3" />
                  <span>iyzico Sanal POS</span>
                </td>
                <td className="py-4 px-6 text-center">%1.95</td>
                <td className="py-4 px-6 text-center">0 TL</td>
                <td className="py-4 px-6 text-center">1-3 gün</td>
                <td className="py-4 px-6 text-center">
                  <Link to="/pos/iyzico-sanal-pos">
                    <Button variant="outline" size="sm">İncele</Button>
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 flex items-center">
                  <img src="/logos/paytr.webp" alt="PayTR Logo" className="w-8 h-8 mr-3" />
                  <span>PayTR Sanal POS</span>
                </td>
                <td className="py-4 px-6 text-center">%0.59</td>
                <td className="py-4 px-6 text-center">0 TL</td>
                <td className="py-4 px-6 text-center">1-2 gün</td>
                <td className="py-4 px-6 text-center">
                  <Link to="/pos/paytr-sanal">
                    <Button variant="outline" size="sm">İncele</Button>
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 flex items-center">
                  <img src="/logos/param.webp" alt="Param Logo" className="w-8 h-8 mr-3" />
                  <span>Param Sanal POS</span>
                </td>
                <td className="py-4 px-6 text-center">%1.89</td>
                <td className="py-4 px-6 text-center">0 TL</td>
                <td className="py-4 px-6 text-center">2-4 gün</td>
                <td className="py-4 px-6 text-center">
                  <Link to="/pos/param-sanal">
                    <Button variant="outline" size="sm">İncele</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SanalPOSComparison;
