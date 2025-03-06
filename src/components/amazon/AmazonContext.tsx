
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
  referralFee: number; // Amazon specific referral fee
  fbaFee: number; // Fulfillment by Amazon fee
};

interface AmazonContextType {
  // Form state
  category: string;
  setCategory: (category: string) => void;
  customRate: string;
  setCustomRate: (rate: string) => void;
  buyPrice: string;
  setBuyPrice: (price: string) => void;
  sellPrice: string;
  setSellPrice: (price: string) => void;
  weight: string;
  setWeight: (weight: string) => void;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  setDimensions: (dimensions: {length: string; width: string; height: string;}) => void;
  vatRate: string;
  setVatRate: (rate: string) => void;
  vatIncluded: boolean;
  setVatIncluded: (included: boolean) => void;
  useFBA: boolean;
  setUseFBA: (useFBA: boolean) => void;
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
  { id: "elektronik", name: "Elektronik", rate: 15 },
  { id: "moda", name: "Moda & Giyim", rate: 17 },
  { id: "ev", name: "Ev & Mutfak", rate: 15 },
  { id: "kitap", name: "Kitap & Medya", rate: 15 },
  { id: "oyuncak", name: "Oyuncak & Oyun", rate: 15 },
  { id: "guzellik", name: "Güzellik & Kişisel Bakım", rate: 15 },
  { id: "spor", name: "Spor & Outdoor", rate: 15 },
  { id: "otomotiv", name: "Otomotiv", rate: 15 },
  { id: "ofis", name: "Ofis Ürünleri", rate: 15 },
  { id: "pet", name: "Evcil Hayvan Ürünleri", rate: 15 },
  { id: "bebek", name: "Bebek Ürünleri", rate: 15 },
  { id: "gida", name: "Gıda & İçecek", rate: 15 },
];

const AmazonContext = createContext<AmazonContextType | undefined>(undefined);

export function AmazonProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState("");
  const [customRate, setCustomRate] = useState("15");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" });
  const [vatRate, setVatRate] = useState("20");
  const [vatIncluded, setVatIncluded] = useState(true);
  const [useFBA, setUseFBA] = useState(false);
  const [calculations, setCalculations] = useState<CalculationType | null>(null);

  // Find the commission rate based on category
  const getCommissionRate = () => {
    if (!category) return parseFloat(customRate);
    const selectedCategory = categories.find((c) => c.id === category);
    return selectedCategory ? selectedCategory.rate : parseFloat(customRate);
  };

  // Calculate FBA fee based on weight and dimensions
  const calculateFBAFee = (): number => {
    if (!useFBA) return 0;
    
    const weightValue = parseFloat(weight) || 0;
    
    // Basic FBA fee calculation (simplified)
    if (weightValue <= 0.5) return 2.99;
    if (weightValue <= 1) return 3.99;
    if (weightValue <= 2) return 5.99;
    if (weightValue <= 5) return 8.99;
    if (weightValue <= 10) return 11.99;
    return 15.99; // Over 10kg
  };

  const handleCalculate = () => {
    const buyPriceValue = parseFloat(buyPrice) || 0;
    const sellPriceValue = parseFloat(sellPrice) || 0;
    const commissionRate = getCommissionRate();
    const vatRateValue = parseFloat(vatRate) || 0;
    const fbaFee = calculateFBAFee();

    // Calculate commission amount (Amazon referral fee)
    const referralFee = (sellPriceValue * commissionRate) / 100;
    
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
    
    // Calculate total costs
    const totalCosts = buyPriceValue + referralFee + fbaFee;
    
    // Calculate profit
    const profit = sellPriceValue - totalCosts;
    
    // Calculate profit margin
    const profitMargin = (profit / sellPriceValue) * 100;

    setCalculations({
      commissionAmount: referralFee + fbaFee,
      referralFee,
      fbaFee,
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
    setWeight("");
    setDimensions({ length: "", width: "", height: "" });
    setVatRate("20");
    setVatIncluded(true);
    setUseFBA(false);
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
    weight,
    setWeight,
    dimensions,
    setDimensions,
    vatRate,
    setVatRate,
    vatIncluded,
    setVatIncluded,
    useFBA,
    setUseFBA,
    calculations,
    setCalculations,
    getCommissionRate,
    handleCalculate,
    handleClear,
    categories,
  };

  return (
    <AmazonContext.Provider value={value}>
      {children}
    </AmazonContext.Provider>
  );
}

export function useAmazon() {
  const context = useContext(AmazonContext);
  if (context === undefined) {
    throw new Error("useAmazon must be used within an AmazonProvider");
  }
  return context;
}
