import BrowseByCategory from '~components/BrowseByCategory';
import FeaturedProducts from '~components/FeaturedProducts';
import HeroSection from '~components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <BrowseByCategory />
    </div>
  );
}
