
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FilterContent from "./FilterContent";

interface SanalPOSFiltersProps {
  uniqueProviders: Record<string, number>;
  uniqueTypes: Record<string, number>;
  selectedProviders: string[];
  selectedTypes: string[];
  selectedCommissionRange: string;
  selectedMonthlyFee: string;
  searchTerm: string;
  sortBy: string;
  onProviderChange: (provider: string) => void;
  onTypeChange: (type: string) => void;
  onCommissionRangeChange: (range: string) => void;
  onMonthlyFeeChange: (fee: string) => void;
  onSearchChange: (search: string) => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  commissionRanges: Array<{label: string; value: string; min: number; max: number}>;
  monthlyFeeOptions: Array<{label: string; value: string}>;
}

const SanalPOSFilters = ({
  uniqueProviders,
  uniqueTypes,
  selectedProviders,
  selectedTypes,
  selectedCommissionRange,
  selectedMonthlyFee,
  searchTerm,
  sortBy,
  onProviderChange,
  onTypeChange,
  onCommissionRangeChange,
  onMonthlyFeeChange,
  onSearchChange,
  onSortChange,
  onClearFilters,
  hasActiveFilters,
  commissionRanges,
  monthlyFeeOptions
}: SanalPOSFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Filtrele
              {hasActiveFilters && (
                <span className="ml-2 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {[selectedProviders.length, selectedTypes.length, selectedCommissionRange ? 1 : 0, selectedMonthlyFee ? 1 : 0, searchTerm ? 1 : 0].reduce((a, b) => a + b, 0)}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filtrele</SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <FilterContent 
                uniqueProviders={uniqueProviders}
                uniqueTypes={uniqueTypes}
                selectedProviders={selectedProviders}
                selectedTypes={selectedTypes}
                selectedCommissionRange={selectedCommissionRange}
                selectedMonthlyFee={selectedMonthlyFee}
                searchTerm={searchTerm}
                sortBy={sortBy}
                onProviderChange={onProviderChange}
                onTypeChange={onTypeChange}
                onCommissionRangeChange={onCommissionRangeChange}
                onMonthlyFeeChange={onMonthlyFeeChange}
                onSearchChange={onSearchChange}
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
                hasActiveFilters={hasActiveFilters}
                commissionRanges={commissionRanges}
                monthlyFeeOptions={monthlyFeeOptions}
              />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
          <FilterContent 
            uniqueProviders={uniqueProviders}
            uniqueTypes={uniqueTypes}
            selectedProviders={selectedProviders}
            selectedTypes={selectedTypes}
            selectedCommissionRange={selectedCommissionRange}
            selectedMonthlyFee={selectedMonthlyFee}
            searchTerm={searchTerm}
            sortBy={sortBy}
            onProviderChange={onProviderChange}
            onTypeChange={onTypeChange}
            onCommissionRangeChange={onCommissionRangeChange}
            onMonthlyFeeChange={onMonthlyFeeChange}
            onSearchChange={onSearchChange}
            onSortChange={onSortChange}
            onClearFilters={onClearFilters}
            hasActiveFilters={hasActiveFilters}
            commissionRanges={commissionRanges}
            monthlyFeeOptions={monthlyFeeOptions}
          />
        </div>
      </div>
    </>
  );
};

export default SanalPOSFilters;
