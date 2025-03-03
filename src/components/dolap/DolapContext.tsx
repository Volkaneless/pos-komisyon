
import { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "seller" | "buyer";

type CalculationType = {
  commissionAmount: number;
  netAmount: number;
  commissionRate: string;
};

interface DolapContextType {
  // Form state
  price: string;
  setPrice: (price: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  calculations: CalculationType | null;
  setCalculations: (calc: CalculationType | null) => void;
  
  // Methods
  handleCalculate: () => void;
  handleClear: () => void;
  
  // Helper
  getCommissionRate: (price: number, role: UserRole) => { rate: number; isFixed: boolean; value: number };
}

const DolapContext = createContext<DolapContextType | undefined>(undefined);

export function DolapProvider({ children }: { children: ReactNode }) {
  const [price, setPrice] = useState("");
  const [userRole, setUserRole] = useState<UserRole>("seller");
  const [calculations, setCalculations] = useState<CalculationType | null>(null);

  // Calculate commission based on price and user role
  const getCommissionRate = (price: number, role: UserRole) => {
    if (role === "seller") {
      // Seller commission rates
      if (price <= 4999) {
        return { rate: 12, isFixed: false, value: (price * 0.12) };
      } else { // 5000 TL and above
        return { rate: 0, isFixed: true, value: 600 };
      }
    } else {
      // Buyer commission rates
      if (price <= 149) {
        return { rate: 0, isFixed: true, value: 9.99 };
      } else if (price <= 249) {
        return { rate: 0, isFixed: true, value: 16.99 };
      } else if (price <= 4999) {
        return { rate: 8, isFixed: false, value: (price * 0.08) };
      } else { // 5000 TL and above
        return { rate: 0, isFixed: true, value: 600 };
      }
    }
  };

  const handleCalculate = () => {
    const priceValue = parseFloat(price) || 0;
    
    if (priceValue <= 0) {
      return;
    }
    
    const commission = getCommissionRate(priceValue, userRole);
    
    let netAmount;
    if (userRole === "seller") {
      // For seller, commission is deducted from the selling price
      netAmount = priceValue - commission.value;
    } else {
      // For buyer, commission is added to the purchase price
      netAmount = priceValue + commission.value;
    }
    
    // Format the commission rate description
    let commissionRateDescription;
    if (commission.isFixed) {
      commissionRateDescription = `${commission.value.toFixed(2)} TL (sabit)`;
    } else {
      commissionRateDescription = `%${commission.rate}`;
    }

    setCalculations({
      commissionAmount: commission.value,
      netAmount: netAmount,
      commissionRate: commissionRateDescription
    });
  };

  const handleClear = () => {
    setPrice("");
    setUserRole("seller");
    setCalculations(null);
  };

  const value = {
    price,
    setPrice,
    userRole,
    setUserRole,
    calculations,
    setCalculations,
    handleCalculate,
    handleClear,
    getCommissionRate
  };

  return (
    <DolapContext.Provider value={value}>
      {children}
    </DolapContext.Provider>
  );
}

export function useDolap() {
  const context = useContext(DolapContext);
  if (context === undefined) {
    throw new Error("useDolap must be used within a DolapProvider");
  }
  return context;
}
