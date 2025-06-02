import FeaturedProduct from './FeaturedProduct';
import airpodsM from '../assets/images/airpodsmax_m.png';
import visionM from '../assets/images/applevision_m.png';
import psM from '../assets/images/playstation_m.png';
import macbookM from '../assets/images/macbookpro14_m.png';

export default function FeaturedProducts() {
  return (
    <section>
      <FeaturedProduct
        title="Apple AirPods Max"
        description="Computational audio. Listen, it's powerful"
        bgColor="#EDEDED"
        mobileImg={airpodsM}
      />
      <FeaturedProduct
        title="Apple Vision Pro"
        description="An immersive way to experience entertainment"
        bgColor="#353535"
        textColor="white"
        mobileImg={visionM}
      />
      <FeaturedProduct
        title="Playstation 5"
        description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
        bgColor="#fff"
        mobileImg={psM}
      />
      <FeaturedProduct
        title="Macbook Air"
        description="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
        bgColor="#EDEDED"
        mobileImg={macbookM}
        hasButton={true}
        hightlightTitleIndex={0}
      />
    </section>
  );
}
