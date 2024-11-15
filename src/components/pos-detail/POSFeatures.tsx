import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface POSFeaturesProps {
  features: string[];
}

export const POSFeatures = ({ features }: POSFeaturesProps) => {
  return (
    <Card className="border-none shadow-none mb-12">
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
            <p className="text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};