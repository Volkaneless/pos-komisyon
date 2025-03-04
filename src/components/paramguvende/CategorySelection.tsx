
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useParamGuvende } from "./ParamGuvendeContext";
import { useState } from "react";

const CategorySelection = () => {
  const { 
    category, 
    setCategory, 
    getCommissionRate, 
    categories,
    sellerType 
  } = useParamGuvende();

  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories based on search query
  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sellerType !== "corporate") {
    return null;
  }

  return (
    <Card className="p-6 rounded-xl shadow-sm">
      <Label>Ürün Kategorisi</Label>
      <Input
        type="text"
        placeholder="Kategori Ara"
        className="mt-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="mt-2 p-2 bg-blue-50 rounded-md inline-block">
        <span className="text-blue-600">Komisyon Oranı: %{getCommissionRate()}</span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto">
        {filteredCategories.map((cat) => (
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
    </Card>
  );
};

export default CategorySelection;
