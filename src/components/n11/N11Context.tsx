
import { createContext, useContext, useState, ReactNode } from "react";

type CategoryType = {
  id: string;
  name: string;
  rate: number;
};

type CalculationType = {
  commissionAmount: number;
  sellPriceWithVat: number;
  sellPriceWithoutVat: number;
  profit: number;
  profitMargin: number;
  totalCosts: number;
};

interface N11ContextType {
  // Form state
  category: string;
  setCategory: (category: string) => void;
  customRate: string;
  setCustomRate: (rate: string) => void;
  buyPrice: string;
  setBuyPrice: (price: string) => void;
  sellPrice: string;
  setSellPrice: (price: string) => void;
  cargoPrice: string;
  setCargoPrice: (price: string) => void;
  vatRate: string;
  setVatRate: (rate: string) => void;
  vatIncluded: boolean;
  setVatIncluded: (included: boolean) => void;
  sellerCargo: boolean;
  setSellerCargo: (sellerCargo: boolean) => void;
  calculations: CalculationType | null;
  setCalculations: (calc: CalculationType | null) => void;
  
  // Methods
  getCommissionRate: () => number;
  handleCalculate: () => void;
  handleClear: () => void;
  
  // Constants
  categories: CategoryType[];
}

export const categories: CategoryType[] = [
  { id: "elektronik", name: "Elektronik", rate: 14 },
  { id: "moda", name: "Moda & Giyim", rate: 18 },
  { id: "kozmetik", name: "Kozmetik", rate: 16 },
  { id: "ev", name: "Ev & Yaşam", rate: 15 },
  { id: "kitap", name: "Kitap & Kırtasiye", rate: 12 },
  { id: "oyuncak", name: "Oyuncak & Hobi", rate: 15 },
  { id: "spor", name: "Spor & Outdoor", rate: 13 },
  { id: "aksesuar", name: "Aksesuar", rate: 17 },
  { id: "supermarket", name: "Süpermarket", rate: 11 },
  { id: "bebek", name: "Anne & Bebek", rate: 14 },
  { id: "otomobil", name: "Otomobil & Motosiklet", rate: 12 },
  { id: "pet", name: "Pet Shop", rate: 13 },
];

const N11Context = createContext<N11ContextType | undefined>(undefined);

export function N11Provider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState("");
  const [customRate, setCustomRate] = useState("15");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [cargoPrice, setCargoPrice] = useState("");
  const [vatRate, setVatRate] = useState("20");
  const [vatIncluded, setVatIncluded] = useState(true);
  const [sellerCargo, setSellerCargo] = useState(true);
  const [calculations, setCalculations] = useState<CalculationType | null>(null);

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

  const value = {
    category,
    setCategory,
    customRate,
    setCustomRate,
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
    setSellerCargo,
    calculations,
    setCalculations,
    getCommissionRate,
    handleCalculate,
    handleClear,
    categories,
  };

  return (
    <N11Context.Provider value={value}>
      {children}
    </N11Context.Provider>
  );
}

export function useN11() {
  const context = useContext(N11Context);
  if (context === undefined) {
    throw new Error("useN11 must be used within a N11Provider");
  }
  return context;
}
