import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { LucideIcon } from "lucide-react";
interface POSTypePageProps {
  title: string;
  description: string;
  type: string;
  Icon: LucideIcon;
  whatIsContent: string;
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
  return <>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="mb-12">
          
          
          <div className="space-y-4 text-left mb-8">
            
            
          </div>
          
        </div>

        <div className="grid gap-8 mb-12">
          {filteredProviders.map(provider => <POSCard key={provider.id} {...provider} />)}
        </div>
      </div>
    </>;
};
export default POSTypePage;