
import { useState } from "react";
import { Filter, X } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface POSSidebarProps {
  onFilter: (filters: FilterState) => void;
  posType: string;
}

interface FilterState {
  commissionRates: string[];
  providers: string[];
  features: string[];
  monthlyFees: string[];
}

const POSSidebar = ({ onFilter, posType }: POSSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    commissionRates: [],
    providers: [],
    features: [],
    monthlyFees: [],
  });

  const commissionRanges = [
    "%0 - %1",
    "%1 - %2", 
    "%2 - %3",
    "%3 - %4",
    "%4 - %5",
    "%5+"
  ];

  const getProvidersByType = (type: string) => {
    switch (type) {
      case "Banka POS":
        return ["Akbank", "İş Bankası", "Garanti BBVA", "Yapı Kredi", "Ziraat Bankası", "Halkbank", "VakıfBank", "Denizbank", "QNB Finansbank", "TEB"];
      case "Sanal POS":
        return ["iyzico", "PayTR", "Param", "Paynet", "PayU", "Moka", "Sipay", "Paycell"];
      case "Yazar Kasa (ÖKC) POS":
        return ["Beko", "Hugin", "Ingenico", "Logo İşbaşı", "Move5000F", "InPOS M530"];
      case "Mobil (Taşınabilir) POS":
        return ["Enpara Mobil", "Paycell Mobil", "Vallet Mobil", "PayTR Neo", "mPOS"];
      case "Cep POS":
        return ["Cep te İste", "Esnek POS", "Logo İşbaşı Cep", "PayGo", "Odeal"];
      default:
        return [];
    }
  };

  const getFeaturesByType = (type: string) => {
    switch (type) {
      case "Banka POS":
        return ["NFC Desteği", "Temassız Ödeme", "Taksit Seçenekleri", "Geniş Kart Desteği", "7/24 Destek"];
      case "Sanal POS":
        return ["API Entegrasyonu", "3D Secure", "Mobil Uyumlu", "Çoklu Para Birimi", "Hızlı Entegrasyon"];
      case "Yazar Kasa (ÖKC) POS":
        return ["ÖKC Uyumlu", "Mali Raporlama", "GİB Entegreli", "Stok Takibi", "Fatura Kesimi"];
      case "Mobil (Taşınabilir) POS":
        return ["Bluetooth Bağlantı", "WiFi Desteği", "Uzun Batarya Ömrü", "Hafif Tasarım", "Hızlı Kurulum"];
      case "Cep POS":
        return ["Uygulama Tabanlı", "QR Kod", "NFC", "Kolay Kullanım", "Anında Bildirim"];
      default:
        return [];
    }
  };

  const monthlyFeeRanges = [
    "Ücretsiz",
    "0 - 50 TL",
    "50 - 100 TL", 
    "100 - 200 TL",
    "200+ TL"
  ];

  const providers = getProvidersByType(posType);
  const features = getFeaturesByType(posType);

  const handleFilterChange = (category: keyof FilterState, value: string, checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[category] = [...newFilters[category], value];
    } else {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    }
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    const emptyFilters: FilterState = {
      commissionRates: [],
      providers: [],
      features: [],
      monthlyFees: [],
    };
    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <span className="font-semibold">Filtreler</span>
          </div>
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-xs"
            >
              <X className="h-4 w-4 mr-1" />
              Temizle
            </Button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Komisyon Oranları */}
        <SidebarGroup>
          <SidebarGroupLabel>Komisyon Oranları</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {commissionRanges.map((range) => (
                <SidebarMenuItem key={range}>
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <Checkbox
                      id={`commission-${range}`}
                      checked={filters.commissionRates.includes(range)}
                      onCheckedChange={(checked) => 
                        handleFilterChange('commissionRates', range, checked === true)
                      }
                    />
                    <label
                      htmlFor={`commission-${range}`}
                      className="text-sm cursor-pointer"
                    >
                      {range}
                    </label>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Sağlayıcılar */}
        <SidebarGroup>
          <SidebarGroupLabel>Sağlayıcılar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {providers.map((provider) => (
                <SidebarMenuItem key={provider}>
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <Checkbox
                      id={`provider-${provider}`}
                      checked={filters.providers.includes(provider)}
                      onCheckedChange={(checked) => 
                        handleFilterChange('providers', provider, checked === true)
                      }
                    />
                    <label
                      htmlFor={`provider-${provider}`}
                      className="text-sm cursor-pointer"
                    >
                      {provider}
                    </label>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Özellikler */}
        <SidebarGroup>
          <SidebarGroupLabel>Özellikler</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {features.map((feature) => (
                <SidebarMenuItem key={feature}>
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <Checkbox
                      id={`feature-${feature}`}
                      checked={filters.features.includes(feature)}
                      onCheckedChange={(checked) => 
                        handleFilterChange('features', feature, checked === true)
                      }
                    />
                    <label
                      htmlFor={`feature-${feature}`}
                      className="text-sm cursor-pointer"
                    >
                      {feature}
                    </label>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Aylık Ücretler */}
        <SidebarGroup>
          <SidebarGroupLabel>Aylık Ücret</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {monthlyFeeRanges.map((fee) => (
                <SidebarMenuItem key={fee}>
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <Checkbox
                      id={`fee-${fee}`}
                      checked={filters.monthlyFees.includes(fee)}
                      onCheckedChange={(checked) => 
                        handleFilterChange('monthlyFees', fee, checked === true)
                      }
                    />
                    <label
                      htmlFor={`fee-${fee}`}
                      className="text-sm cursor-pointer"
                    >
                      {fee}
                    </label>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default POSSidebar;
