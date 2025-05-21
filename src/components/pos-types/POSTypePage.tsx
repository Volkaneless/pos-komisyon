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
  return <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="text-center mb-12">
        <Icon className="w-16 h-16 mx-auto text-primary mb-6" />
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="mb-12">
        {whatIsContent && <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Yazarkasa POS Nedir?</h2>
            <p className="text-gray-700">{whatIsContent}</p>
          </div>}
        
        {advantages && advantages.length > 0 && <div className="space-y-4 text-left mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Yazarkasa POS Veren Bankalar</h2>
            
          </div>}
      </div>

      <div className="grid gap-8 mb-12">
        {filteredProviders.map(provider => <POSCard key={provider.id} {...provider} />)}
      </div>
    </div>;
};
export default POSTypePage;