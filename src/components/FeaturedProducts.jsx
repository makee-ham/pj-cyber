import FeaturedProduct from './FeaturedProduct';
import airpodsM from '../assets/images/airpodsmax_m.png';
import visionM from '../assets/images/applevision_m.png';
import psM from '../assets/images/playstation_m.png';
import macbookM from '../assets/images/macbookpro14_m.png';
import { useEffect, useState } from 'react';

const MD = 768;

export default function FeaturedProducts() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= MD);

  // window innderWidth 변경 시 데스크톱 여부(화면 너비) 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= MD);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={`w-full grid ${isDesktop ? 'grid-cols-4' : 'grid-cols-1'}`}
      style={{
        ...(isDesktop && {
          gridTemplateAreas: `
            "ps5 ps5 macbook macbook"
            "airpods vision macbook macbook"
          `,
        }),
      }}
    >
      <div style={isDesktop ? { gridArea: 'airpods' } : {}}>
        <FeaturedProduct
          title="Apple AirPods Max"
          description="Computational audio. Listen, it's powerful"
          bgColor="#EDEDED"
          mobileImg={airpodsM}
        />
      </div>

      <div style={isDesktop ? { gridArea: 'vision' } : {}}>
        <FeaturedProduct
          title="Apple Vision Pro"
          description="An immersive way to experience entertainment"
          bgColor="#353535"
          textColor="white"
          mobileImg={visionM}
        />
      </div>

      <div style={isDesktop ? { gridArea: 'ps5' } : {}}>
        <FeaturedProduct
          title="Playstation 5"
          description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
          bgColor="#fff"
          mobileImg={psM}
        />
      </div>

      <div style={isDesktop ? { gridArea: 'macbook' } : {}}>
        <FeaturedProduct
          title="Macbook Air"
          description="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
          bgColor="#EDEDED"
          mobileImg={macbookM}
          hasButton={true}
          hightlightTitleIndex={0}
        />
      </div>
    </section>
  );
}
