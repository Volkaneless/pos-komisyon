
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import POSTypeHeader from "./POSTypeHeader";

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
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <POSTypeHeader
        title={`${type} Komisyon Oranları`}
        subtitle={description}
        type={type}
        Icon={Icon}
        currentYear={currentYear}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          {typeof whatIsContent === 'string' ? (
            <div className="prose prose-lg max-w-none mb-8">{whatIsContent}</div>
          ) : (
            whatIsContent
          )}
          
          {advantages && advantages.length > 0 && (
            <div className="space-y-4 text-left mb-8">
              <h2 className="text-2xl font-bold mb-4">{type} Avantajları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary mt-1">
                      {index + 1}
                    </Badge>
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popüler {type} Çözümleri</h2>
          <div className="space-y-6">
            {filteredProviders.slice(0, 6).map(provider => 
              <POSCard key={provider.id} {...provider} />
            )}
          </div>
        </div>
        
        {filteredProviders.length > 6 && (
          <div className="mb-12 space-y-6">
            {filteredProviders.slice(6).map(provider => 
              <POSCard key={provider.id} {...provider} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default POSTypePage;
