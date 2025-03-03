
import { HepsiburadaProvider } from "./HepsiburadaContext";
import CategorySelection from "./CategorySelection";
import PriceInputs from "./PriceInputs";
import CalculatorActions from "./CalculatorActions";
import CalculationResults from "./CalculationResults";
import ImportantInfo from "./ImportantInfo";
import { Card } from "@/components/ui/card";

const HepsiburadaCalculator = () => {
  return (
    <HepsiburadaProvider>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="p-6 rounded-xl shadow-sm">
            <CategorySelection />
          </Card>
          
          <Card className="p-6 rounded-xl shadow-sm space-y-6">
            <PriceInputs />
          </Card>
          
          <CalculatorActions />
        </div>

        <div>
          <CalculationResults />
          <ImportantInfo />
        </div>
      </div>
    </HepsiburadaProvider>
  );
};

export default HepsiburadaCalculator;
