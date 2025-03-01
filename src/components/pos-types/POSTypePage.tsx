
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Helmet } from "react-helmet";
import { POSProvider } from "@/types/pos";

export interface POSTypePageProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  whatIsContent: string;
  advantages: string[];
  providers?: ReactNode;
  posType?: string;
}

const POSTypePage = ({
  title,
  description,
  Icon,
  whatIsContent,
  advantages,
  providers,
  posType
}: POSTypePageProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | POS Compare</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${posType || 'pos'} komisyon oranları, pos karşılaştırma, ${posType || 'pos'} ücretleri`} />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Icon className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {posType} Nedir?
            </h2>
            <p className="text-gray-700">{whatIsContent}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{posType} Avantajları</h2>
            <ul className="list-disc list-inside text-gray-700">
              {advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </div>
        </div>

        {providers && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {posType} Sağlayıcıları
            </h2>
            <div>{providers}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default POSTypePage;
