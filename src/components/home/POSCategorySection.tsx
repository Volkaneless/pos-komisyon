
import { Link } from "react-router-dom";
import POSCard from "../POSCard";
import { POSProvider } from "@/types/pos";

interface POSCategorySectionProps {
  category: string;
  providers: POSProvider[];
}

const POSCategorySection = ({ category, providers }: POSCategorySectionProps) => {
  if (providers.length === 0) return null;

  const getCategoryLink = (category: string) => {
    switch(category) {
      case "Yazar Kasa (ÖKC) POS":
        return "/pos-types/yazarkasa";
      case "Mobil (Taşınabilir) POS":
        return "/pos-types/mobil";
      case "Cep POS":
        return "/pos-types/cep";
      default:
        return "#";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">
        <Link 
          to={getCategoryLink(category)}
          className="hover:text-primary transition-colors"
        >
          {category} Komisyon Oranları
        </Link>
      </h2>
      <div className="grid gap-6">
        {providers.map((provider) => (
          <POSCard key={provider.id} {...provider} />
        ))}
      </div>
    </div>
  );
};

export default POSCategorySection;
