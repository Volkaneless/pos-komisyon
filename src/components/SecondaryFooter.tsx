
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { bankPOSProviders } from "@/data/pos-types/providers/bankPOS";
import { brandPOSProviders } from "@/data/pos-types/providers/brandPOS";
import { finTechPOSProviders } from "@/data/pos-types/providers/finTechPOS";

const SecondaryFooter = () => {
  return (
    <div className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Banka POS Çözümleri</h3>
            <ul className="space-y-2">
              {bankPOSProviders.map((provider) => (
                <li key={provider.id}>
                  <Link 
                    to={`/pos/${provider.id}`}
                    className="text-gray-600 hover:text-primary flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{provider.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Yazarkasa POS Çözümleri</h3>
            <ul className="space-y-2">
              {brandPOSProviders.map((provider) => (
                <li key={provider.id}>
                  <Link 
                    to={`/pos/${provider.id}`}
                    className="text-gray-600 hover:text-primary flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{provider.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fintech POS Çözümleri</h3>
            <ul className="space-y-2">
              {finTechPOSProviders.map((provider) => (
                <li key={provider.id}>
                  <Link 
                    to={`/pos/${provider.id}`}
                    className="text-gray-600 hover:text-primary flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{provider.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
