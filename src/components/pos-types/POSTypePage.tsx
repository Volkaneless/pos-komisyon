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
  return <div>
      {/* Header Component */}
      <POSPageHeader title={title} description={description} type={type} Icon={Icon} breadcrumbPath={breadcrumbPath} />

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-8">
          {typeof whatIsContent === 'string' ? <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {whatIsContent}
              </p>
              
              {/* Extended content section */}
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  İşletmenizin ihtiyaçlarına uygun {type.toLowerCase()} çözümü seçerken, komisyon oranları, 
                  güvenlik standartları, teknik destek kalitesi ve entegrasyon kolaylığı gibi faktörleri 
                  değerlendirmeniz önemlidir. Sektörde faaliyet gösteren tüm sağlayıcıları karşılaştırarak 
                  en uygun seçeneği bulabilirsiniz.
                </p>
                
                
              </div>
            </div> : <div className="mb-6">
              {whatIsContent}
            </div>}
        </div>
      </div>
    </div>;
};
export default POSTypePage;