
import { Card } from "@/components/ui/card";
import { useParamGuvende } from "./ParamGuvendeContext";

const CalculationResults = () => {
  const { calculations, amount, sellerType } = useParamGuvende();

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
              <span className="font-medium">Satış Tutarı</span>
              <span className="font-semibold">₺{parseFloat(amount).toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center py-2">
              {sellerType === "individual" && parseFloat(amount) > 10000 ? (
                <>
                  <span className="font-medium">Sabit Param Güvende İşlem Bedeli</span>
                  <span className="font-semibold text-red-500">-₺{calculations.commissionAmount.toFixed(2)}</span>
                </>
              ) : (
                <>
                  <span className="font-medium">Param Güvende İşlem Bedeli (%{calculations.commissionRate})</span>
                  <span className="font-semibold text-red-500">-₺{calculations.commissionAmount.toFixed(2)}</span>
                </>
              )}
            </div>
            <hr className="border-t-2 border-gray-400" />
            <div className="flex justify-between items-center py-3">
              <span className="font-bold">Net Tutar</span>
              <span className="font-bold text-lg text-green-500">
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
