
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

interface MobileFilterButtonProps {
  onClick: () => void;
  hasActiveFilters: boolean;
  activeFilterCount: number;
}

const MobileFilterButton = ({ onClick, hasActiveFilters, activeFilterCount }: MobileFilterButtonProps) => {
  return (
    <Button variant="outline" className="w-full relative" onClick={onClick}>
      <Filter className="w-4 h-4 mr-2" />
      Filtrele
      {hasActiveFilters && (
        <Badge className="ml-2 h-5 min-w-5 p-0 flex items-center justify-center text-xs">
          {activeFilterCount}
        </Badge>
      )}
    </Button>
  );
};

export default MobileFilterButton;
