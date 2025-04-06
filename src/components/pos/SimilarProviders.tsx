
import { Link } from "react-router-dom";
import { POSProvider } from "@/types/pos";
import { posProviders } from "@/data/posProviders";

interface SimilarProvidersProps {
  currentProvider: POSProvider;
}

const SimilarProviders = ({ currentProvider }: SimilarProvidersProps) => {
  const similarProviders = posProviders
    .filter(provider => 
      provider.type === currentProvider.type && 
      provider.id !== currentProvider.id
    )
    .slice(0, 3);

  if (similarProviders.length === 0) return null;

  // Fallback image for when provider logo is not available
  const getLogoSrc = (provider: POSProvider) => {
    return provider.logo || "/lovable-uploads/bf5f206f-f598-4d99-8ac7-dbc75e52d8dc.png";
  };

  return (
    <div className="space-y-4">
      {similarProviders.map((provider) => (
        <Link
          key={provider.id}
          to={`/pos/${provider.id}`}
          className="block p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-primary-light transition-all duration-300 bg-white"
          aria-label={`${provider.name} detayları`}
        >
          <div className="flex items-center gap-4">
            <div className="bg-gray-50 p-2 rounded-md">
              <img 
                src={getLogoSrc(provider)} 
                alt={provider.name} 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{provider.name}</h3>
              <div className="flex flex-wrap text-sm text-gray-600 mt-1 gap-x-3">
                <span>{provider.type}</span>
                <span>•</span>
                <span>{provider.commission_rate}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarProviders;
