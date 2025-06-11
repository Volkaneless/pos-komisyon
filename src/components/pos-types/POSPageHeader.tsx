
import { LucideIcon, Calendar, Clock } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

interface POSPageHeaderProps {
  title: string;
  description: string;
  type: string;
  Icon: LucideIcon;
  breadcrumbPath?: string;
}

const POSPageHeader = ({ title, description, type, Icon, breadcrumbPath }: POSPageHeaderProps) => {
  const currentDate = new Date();
  const createdDate = new Date('2024-01-01'); // You can make this dynamic per page if needed
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/#pos-types">POS Çözümleri</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{type}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Content */}
          <div className="flex-1">
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Icon className="w-4 h-4 mr-2" />
              {type}
            </Badge>

            {/* Main Title - H1 for SEO */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>

            {/* Description - H2 for SEO structure */}
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-6 leading-relaxed font-normal">
              {description}
            </h2>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Oluşturulma: {formatDate(createdDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Güncellenme: {formatDate(currentDate)}</span>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {currentDate.getFullYear()} Güncel
              </Badge>
            </div>
          </div>

          {/* Icon Section */}
          <div className="lg:w-32 lg:flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Icon className="w-16 h-16 text-primary mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSPageHeader;
