import { Helmet } from "react-helmet";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { LucideIcon } from "lucide-react";

interface POSTypePageProps {
  title: string;
  description: string;
  type: string;
  Icon: LucideIcon;
  whatIsContent: string;
  advantages: string[];
}

const POSTypePage = ({ title, description, type, Icon, whatIsContent, advantages }: POSTypePageProps) => {
  const filteredProviders = posProviders.filter(
    provider => provider.type === type
  );

  return (
    <>
      <Helmet>
        <title>{title} | POS Compare</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Icon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid gap-8 mb-12">
          {filteredProviders.map((provider) => (
            <POSCard key={provider.id} {...provider} />
          ))}
        </div>
      </div>
    </>
  );
};

export default POSTypePage;