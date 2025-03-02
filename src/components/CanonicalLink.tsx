
import { Helmet } from "react-helmet";

interface CanonicalLinkProps {
  path: string;
  includeHome?: boolean;
}

const CanonicalLink = ({ path, includeHome = true }: CanonicalLinkProps) => {
  const baseUrl = "https://poskomisyon.com";
  const canonicalUrl = `${baseUrl}${path !== "/" ? path : ""}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {includeHome && path !== "/" && (
        <link rel="alternate" href={baseUrl} />
      )}
    </Helmet>
  );
};

export default CanonicalLink;
