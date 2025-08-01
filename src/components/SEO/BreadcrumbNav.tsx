import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface Breadcrumb {
  name: string;
  url: string;
  current?: boolean;
}

interface BreadcrumbNavProps {
  breadcrumbs: Breadcrumb[];
  className?: string;
}

const BreadcrumbNav = ({ breadcrumbs, className = "" }: BreadcrumbNavProps) => {
  const allBreadcrumbs = [
    { name: "Ana Sayfa", url: "/" },
    ...breadcrumbs
  ];

  return (
    <nav 
      className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {allBreadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && (
              <Home className="w-4 h-4 mr-1 flex-shrink-0" />
            )}
            
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-1 flex-shrink-0" />
            )}
            
            {breadcrumb.current || index === allBreadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <Link 
                to={breadcrumb.url}
                className="hover:text-foreground transition-colors"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;