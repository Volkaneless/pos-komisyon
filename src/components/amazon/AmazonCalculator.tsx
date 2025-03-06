
import { AmazonProvider } from "./AmazonContext";
import CategorySelection from "./CategorySelection";
import PriceInputs from "./PriceInputs";
import ProductDetails from "./ProductDetails";
import CalculatorActions from "./CalculatorActions";
import CalculationResults from "./CalculationResults";
import ImportantInfo from "./ImportantInfo";

const AmazonCalculator = () => {
  return (
    <AmazonProvider>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <CategorySelection />
          <PriceInputs />
          <ProductDetails />
          <CalculatorActions />
        </div>

        <div>
          <CalculationResults />
          <ImportantInfo />
        </div>
      </div>
    </AmazonProvider>
  );
};

export default AmazonCalculator;
