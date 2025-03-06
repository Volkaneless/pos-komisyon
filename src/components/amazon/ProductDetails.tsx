
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAmazon } from "./AmazonContext";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

const ProductDetails = () => {
  const {
    weight,
    setWeight,
    dimensions,
    setDimensions,
    useFBA,
    setUseFBA
  } = useAmazon();

  const handleDimensionChange = (key: 'length' | 'width' | 'height', value: string) => {
    setDimensions({
      ...dimensions,
      [key]: value
    });
  };

  return (
    <Card className="p-6 rounded-xl shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <Label>Amazon FBA Kullan</Label>
        <Switch 
          id="useFBA" 
          checked={useFBA} 
          onCheckedChange={setUseFBA}
        />
      </div>
      
      {useFBA && (
        <>
          <div>
            <Label htmlFor="weight">Ürün Ağırlığı (kg)</Label>
            <div className="flex items-center space-x-2 mt-2">
              <Input
                id="weight"
                type="number"
                placeholder="0.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <span>kg</span>
            </div>
          </div>

          <div>
            <Label>Ürün Boyutları (cm)</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div>
                <Input
                  type="number"
                  placeholder="Uzunluk"
                  value={dimensions.length}
                  onChange={(e) => handleDimensionChange('length', e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Genişlik"
                  value={dimensions.width}
                  onChange={(e) => handleDimensionChange('width', e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Yükseklik"
                  value={dimensions.height}
                  onChange={(e) => handleDimensionChange('height', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-md">
            <Info className="text-blue-500 w-5 h-5 mt-0.5" />
            <p className="text-sm text-blue-700">
              FBA (Fulfillment by Amazon) hizmeti ile ürünleriniz Amazon'un depolarında saklanır, paketlenir 
              ve gönderilir. Bu işlem için ağırlık ve boyuta göre ek ücret alınır.
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default ProductDetails;
