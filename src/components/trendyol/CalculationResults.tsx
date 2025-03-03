
import { Card } from "@/components/ui/card";
import { useTrendyol } from "./TrendyolContext";

const CalculationResults = () => {
  const { calculations, getCommissionRate, buyPrice, cargoPrice, sellerCargo } = useTrendyol();

  return (
    <Card className="p-6 rounded-xl shadow-lg bg-white">
      <h3 className="text-xl font-semibold text-primary mb-2">Hesaplama Sonucu</h3>
      {!calculations ? (
        <p className="text-gray-600">
          Sonucu görmek için tutar girip "Hesapla" butonuna basın
        </p>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Satış Fiyatı (KDV Dahil)</span>
              <span className="font-semibold">₺{calculations.sellPriceWithVat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Satış Fiyatı (KDV Hariç)</span>
              <span className="font-semibold">₺{calculations.sellPriceWithoutVat.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Komisyon Tutarı (%{getCommissionRate()})</span>
              <span className="font-semibold text-red-500">-₺{calculations.commissionAmount.toFixed(2)}</span>
            </div>
            {sellerCargo && (
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Kargo Gideri</span>
                <span className="font-semibold text-red-500">-₺{parseFloat(cargoPrice).toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Ürün Maliyeti</span>
              <span className="font-semibold text-red-500">-₺{parseFloat(buyPrice).toFixed(2)}</span>
            </div>
            <hr className="border-t-2 border-gray-400" />
            <div className="flex justify-between items-center py-3">
              <span className="font-bold">Net Kar</span>
              <span className={`font-bold text-lg ${calculations.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ₺{calculations.profit.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Kar Marjı</span>
              <span className={`font-semibold ${calculations.profitMargin >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                %{calculations.profitMargin.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CalculationResults;
