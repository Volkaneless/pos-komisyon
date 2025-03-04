
import { createContext, useContext, useState, ReactNode } from "react";

type SellerType = "individual" | "corporate";
type CategoryType = {
  id: string;
  name: string;
  rate: number;
};

type CalculationType = {
  commissionRate: number;
  commissionAmount: number;
  netAmount: number;
};

interface ParamGuvendeContextType {
  // Form state
  sellerType: SellerType;
  setSellerType: (type: SellerType) => void;
  category: string;
  setCategory: (category: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  calculations: CalculationType | null;
  setCalculations: (calc: CalculationType | null) => void;
  
  // Methods
  getCommissionRate: () => number;
  handleCalculate: () => void;
  handleClear: () => void;
  
  // Constants
  categories: CategoryType[];
}

const corporateCategories: CategoryType[] = [
  { id: "antika", name: "Antika", rate: 12 },
  { id: "giyim", name: "Giyim & Aksesuar", rate: 12 },
  { id: "kisisel-bakim", name: "Kişisel Bakım & Kozmetik", rate: 12 },
  { id: "kitap", name: "Kitap, Dergi & Film", rate: 12 },
  { id: "koleksiyon", name: "Koleksiyon", rate: 12 },
  { id: "yiyecek", name: "Yiyecek & İçecek", rate: 12 },
  { id: "anne-bebek", name: "Anne & Bebek", rate: 12 },
  { id: "bahce", name: "Bahçe & Yapı Market", rate: 12 },
  { id: "diger", name: "Diğer Her Şey", rate: 12 },
  { id: "ev-dekorasyon", name: "Ev Dekorasyon", rate: 12 },
  { id: "hobi", name: "Hobi & Oyuncak", rate: 12 },
  { id: "saat", name: "Saat", rate: 12 },
  { id: "muzik", name: "Müzik", rate: 11 },
  { id: "ofis", name: "Ofis & Kırtasiye", rate: 11 },
  { id: "spor", name: "Spor", rate: 11 },
  { id: "elektrikli-ev", name: "Elektrikli Ev Aletleri", rate: 9 },
  { id: "taki", name: "Takı, Mücevher & Altın", rate: 9 },
  { id: "teknik-elektronik", name: "Teknik Elektronik", rate: 9 },
  { id: "cep-telefonu", name: "Cep Telefonu", rate: 8 },
  { id: "bilgisayar", name: "Bilgisayar", rate: 8 },
  { id: "ev-elektronigi", name: "Ev Elektroniği", rate: 8 },
  { id: "fotograf", name: "Fotoğraf & Kamera", rate: 8 },
  { id: "oyun-konsol", name: "Oyun & Konsol", rate: 8 },
];

const ParamGuvendeContext = createContext<ParamGuvendeContextType | undefined>(undefined);

export function ParamGuvendeProvider({ children }: { children: ReactNode }) {
  const [sellerType, setSellerType] = useState<SellerType>("individual");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [calculations, setCalculations] = useState<CalculationType | null>(null);

  // Get commission rate based on seller type and amount/category
  const getCommissionRate = () => {
    if (sellerType === "individual") {
      const amountValue = parseFloat(amount) || 0;
      
      if (amountValue <= 500) {
        return 15;
      } else if (amountValue <= 1500) {
        return 10;
      } else if (amountValue <= 10000) {
        return 4;
      } else {
        return 0; // For fixed 900 TL
      }
    } else {
      // Corporate
      if (!category) return 12; // Default rate
      const selectedCategory = corporateCategories.find((c) => c.id === category);
      return selectedCategory ? selectedCategory.rate : 12;
    }
  };

  const handleCalculate = () => {
    const amountValue = parseFloat(amount) || 0;
    const commissionRate = getCommissionRate();
    
    let commissionAmount = 0;
    
    if (sellerType === "individual" && amountValue > 10000) {
      commissionAmount = 900; // Fixed commission for amounts over 10000 TL
    } else {
      commissionAmount = (amountValue * commissionRate) / 100;
    }
    
    const netAmount = amountValue - commissionAmount;
    
    setCalculations({
      commissionRate,
      commissionAmount,
      netAmount
    });
  };

  const handleClear = () => {
    setAmount("");
    if (sellerType === "corporate") {
      setCategory("");
    }
    setCalculations(null);
  };

  const value = {
    sellerType,
    setSellerType,
    category,
    setCategory,
    amount,
    setAmount,
    calculations,
    setCalculations,
    getCommissionRate,
    handleCalculate,
    handleClear,
    categories: corporateCategories,
  };

  return (
    <ParamGuvendeContext.Provider value={value}>
      {children}
    </ParamGuvendeContext.Provider>
  );
}

export function useParamGuvende() {
  const context = useContext(ParamGuvendeContext);
  if (context === undefined) {
    throw new Error("useParamGuvende must be used within a ParamGuvendeProvider");
  }
  return context;
}
