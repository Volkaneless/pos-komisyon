import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

interface RelatedItem {
  title: string;
  description: string;
  url: string;
  category?: string;
  isPopular?: boolean;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
  className?: string;
}

const RelatedContent = ({ 
  items, 
  title = "İlgili İçerikler", 
  className = "" 
}: RelatedContentProps) => {
  if (!items.length) return null;

  return (
    <section className={`${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <TrendingUp className="w-5 h-5 text-primary" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  <Link to={item.url} className="block">
                    {item.title}
                  </Link>
                </CardTitle>
                {item.isPopular && (
                  <Badge variant="secondary" className="text-xs">
                    Popüler
                  </Badge>
                )}
              </div>
              {item.category && (
                <Badge variant="outline" className="w-fit text-xs">
                  {item.category}
                </Badge>
              )}
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <Link 
                to={item.url}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Devamını Oku
                <ArrowRight className="w-3 h-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedContent;