
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import POSPageHeader from "./POSPageHeader";

interface POSTypePageProps {
  title: string;
  description: string;
  type: string;
  Icon: LucideIcon;
  whatIsContent: string | React.ReactNode;
  advantages: string[];
  breadcrumbPath?: string;
}

const POSTypePage = ({
  title,
  description,
  type,
  Icon,
  whatIsContent,
  advantages,
  breadcrumbPath
}: POSTypePageProps) => {
  const filteredProviders = posProviders.filter(provider => provider.type === type);

  return (
    <div>
      {/* New Header Component */}
      <POSPageHeader 
        title={title}
        description={description}
        type={type}
        Icon={Icon}
        breadcrumbPath={breadcrumbPath}
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
              
              
            </div>
          )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{type} Çözümleri ({filteredProviders.length})</h2>
          <div className="grid grid-cols-1 gap-6">
            {filteredProviders.map(provider => (
              <POSCard key={provider.id} {...provider} />
            ))}
          </div>
          
          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Bu kategoride POS bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default POSTypePage;
