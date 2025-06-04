import TempImg from '~images/product_temp_mm.jpeg';
import Button from './Button';
import { useState } from 'react';

const TEMP_TITLE =
  'Image Of A Smiling My Melody Holding A Kitchen Knife | BE CAREFUL: She Has No Mercy';
const TEMP_PRICE = 1998;

export default function ProductCard() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center gap-2 w-auto h-[352px] px-3 py-6 bg-[#F6F6F6] rounded-[9px] md:gap-4 md:min-w-50 md:h-auto md:px-4">
      <div className="flex justify-end w-full h-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="cursor-pointer"
          onClick={() => setIsLiked(!isLiked)}
        >
          <path
            d="M5.93415 18.5443L15.3152 27.3568C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3568L26.0657 18.5443C28.6739 16.0941 28.9907 12.0621 26.797 9.23477L26.3845 8.70313C23.7603 5.32078 18.4928 5.88803 16.6488 9.75154C16.3883 10.2973 15.6115 10.2973 15.351 9.75154C13.5071 5.88803 8.23955 5.32078 5.61531 8.70313L5.20284 9.23477C3.00918 12.0621 3.32592 16.0941 5.93415 18.5443Z"
            fill={`${isLiked ? '#f00' : 'transparent'}`}
            stroke={`${isLiked ? '#f00' : '#909090'}`}
            strokeOpacity="0.77"
            strokeWidth="1.4"
            className="transition-[stroke,fill] duration-300 ease-in-out"
          />
        </svg>
      </div>
      <img
        src={TempImg}
        alt="product image"
        className="w-[104px] h-[104px] object-contain md:w-40 md:h-40"
      />
      <div className="flex flex-col w-full items-center gap-4 md:gap-6">
        <div className="flex flex-col items-center gap-4 w-full">
          <h4 className="text-center text-base font-medium leading-6 line-clamp-2 md:line-clamp-none">
            {TEMP_TITLE}
          </h4>
          <p className="text-center text-2xl font-semibold leading-6 tracking-[3%]">
            ${TEMP_PRICE}
          </p>
        </div>
        <Button className="w-full md:w-[188px]">Buy Now</Button>
      </div>
    </div>
  );
}
