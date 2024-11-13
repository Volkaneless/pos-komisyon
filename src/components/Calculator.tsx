import { useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import BankInfoSection from "./calculator/BankInfoSection";
import CommissionSection from "./calculator/CommissionSection";
import ResultSection from "./calculator/ResultSection";
import InfoSection from "./calculator/InfoSection";

const Calculator = () => {
  const [bankName, setBankName] = useState("");
  const [posType, setPosType] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [installment, setInstallment] = useState("1");
  const [fixedFee, setFixedFee] = useState("0");
  const { toast } = useToast();

  return (
    <div className="space-y-8 w-full">
      <div className="glass-card rounded-xl p-8 max-w-6xl w-full mx-auto animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <CalculatorIcon className="text-primary" size={24} />
          <h2 className="text-xl font-semibold">POS Komisyon Hesaplayıcı</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <BankInfoSection
              bankName={bankName}
              setBankName={setBankName}
              posType={posType}
              setPosType={setPosType}
            />

            <CommissionSection
              amount={amount}
              setAmount={setAmount}
              rate={rate}
              setRate={setRate}
              installment={installment}
              setInstallment={setInstallment}
              fixedFee={fixedFee}
              setFixedFee={setFixedFee}
            />
          </div>

          <div className="space-y-8">
            <ResultSection
              amount={amount}
              rate={rate}
              installment={installment}
              fixedFee={fixedFee}
            />
          </div>
        </div>
      </div>

      <div className="glass-card rounded-xl p-8 max-w-6xl w-full mx-auto">
        <InfoSection />
      </div>
    </div>
  );
};

export default Calculator;