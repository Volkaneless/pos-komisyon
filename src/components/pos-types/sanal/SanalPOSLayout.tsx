
import POSFilterSidebar from "@/components/POSFilterSidebar";
import POSCard from "@/components/POSCard";
import SanalPOSComparison from "./SanalPOSComparison";
import SanalPOSStats from "./SanalPOSStats";
import SanalPOSFeatureTabs from "./SanalPOSFeatureTabs";
import SanalPOSContent from "./SanalPOSContent";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import { useState } from "react";

interface FilterState {
  providers: string[];
  commissionRanges: string[];
  monthlyFeeRanges: string[];
  features: string[];
}

interface SanalPOSLayoutProps {
  providers: Array<{
    id: string;
    logo: string;
    name: string;
    type: string;
    monthly_fee: string;
    commission_rate: string;
    features: string[];
  }>;
}

const SanalPOSLayout = ({ providers }: SanalPOSLayoutProps) => {
  const [filteredProviders, setFilteredProviders] = useState(providers);

  const applyFilters = (filters: FilterState) => {
    let filtered = providers;

    if (filters.providers.length > 0) {
      filtered = filtered.filter(provider => 
        filters.providers.some(filterProvider => 
          provider.name.includes(filterProvider)
        )
      );
    }

    if (filters.commissionRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const rate = parseFloat(provider.commission_rate.replace(',', '.'));
        return filters.commissionRanges.some(range => {
          if (range === "0-1") return rate >= 0 && rate <= 1;
          if (range === "1-2") return rate > 1 && rate <= 2;
          if (range === "2-3") return rate > 2 && rate <= 3;
          if (range === "3+") return rate > 3;
          return false;
        });
      });
    }

    if (filters.monthlyFeeRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const fee = provider.monthly_fee;
        return filters.monthlyFeeRanges.some(range => {
          if (range === "0") return fee.includes("0") || fee.includes("Ücretsiz");
          if (range === "0-100") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum >= 0 && feeNum <= 100;
          }
          if (range === "100-200") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 100 && feeNum <= 200;
          }
          if (range === "200+") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 200;
          }
          return false;
        });
      });
    }

    if (filters.features.length > 0) {
      filtered = filtered.filter(provider =>
        filters.features.some(feature =>
          provider.features.includes(feature)
        )
      );
    }

    setFilteredProviders(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Content with Sidebar */}
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0 hidden lg:block">
          <div className="bg-white rounded-lg border p-6 sticky top-4">
            <POSFilterSidebar
              providers={providers}
              onFilter={applyFilters}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Provider Cards */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Sanal POS Çözümleri ({filteredProviders.length})
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {filteredProviders.map(provider => (
                <POSCard key={provider.id} {...provider} />
              ))}
            </div>

            {filteredProviders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Seçilen kriterlere uygun POS bulunamadı.</p>
              </div>
            )}
          </div>

          <SanalPOSComparison />
          <SanalPOSStats />
          <SanalPOSFeatureTabs />
          <SanalPOSContent />
          <FAQ />
          <LatestBlogPosts />
        </div>
      </div>
    </div>
  );
};

export default SanalPOSLayout;
