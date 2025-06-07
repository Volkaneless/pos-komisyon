
import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

export interface FilterState {
  providers: string[];
  posTypes: string[];
  commissionRanges: string[];
  monthlyFees: string[];
}

interface POSFilterSidebarProps {
  filterOptions: {
    providers: { name: string; count: number }[];
    posTypes: { name: string; count: number }[];
    commissionRanges: { name: string; count: number }[];
    monthlyFees: { name: string; count: number }[];
  };
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const POSFilterSidebar: React.FC<POSFilterSidebarProps> = ({
  filterOptions,
  filters,
  onFiltersChange,
}) => {
  const handleFilterChange = (category: keyof FilterState, value: string, checked: boolean) => {
    const updatedFilters = { ...filters };
    if (checked) {
      updatedFilters[category] = [...updatedFilters[category], value];
    } else {
      updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
    }
    onFiltersChange(updatedFilters);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      providers: [],
      posTypes: [],
      commissionRanges: [],
      monthlyFees: [],
    });
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

  return (
    <Sidebar className="w-80 border-r bg-white">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Filtrele</h2>
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-primary hover:text-primary/80"
            >
              Temizle
            </Button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        {/* Kuruma Göre */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-gray-700 mb-3">
            Kuruma Göre
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {filterOptions.providers.map((provider) => (
                <div key={provider.name} className="flex items-center space-x-2">
                  <Checkbox
                    id={`provider-${provider.name}`}
                    checked={filters.providers.includes(provider.name)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('providers', provider.name, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`provider-${provider.name}`}
                    className="text-sm text-gray-600 cursor-pointer flex-1"
                  >
                    {provider.name}
                  </label>
                  <span className="text-xs text-gray-400">({provider.count})</span>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-4" />

        {/* POS Türüne Göre */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-gray-700 mb-3">
            POS Türüne Göre
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {filterOptions.posTypes.map((posType) => (
                <div key={posType.name} className="flex items-center space-x-2">
                  <Checkbox
                    id={`postype-${posType.name}`}
                    checked={filters.posTypes.includes(posType.name)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('posTypes', posType.name, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`postype-${posType.name}`}
                    className="text-sm text-gray-600 cursor-pointer flex-1"
                  >
                    {posType.name}
                  </label>
                  <span className="text-xs text-gray-400">({posType.count})</span>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-4" />

        {/* Komisyon Oranına Göre */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-gray-700 mb-3">
            Komisyon Oranına Göre
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {filterOptions.commissionRanges.map((range) => (
                <div key={range.name} className="flex items-center space-x-2">
                  <Checkbox
                    id={`commission-${range.name}`}
                    checked={filters.commissionRanges.includes(range.name)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('commissionRanges', range.name, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`commission-${range.name}`}
                    className="text-sm text-gray-600 cursor-pointer flex-1"
                  >
                    {range.name}
                  </label>
                  <span className="text-xs text-gray-400">({range.count})</span>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-4" />

        {/* Aylık Ücrete Göre */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-gray-700 mb-3">
            Aylık Ücrete Göre
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {filterOptions.monthlyFees.map((fee) => (
                <div key={fee.name} className="flex items-center space-x-2">
                  <Checkbox
                    id={`fee-${fee.name}`}
                    checked={filters.monthlyFees.includes(fee.name)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('monthlyFees', fee.name, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`fee-${fee.name}`}
                    className="text-sm text-gray-600 cursor-pointer flex-1"
                  >
                    {fee.name}
                  </label>
                  <span className="text-xs text-gray-400">({fee.count})</span>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default POSFilterSidebar;
