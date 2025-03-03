
import { DolapProvider } from "./DolapContext";
import RoleSelection from "./RoleSelection";
import PriceInput from "./PriceInput";
import CalculatorActions from "./CalculatorActions";
import CalculationResults from "./CalculationResults";
import ImportantInfo from "./ImportantInfo";

const DolapCalculator = () => {
  return (
    <DolapProvider>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <RoleSelection />
          <PriceInput />
          <CalculatorActions />
        </div>

        <div>
          <CalculationResults />
          <ImportantInfo />
        </div>
      </div>
    </DolapProvider>
  );
};

export default DolapCalculator;
