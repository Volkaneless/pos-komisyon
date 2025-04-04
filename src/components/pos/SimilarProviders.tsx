
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
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Benzer POS Sağlayıcıları</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {similarProviders.map((provider) => (
          <Link
            key={provider.id}
            to={`/pos/${provider.id}`}
            className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
            aria-label={`${provider.name} detayları`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={getLogoSrc(provider)} 
                alt={provider.name} 
                className="w-12 h-12 object-contain"
              />
              <h3 className="font-medium">{provider.name}</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>POS Türü: {provider.type}</p>
              <p>Komisyon: {provider.commission_rate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProviders;
