import { Button } from "@/components/ui/button";
import type { POSProvider } from "@/types/pos";
interface POSHeaderProps {
  provider: POSProvider;
}
const POSHeader = ({
  provider
}: POSHeaderProps) => {
  // Fallback image if provider.logo is not available or valid
  const logoSrc = provider.logo || "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png";
  return <div className="flex items-center justify-between mb-8 px-0 mx-0 my-[29px]">
      <div className="flex items-center gap-4">
        <img src={logoSrc} alt={provider.name} className="w-16 h-16 object-contain" />
        <h2 className="font-semibold text-2xl">{provider.name}</h2>
      </div>
      <Button size="lg" className="bg-primary hover:bg-primary-hover">
        Hemen Başvur
      </Button>
    </div>;
};
export default POSHeader;