
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHepsiburada } from "./HepsiburadaContext";

const CategorySelection = () => {
  const { 
    category, 
    setCategory, 
    customRate, 
    setCustomRate, 
    getCommissionRate, 
    categories 
  } = useHepsiburada();

  return (
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
  );
};

export default CategorySelection;
