
import { Helmet } from "react-helmet";
import { getCanonicalUrl } from "@/lib/utils";

interface CanonicalLinkProps {
  path: string;
  includeHome?: boolean;
}

const CanonicalLink = ({ path, includeHome = false }: CanonicalLinkProps) => {
  const canonicalUrl = getCanonicalUrl(path);
  const homeUrl = getCanonicalUrl("/");

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {includeHome && path !== "/" && (
        <link rel="alternate" href={homeUrl} />
      )}
    </Helmet>
  );
};

export default CanonicalLink;
