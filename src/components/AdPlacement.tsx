import { useEffect } from 'react';

interface AdPlacementProps {
  adSlot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

const AdPlacement = ({ adSlot, format = 'auto', className = '' }: AdPlacementProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log('Ad push attempted for slot:', adSlot);
    } catch (error) {
      console.error('Error loading ad:', error);
    }
  }, [adSlot]);

  return (
    <div className={`ad-container my-4 text-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8796604145681906"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdPlacement;