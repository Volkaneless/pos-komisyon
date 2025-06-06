
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsFoundProps {
  onClearFilters: () => void;
}

const NoResultsFound = ({ onClearFilters }: NoResultsFoundProps) => {
  return (
    <div className="text-center py-12 bg-white rounded-lg border">
      <div className="max-w-md mx-auto">
        <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Sonuç Bulunamadı</h3>
        <p className="text-gray-500 mb-4">Seçtiğiniz kriterlere uygun POS bulunamadı. Lütfen filtrelerinizi gözden geçirin.</p>
        <Button onClick={onClearFilters}>Filtreleri Temizle</Button>
      </div>
    </div>
  );
};

export default NoResultsFound;
