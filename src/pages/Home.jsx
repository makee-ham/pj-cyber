import BrowseByCategory from '~components/BrowseByCategory';
import FeaturedProducts from '~components/FeaturedProducts';
import HeroSection from '~components/HeroSection';
import ProductCard from '~components/ProductCard';

export default function Home() {
  return (
    <div>
      <ProductCard />
      <HeroSection />
      <FeaturedProducts />
      <BrowseByCategory />
    </div>
  );
}
