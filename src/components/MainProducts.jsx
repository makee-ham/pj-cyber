import MainProductsGrid from './MainProductsGrid';
import MainProductsTab from './MainProductsTab';

export default function MainProducts() {
  return (
    <section className="flex flex-col gap-8 w-full py-14 md:px-40">
      <MainProductsTab />
      <MainProductsGrid />
    </section>
  );
}
