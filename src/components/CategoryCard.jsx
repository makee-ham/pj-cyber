export default function CategoryCard({ imgSrc, name }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2 min-w-36 h-32 bg-[#EDEDED] hover:bg-[#EDEDED]/60 rounded-[15px] cursor-pointer">
      <img src={imgSrc} alt="categories" className="w-12 object-contain" />
      <p className="leading-6 text-balance">{name}</p>
    </div>
  );
}
