
import { useDolap } from "./DolapContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PriceInput = () => {
  const { price, setPrice, userRole } = useDolap();

  return (
    <Card className="p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">
        {userRole === "seller" ? "Satış Fiyatı" : "Alış Fiyatı"}
      </h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="price">
            {userRole === "seller" ? "Ürünün satış fiyatı (TL)" : "Ürünün alış fiyatı (TL)"}
          </Label>
          <div className="relative">
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="pl-8"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₺</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PriceInput;
