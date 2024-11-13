import { useState } from "react";
import { Calculator as CalculatorIcon, Save, History, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface CalculationHistory {
  amount: string;
  rate: string;
  commission: number;
  date: Date;
}

const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const { toast } = useToast();

  const calculateCommission = () => {
    if (!amount || !rate) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doldurun",
        variant: "destructive",
      });
      return;
    }

    const commission = (parseFloat(amount) * parseFloat(rate)) / 100;
    setResult(commission);

    // Add to history
    const newCalculation: CalculationHistory = {
      amount,
      rate,
      commission,
      date: new Date(),
    };
    setHistory([newCalculation, ...history]);

    toast({
      title: "Hesaplama Tamamlandı",
      description: "Komisyon tutarı başarıyla hesaplandı.",
    });
  };

  const calculateMonthlyCommission = () => {
    if (!amount || !rate) return null;
    const dailyAmount = parseFloat(amount);
    const monthlyAmount = dailyAmount * 30;
    return ((monthlyAmount * parseFloat(rate)) / 100).toFixed(2);
  };

  const calculateYearlyCommission = () => {
    if (!amount || !rate) return null;
    const dailyAmount = parseFloat(amount);
    const yearlyAmount = dailyAmount * 365;
    return ((yearlyAmount * parseFloat(rate)) / 100).toFixed(2);
  };

  const downloadHistory = () => {
    const historyText = history
      .map(
        (item) =>
          `Tutar: ${item.amount} TL, Oran: ${item.rate}%, Komisyon: ${
            item.commission
          } TL, Tarih: ${item.date.toLocaleDateString("tr-TR")}`
      )
      .join("\n");

    const blob = new Blob([historyText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "komisyon-hesaplama-gecmisi.txt";
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "İşlem Başarılı",
      description: "Hesaplama geçmişi indirildi.",
    });
  };

  return (
    <div className="glass-card rounded-xl p-8 max-w-md w-full animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <CalculatorIcon className="text-primary" size={24} />
        <h2 className="text-xl font-semibold">POS Komisyon Hesaplayıcı</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            İşlem Tutarı (TL)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field w-full"
            placeholder="1000"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Komisyon Oranı (%)
          </label>
          <div className="space-y-2">
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="input-field w-full"
              placeholder="1.99"
              step="0.01"
            />
            <Slider
              value={[parseFloat(rate) || 0]}
              onValueChange={(value) => setRate(value[0].toString())}
              max={10}
              step={0.01}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={calculateCommission}
            className="flex-1"
            variant="default"
          >
            Hesapla
          </Button>
          <Button
            onClick={() => setShowHistory(!showHistory)}
            variant="outline"
            size="icon"
          >
            <History className="h-4 w-4" />
          </Button>
          <Button onClick={downloadHistory} variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>

        {result !== null && (
          <div className="space-y-4">
            <div className="p-4 bg-primary-light rounded-lg">
              <p className="text-sm text-gray-600">Günlük Komisyon:</p>
              <p className="text-2xl font-semibold text-gray-900">
                {result.toFixed(2)} TL
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-sm text-gray-600">Aylık Tahmini:</p>
                <p className="text-lg font-semibold text-gray-900">
                  {calculateMonthlyCommission()} TL
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-sm text-gray-600">Yıllık Tahmini:</p>
                <p className="text-lg font-semibold text-gray-900">
                  {calculateYearlyCommission()} TL
                </p>
              </div>
            </div>
          </div>
        )}

        {showHistory && history.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold mb-3">Hesaplama Geçmişi</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-secondary rounded-lg text-sm flex justify-between items-center"
                >
                  <div>
                    <p>
                      {item.amount} TL × {item.rate}% = {item.commission.toFixed(2)}{" "}
                      TL
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.date.toLocaleDateString("tr-TR")}
                    </p>
                  </div>
                  <Save
                    className="h-4 w-4 text-gray-400 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => {
                      setAmount(item.amount);
                      setRate(item.rate);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;