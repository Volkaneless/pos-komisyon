
import { useDolap } from "./DolapContext";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ShoppingBag, Tag } from "lucide-react";

const RoleSelection = () => {
  const { userRole, setUserRole } = useDolap();

  return (
    <Card className="p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Rolünüzü Seçin</h3>
      <RadioGroup 
        value={userRole} 
        onValueChange={(value) => setUserRole(value as "seller" | "buyer")}
        className="grid grid-cols-2 gap-4"
      >
        <div className={`relative rounded-lg border p-4 cursor-pointer ${userRole === "seller" ? "bg-primary/10 border-primary" : "hover:bg-gray-50"}`}>
          <RadioGroupItem value="seller" id="seller" className="absolute top-4 right-4 text-primary" />
          <Label htmlFor="seller" className="cursor-pointer flex flex-col items-center gap-2">
            <Tag className="h-8 w-8 mb-1" />
            <span className="font-medium">Satıcı</span>
            <span className="text-xs text-gray-500 text-center">Dolap'ta satış yapıyorum</span>
          </Label>
        </div>

        <div className={`relative rounded-lg border p-4 cursor-pointer ${userRole === "buyer" ? "bg-primary/10 border-primary" : "hover:bg-gray-50"}`}>
          <RadioGroupItem value="buyer" id="buyer" className="absolute top-4 right-4 text-primary" />
          <Label htmlFor="buyer" className="cursor-pointer flex flex-col items-center gap-2">
            <ShoppingBag className="h-8 w-8 mb-1" />
            <span className="font-medium">Alıcı</span>
            <span className="text-xs text-gray-500 text-center">Dolap'ta alışveriş yapıyorum</span>
          </Label>
        </div>
      </RadioGroup>
    </Card>
  );
};

export default RoleSelection;
