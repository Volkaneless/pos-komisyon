
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

const categories = [
  { id: "elektronik", name: "Elektronik", rate: 12 },
  { id: "giyim", name: "Giyim & Moda", rate: 15 },
  { id: "kozmetik", name: "Kozmetik", rate: 20 },
  { id: "ev", name: "Ev & Yaşam", rate: 18 },
  { id: "kitap", name: "Kitap & Hobi", rate: 10 },
  { id: "oyuncak", name: "Oyuncak", rate: 17 },
  { id: "spor", name: "Spor & Outdoor", rate: 16 },
  { id: "aksesuar", name: "Aksesuar", rate: 14 },
  { id: "supermarket", name: "Süpermarket", rate: 8 },
];

const TrendyolCalculator = () => {
  const [category, setCategory] = useState("");
  const [customRate, setCustomRate] = useState("15");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [cargoPrice, setCargoPrice] = useState("");
  const [vatRate, setVatRate] = useState("20");
  const [vatIncluded, setVatIncluded] = useState(true);
  const [sellerCargo, setSellerCargo] = useState(true);
  const [calculations, setCalculations] = useState<any>(null);

  // Find the commission rate based on category
  const getCommissionRate = () => {
    if (!category) return parseFloat(customRate);
    const selectedCategory = categories.find((c) => c.id === category);
    return selectedCategory ? selectedCategory.rate : parseFloat(customRate);
  };

  const handleCalculate = () => {
    const buyPriceValue = parseFloat(buyPrice) || 0;
    const sellPriceValue = parseFloat(sellPrice) || 0;
    const commissionRate = getCommissionRate();
    const vatRateValue = parseFloat(vatRate) || 0;
    const cargoPriceValue = parseFloat(cargoPrice) || 0;

    // Calculate commission amount
    const commissionAmount = (sellPriceValue * commissionRate) / 100;
    
    // Calculate VAT
    let sellPriceWithVat = sellPriceValue;
    let sellPriceWithoutVat = sellPriceValue;
    
    if (vatIncluded) {
      // If price includes VAT, calculate price without VAT
      sellPriceWithoutVat = sellPriceValue / (1 + (vatRateValue / 100));
    } else {
      // If price doesn't include VAT, calculate price with VAT
      sellPriceWithVat = sellPriceValue * (1 + (vatRateValue / 100));
    }
    
    // Calculate cargo cost if seller pays for cargo
    const cargoCost = sellerCargo ? cargoPriceValue : 0;
    
    // Calculate total costs
    const totalCosts = buyPriceValue + commissionAmount + cargoCost;
    
    // Calculate profit
    const profit = sellPriceValue - totalCosts;
    
    // Calculate profit margin
    const profitMargin = (profit / sellPriceValue) * 100;

    setCalculations({
      commissionAmount,
      sellPriceWithVat,
      sellPriceWithoutVat,
      profit,
      profitMargin,
      totalCosts,
    });
  };

  const handleClear = () => {
    setCategory("");
    setCustomRate("15");
    setBuyPrice("");
    setSellPrice("");
    setCargoPrice("");
    setVatRate("20");
    setVatIncluded(true);
    setSellerCargo(true);
    setCalculations(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <Label>Ürün Kategorisi / Komisyon</Label>
          <Input
            type="text"
            placeholder="Ürün Kategorisi Ara"
            className="mt-2"
          />

          <div className="mt-2 p-2 bg-blue-50 rounded-md inline-block">
            <span className="text-blue-600">Komisyon Oranı: %{getCommissionRate()}</span>
          </div>

          <Tabs defaultValue="category" className="mt-4">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="category">Kategori</TabsTrigger>
              <TabsTrigger value="custom">Özel Oran</TabsTrigger>
            </TabsList>
            <TabsContent value="category" className="mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                {categories.map((cat) => (
                  <div 
                    key={cat.id}
                    className={`p-2 border rounded-md cursor-pointer ${
                      category === cat.id ? "bg-primary text-white" : "bg-white"
                    }`}
                    onClick={() => setCategory(cat.id)}
                  >
                    {cat.name} - %{cat.rate}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="custom" className="mt-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  value={customRate}
                  onChange={(e) => setCustomRate(e.target.value)}
                  placeholder="Özel komisyon oranı"
                />
                <span>%</span>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Label htmlFor="buyPrice">Alış Fiyatı</Label>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-500">₺</span>
            <Input
              id="buyPrice"
              type="number"
              placeholder="0"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <Switch 
                id="vatIncludedBuy" 
                checked={vatIncluded}
                onCheckedChange={setVatIncluded}
              />
              <Label htmlFor="vatIncludedBuy">KDV Dahil</Label>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="sellPrice">Satış Fiyatı</Label>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-500">₺</span>
            <Input
              id="sellPrice"
              type="number"
              placeholder="0"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label>KDV Miktarı</Label>
          <div className="grid grid-cols-4 gap-2 mt-2">
            <div 
              className={`text-center p-2 border rounded cursor-pointer ${vatRate === "20" ? "bg-gray-200" : "bg-white"}`}
              onClick={() => setVatRate("20")}
            >
              %20
            </div>
            <div 
              className={`text-center p-2 border rounded cursor-pointer ${vatRate === "10" ? "bg-gray-200" : "bg-white"}`}
              onClick={() => setVatRate("10")}
            >
              %10
            </div>
            <div 
              className={`text-center p-2 border rounded cursor-pointer ${vatRate === "1" ? "bg-gray-200" : "bg-white"}`}
              onClick={() => setVatRate("1")}
            >
              %1
            </div>
            <div 
              className={`text-center p-2 border rounded cursor-pointer ${!["20", "10", "1"].includes(vatRate) ? "bg-gray-200" : "bg-white"}`}
              onClick={() => setVatRate("")}
            >
              Diğer
            </div>
          </div>
          {!["20", "10", "1"].includes(vatRate) && (
            <Input
              type="number"
              placeholder="Özel KDV oranı"
              className="mt-2"
              value={vatRate}
              onChange={(e) => setVatRate(e.target.value)}
            />
          )}
        </div>

        <div>
          <RadioGroup defaultValue="seller" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="seller" id="seller" checked={sellerCargo} onChange={() => setSellerCargo(true)} />
              <Label htmlFor="seller">Kargo Satıcıya Ait</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buyer" id="buyer" checked={!sellerCargo} onChange={() => setSellerCargo(false)} />
              <Label htmlFor="buyer">Kargo Alıcıya Ait</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="cargoPrice">Kargo Ücreti</Label>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-500">₺</span>
            <Input
              id="cargoPrice"
              type="number"
              placeholder="0"
              value={cargoPrice}
              onChange={(e) => setCargoPrice(e.target.value)}
              disabled={!sellerCargo}
            />
            <div className="flex items-center space-x-2">
              <Switch 
                id="kdvDahilCargo" 
                checked={vatIncluded}
                onCheckedChange={setVatIncluded}
              />
              <Label htmlFor="kdvDahilCargo">KDV Dahil</Label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
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
      </div>

      <div>
        <Card className="p-6 rounded-xl shadow-lg bg-white">
          <h3 className="text-xl font-semibold text-primary mb-2">Hesaplama Sonucu</h3>
          {!calculations ? (
            <p className="text-gray-600">
              Sonucu görmek için tutar girip "Hesapla" butonuna basın
            </p>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Satış Fiyatı (KDV Dahil)</span>
                  <span className="font-semibold">₺{calculations.sellPriceWithVat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Satış Fiyatı (KDV Hariç)</span>
                  <span className="font-semibold">₺{calculations.sellPriceWithoutVat.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Komisyon Tutarı (%{getCommissionRate()})</span>
                  <span className="font-semibold text-red-500">-₺{calculations.commissionAmount.toFixed(2)}</span>
                </div>
                {sellerCargo && (
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Kargo Gideri</span>
                    <span className="font-semibold text-red-500">-₺{parseFloat(cargoPrice).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Ürün Maliyeti</span>
                  <span className="font-semibold text-red-500">-₺{parseFloat(buyPrice).toFixed(2)}</span>
                </div>
                <hr className="border-t-2 border-gray-400" />
                <div className="flex justify-between items-center py-3">
                  <span className="font-bold">Net Kar</span>
                  <span className={`font-bold text-lg ${calculations.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ₺{calculations.profit.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Kar Marjı</span>
                  <span className={`font-semibold ${calculations.profitMargin >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    %{calculations.profitMargin.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </Card>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
          <h4 className="font-semibold mb-3">Önemli Bilgiler</h4>
          <ul className="space-y-2 text-sm">
            <li>• Trendyol komisyon oranları kategoriye göre değişiklik gösterebilir</li>
            <li>• Hesaplama sonuçları tahmini değerler içerir</li>
            <li>• Trendyol kargo anlaşmalarına göre kargo ücretleri farklılık gösterebilir</li>
            <li>• KDV oranları ürün grubuna göre farklılık gösterebilir</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendyolCalculator;
