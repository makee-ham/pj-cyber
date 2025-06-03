export default function CategoryCard({ imgSrc, name }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2 min-w-12 h-32 bg-[#EDEDED]">
      <img src={imgSrc} alt="categories" />
      <p>{name}</p>
    </div>
  );
}
