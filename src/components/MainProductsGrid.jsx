import ProductCard from './ProductCard';

const tempEightData = Array.from({ length: 8 }).fill();

export default function MainProductsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      {tempEightData.map((_, idx) => (
        <ProductCard key={idx} />
      ))}
    </div>
  );
}
