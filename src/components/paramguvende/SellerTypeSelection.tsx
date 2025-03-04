
import { Card } from "@/components/ui/card";
import { useParamGuvende } from "./ParamGuvendeContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SellerTypeSelection = () => {
  const { sellerType, setSellerType } = useParamGuvende();

  return (
    <Card className="p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Satıcı Tipi</h3>
      
      <RadioGroup 
        value={sellerType} 
        onValueChange={(value) => setSellerType(value as "individual" | "corporate")}
        className="flex flex-col space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="individual" id="individual" />
          <Label htmlFor="individual" className="cursor-pointer">Bireysel Satıcı</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="corporate" id="corporate" />
          <Label htmlFor="corporate" className="cursor-pointer">Kurumsal Satıcı</Label>
        </div>
      </RadioGroup>
    </Card>
  );
};

export default SellerTypeSelection;
