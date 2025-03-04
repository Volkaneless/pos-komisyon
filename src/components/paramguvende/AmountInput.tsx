
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useParamGuvende } from "./ParamGuvendeContext";

const AmountInput = () => {
  const { amount, setAmount, sellerType } = useParamGuvende();

  return (
    <Card className="p-6 rounded-xl shadow-sm">
      <Label htmlFor="amount">Satış Tutarı</Label>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-gray-500">₺</span>
        <Input
          id="amount"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
      {sellerType === "individual" && (
        <div className="mt-4 bg-gray-50 p-3 rounded-md">
          <h4 className="font-medium mb-2">Bireysel Satıcı Komisyon Oranları:</h4>
          <ul className="space-y-1 text-sm">
            <li>0-500 TL: %15</li>
            <li>501-1.500 TL: %10</li>
            <li>1.501-10.000 TL: %4</li>
            <li>10.000 TL üzeri: Sabit 900 TL</li>
          </ul>
        </div>
      )}
    </Card>
  );
};

export default AmountInput;
