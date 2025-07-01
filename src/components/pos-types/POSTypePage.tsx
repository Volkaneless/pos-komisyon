
import { LucideIcon } from "lucide-react";
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
  return (
    <div>
      {/* Header Component */}
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
            <div className="prose prose-lg max-w-none mb-8">
              <p>{whatIsContent}</p>
            </div>
          ) : (
            whatIsContent
          )}
        </div>
      </div>
    </div>
  );
};

export default POSTypePage;
