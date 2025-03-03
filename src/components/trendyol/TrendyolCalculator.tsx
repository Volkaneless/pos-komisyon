
import { TrendyolProvider } from "./TrendyolContext";
import CategorySelection from "./CategorySelection";
import PriceInputs from "./PriceInputs";
import CalculatorActions from "./CalculatorActions";
import CalculationResults from "./CalculationResults";
import ImportantInfo from "./ImportantInfo";

const TrendyolCalculator = () => {
  return (
    <TrendyolProvider>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <CategorySelection />
          <PriceInputs />
          <CalculatorActions />
        </div>

        <div>
          <CalculationResults />
          <ImportantInfo />
        </div>
      </div>
    </TrendyolProvider>
  );
};

export default TrendyolCalculator;
