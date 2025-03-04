
import { ParamGuvendeProvider } from "./ParamGuvendeContext";
import SellerTypeSelection from "./SellerTypeSelection";
import CategorySelection from "./CategorySelection";
import AmountInput from "./AmountInput";
import CalculatorActions from "./CalculatorActions";
import CalculationResults from "./CalculationResults";
import ImportantInfo from "./ImportantInfo";

const ParamGuvendeCalculator = () => {
  return (
    <ParamGuvendeProvider>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <SellerTypeSelection />
          <CategorySelection />
          <AmountInput />
          <CalculatorActions />
        </div>

        <div>
          <CalculationResults />
          <ImportantInfo />
        </div>
      </div>
    </ParamGuvendeProvider>
  );
};

export default ParamGuvendeCalculator;
