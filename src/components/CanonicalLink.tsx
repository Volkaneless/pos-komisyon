
import { getCanonicalUrl } from "@/lib/utils";
import MetaTags from "./MetaTags";

interface CanonicalLinkProps {
  path: string;
  includeHome?: boolean;
}

/**
 * CanonicalLink component for backward compatibility
 * This component now uses MetaTags internally
 */
const CanonicalLink = ({ path, includeHome }: CanonicalLinkProps) => {
  const canonicalPath = includeHome ? "" : path;
  
  return (
    <MetaTags
      canonicalPath={canonicalPath}
      priority={15}
    />
  );
};

export default CanonicalLink;
