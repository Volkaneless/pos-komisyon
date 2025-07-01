
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

const POSPageHeader = ({
  title,
  description,
  type,
  Icon,
  breadcrumbPath
}: POSPageHeaderProps) => {
  const currentDate = new Date();
  const createdDate = new Date('2024-01-01');

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4 md:mb-6">
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

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Content */}
          <div className="flex-1">
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-3 md:mb-4 bg-primary/10 text-primary border-primary/20">
              <Icon className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              {type}
            </Badge>

            {/* Main Title - H1 for SEO */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              {title}
            </h1>

            {/* Description - H2 for SEO structure */}
            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 md:mb-6 leading-relaxed font-normal">
              {description}
            </h2>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                <span>Oluşturulma: {formatDate(createdDate)}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span>Güncellenme: {formatDate(currentDate)}</span>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                {currentDate.getFullYear()} Güncel
              </Badge>
            </div>
          </div>

          {/* Icon Section */}
          <div className="w-full lg:w-32 lg:flex-shrink-0 flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
              <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSPageHeader;
