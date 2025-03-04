
import { Button } from "@/components/ui/button";
import { Calculator, Trash2 } from "lucide-react";
import { useN11 } from "./N11Context";

const CalculatorActions = () => {
  const { handleCalculate, handleClear } = useN11();

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button 
        className="w-full bg-primary hover:bg-primary/90"
        onClick={handleCalculate}
      >
        <Calculator className="h-4 w-4 mr-2" /> Hesapla
      </Button>
      <Button 
        variant="outline" 
        className="w-full"
        onClick={handleClear}
      >
        <Trash2 className="h-4 w-4 mr-2" /> Temizle
      </Button>
    </div>
  );
};

export default CalculatorActions;
