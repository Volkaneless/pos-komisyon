
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useHepsiburada } from "./HepsiburadaContext";

const CalculatorActions = () => {
  const { handleCalculate, handleClear } = useHepsiburada();

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        onClick={handleCalculate}
      >
        Hesapla
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
