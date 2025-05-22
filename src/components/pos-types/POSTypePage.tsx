import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface POSTypePageProps {
  title: string;
  description: string;
  type: string;
  Icon: LucideIcon;
  whatIsContent: string | React.ReactNode;
  advantages: string[];
}
const POSTypePage = ({
  title,
  description,
  type,
  Icon,
  whatIsContent,
  advantages
}: POSTypePageProps) => {
  const filteredProviders = posProviders.filter(provider => provider.type === type);
  return <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 px-0 mx-0 my-[45px] py-[19px]">
        
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="mb-12">
        {typeof whatIsContent === 'string' ? <div className="prose prose-lg max-w-none mb-8">{whatIsContent}</div> : whatIsContent}
        
        {advantages && advantages.length > 0 && <div className="space-y-4 text-left mb-8">
            
            
          </div>}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popüler {type} Çözümleri</h2>
        <div>
          {filteredProviders.slice(0, 6).map(provider => <POSCard key={provider.id} {...provider} />)}
        </div>
      </div>
      
      {filteredProviders.length > 6 && <div className="mb-12">
          {filteredProviders.slice(6).map(provider => <POSCard key={provider.id} {...provider} />)}
        </div>}
    </div>;
};
export default POSTypePage;