import CategoryCard from './CategoryCard';

export default function CategoryCardsContainer({ paginatedCategoriesData }) {
  return (
    <div
      id="caregory-cards-container"
      className="flex flex-wrap gap-4 w-full h-full"
    >
      {paginatedCategoriesData.map((datum, idx) => (
        <CategoryCard key={idx} imgSrc={datum.imgSrc} name={datum.name} />
      ))}
    </div>
  );
}
