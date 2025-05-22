
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface POSTypeHeaderProps {
  title: string;
  subtitle: string;
  type: string;
  Icon: LucideIcon;
  currentYear: number;
}

const POSTypeHeader = ({ title, subtitle, type, Icon, currentYear }: POSTypeHeaderProps) => {
  return (
    <div className="relative bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <Icon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {title} {currentYear}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/calculator">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {type} Karşılaştır
              </Button>
            </Link>
            <Link to="/calculator">
              <Button size="lg" variant="outline">
                Komisyon Hesapla
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default POSTypeHeader;
