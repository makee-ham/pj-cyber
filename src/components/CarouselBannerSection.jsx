import IpadPro from '~images/IpadPro.png';
import CarouselBanner from './CarouselBanner';
import CarouselDots from './CarouselDots';
import { useEffect, useState } from 'react';

const sampleSlidesData = [
  {
    id: 1,
    title: 'Ipad Pro',
    description:
      'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: IpadPro,
  },
  {
    id: 2,
    title: 'MacBook Air',
    description:
      'Our thinnest, lightest notebook, completely transformed by the Apple M1 chip.',
    image: IpadPro,
  },
  {
    id: 3,
    title: 'iPhone 15',
    description:
      'So. Much. Pro. Titanium. Action Button. Camera Control. A18 Pro chip.',
    image: IpadPro,
  },
  {
    id: 4,
    title: 'Apple Watch',
    description:
      'A healthy leap ahead. Your essential companion for a healthy life.',
    image: IpadPro,
  },
];

export default function CarouselBannerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sampleSlidesData.length;

  useEffect(() => {
    const autoslideTimer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(autoslideTimer);
  }, [totalSlides]);

  const handleDotClick = index => setCurrentIndex(index);

  return (
    <section className="w-full py-14 px-8 flex flex-col item-center gap-12 overflow-hidden bg-[#F9F9F9] md:hidden">
      {/* 캐러셀 컨테이너 */}
      <div className="w-full overflow-hidden">
        {/* carousel wrapper 가로로 길게 감싸는 */}
        <div
          className="flex gap-8 transition-transform duration-300"
          style={{ width: `${totalSlides * 100}%` }}
        >
          {sampleSlidesData.map(datum => (
            <CarouselBanner
              key={datum.id}
              count={totalSlides}
              image={datum.image}
              title={datum.title}
              description={datum.description}
            />
          ))}
        </div>
      </div>
      {/* Dot Indicators */}
      <ul className="flex justify-center items-center gap-[9px] h-2">
        {sampleSlidesData.map((datum, index) => (
          <CarouselDots
            key={datum.id}
            isActive={currentIndex === index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ul>
    </section>
  );
}
