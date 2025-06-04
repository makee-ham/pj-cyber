import Like from '~icons/Like.svg';
import TempImg from '~images/product_temp_mm.jpeg';

export default function ProductCard() {
  return (
    <div className="flex flex-col w-auto h-[352px] px-3 py-6 bg-[#F6F6F6] rounded-[9px]">
      <div className="flex justify-end w-full h-auto">
        <img src={Like} alt="like" />
      </div>
      <img
        src={TempImg}
        alt="product image"
        className="w-[104px] h-[104px] object-contain"
      />
    </div>
  );
}
