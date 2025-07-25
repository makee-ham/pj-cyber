import airpodsM from '~images/airpodsmax_m.png';
import visionM from '~images/applevision_m.png';
import psM from '~images/playstation_m.png';
import macbookM from '~images/macbookpro14_m.png';

import airpodsD from '~images/airpodsmax_d.png';
import visionD from '~images/applevision_d.png';
import psD from '~images/playstation_d.png';
import macbookD from '~images/macbookpro14_d.png';

import FeaturedProduct from './FeaturedProduct';
import { useEffect, useState } from 'react';

import { throttle } from 'lodash';

const MD = 768;

export default function FeaturedProducts() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= MD);

  // window innderWidth 변경 시 데스크톱 여부(화면 너비) 상태 업데이트
  useEffect(() => {
    const throttledResizeHandler = throttle(() => {
      setIsDesktop(window.innerWidth >= MD);
    }, 300);

    window.addEventListener('resize', throttledResizeHandler);

    return () => {
      window.removeEventListener('resize', throttledResizeHandler);
      throttledResizeHandler.cancel();
    };
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
          dId="sa"
          title="Apple AirPods Max"
          description="Computational audio. Listen, it's powerful"
          bgColor="#EDEDED"
          mobileImg={airpodsM}
          desktopImg={airpodsD}
          isDesktop={isDesktop}
        />
      </div>

      <div style={isDesktop ? { gridArea: 'vision' } : {}}>
        <FeaturedProduct
          dId="sv"
          title="Apple Vision Pro"
          description="An immersive way to experience entertainment"
          bgColor="#353535"
          textColor="white"
          mobileImg={visionM}
          desktopImg={visionD}
          isDesktop={isDesktop}
        />
      </div>

      <div style={isDesktop ? { gridArea: 'ps5' } : {}}>
        <FeaturedProduct
          dId="m"
          title="Playstation 5"
          description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
          bgColor="#fff"
          mobileImg={psM}
          desktopImg={psD}
          isDesktop={isDesktop}
        />
      </div>

      <div style={isDesktop ? { gridArea: 'macbook' } : {}}>
        <FeaturedProduct
          dId="l"
          title="Macbook Air"
          description="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
          bgColor="#EDEDED"
          mobileImg={macbookM}
          desktopImg={macbookD}
          hasButton={true}
          hightlightTitleIndex={isDesktop ? -1 : 0}
          isDesktop={isDesktop}
        />
      </div>
    </section>
  );
}
