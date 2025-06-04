import BrowseByCategory from '~components/BrowseByCategory';
import FeaturedProducts from '~components/FeaturedProducts';
import HeroSection from '~components/HeroSection';
import MainProducts from '~components/MainProducts';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <BrowseByCategory />
      <MainProducts />
    </div>
  );
}
