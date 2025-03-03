
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useHepsiburada } from "./HepsiburadaContext";

const PriceInputs = () => {
  const {
    buyPrice,
    setBuyPrice,
    sellPrice,
    setSellPrice,
    cargoPrice,
    setCargoPrice,
    vatRate,
    setVatRate,
    vatIncluded,
    setVatIncluded,
    sellerCargo,
    setSellerCargo
  } = useHepsiburada();

  return (
    <>
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
    </>
  );
};

export default PriceInputs;
