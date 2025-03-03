
import { Card } from "@/components/ui/card";
import { useDolap } from "./DolapContext";

const CalculationResults = () => {
  const { calculations, userRole } = useDolap();

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
              <span className="font-medium">
                {userRole === "seller" ? "Satış Fiyatı" : "Alış Fiyatı"}
              </span>
              <span className="font-semibold">₺{parseFloat(calculations.netAmount.toFixed(2)) - (userRole === "buyer" ? calculations.commissionAmount : -calculations.commissionAmount)}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Komisyon Tutarı ({calculations.commissionRate})</span>
              <span className="font-semibold text-red-500">
                {userRole === "seller" ? "-" : "+"}₺{calculations.commissionAmount.toFixed(2)}
              </span>
            </div>
            <hr className="border-t-2 border-gray-400" />
            <div className="flex justify-between items-center py-3">
              <span className="font-bold">
                {userRole === "seller" ? "Alacağınız Net Tutar" : "Ödeyeceğiniz Toplam Tutar"}
              </span>
              <span className="font-bold text-lg">
                ₺{calculations.netAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CalculationResults;
