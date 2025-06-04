
import POSCard from "@/components/POSCard";
import { Button } from "@/components/ui/button";
import { POSProvider } from "@/types/pos";

interface POSCardsListProps {
  providers: POSProvider[];
  onClearFilters: () => void;
}

const POSCardsList = ({ providers, onClearFilters }: POSCardsListProps) => (
  <div className="flex-1">
    <div className="space-y-4">
      {providers.map(provider => (
        <POSCard key={provider.id} {...provider} />
      ))}
    </div>

    {providers.length === 0 && (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg mb-4">Seçtiğiniz kriterlere uygun POS bulunamadı.</p>
        <Button onClick={onClearFilters}>Filtreleri Temizle</Button>
      </div>
    )}
  </div>
);

export default POSCardsList;
