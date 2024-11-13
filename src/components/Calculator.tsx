import { useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";

const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateCommission = () => {
    const commission = (parseFloat(amount) * parseFloat(rate)) / 100;
    setResult(commission);
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
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="input-field w-full"
            placeholder="1.99"
            step="0.01"
          />
        </div>

        <button
          onClick={calculateCommission}
          className="button-primary w-full mt-4"
        >
          Hesapla
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-primary-light rounded-lg">
            <p className="text-sm text-gray-600">Komisyon Tutarı:</p>
            <p className="text-2xl font-semibold text-gray-900">
              {result.toFixed(2)} TL
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;