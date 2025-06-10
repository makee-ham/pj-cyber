import BrowseByCategory from '~components/BrowseByCategory';
import CarouselBannerSection from '~components/CarouselBannerSection';
import FeaturedProducts from '~components/FeaturedProducts';
import HeroSection from '~components/HeroSection';
import MainProducts from '~components/MainProducts';
import Meta from '~components/Meta';

export default function Home() {
  return (
    <>
      <Meta />
      <div>
        <HeroSection />
        <FeaturedProducts />
        <BrowseByCategory />
        <MainProducts />
        <CarouselBannerSection />
      </div>
    </>
  );
}
