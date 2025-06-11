import IpadPro from '~images/IpadPro.png';
import CarouselBanner from './CarouselBanner';
import CarouselDots from './CarouselDots';
import { useEffect, useRef, useState } from 'react';

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

  const timerRef = useRef(null);

  const startX = useRef(0);
  const startTime = useRef(0);

  const resetAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 5000);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = index => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const handleDragStart = e => {
    startX.current = e.type.includes('mouse')
      ? e.clientX
      : e.touches[0].clientX;
    startTime.current = new Date().getTime();
  };

  const handleDragEnd = e => {
    const endX = e.type.includes('mouse')
      ? e.clientX
      : e.changedTouches[0].clientX;
    const endTime = new Date().getTime();

    const deltaX = endX - startX.current;
    const duration = endTime - startTime.current;

    if (Math.abs(deltaX) < 10 && duration < 300) return; // 드래그 여부 구분

    if (deltaX > 50) {
      setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
      resetAutoSlide();
    } else if (deltaX < -50) {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
      resetAutoSlide();
    }
  };

  return (
    <section
      className="w-full py-14 px-8 flex flex-col items-center gap-12 overflow-hidden select-none bg-[#F9F9F9] md:hidden"
      onDragStart={e => e.preventDefault()}
    >
      {/* Carousel Container */}
      <div className="w-full overflow-hidden">
        {/* Carousel Slide Wrapper */}
        <div
          className="flex transition-transform duration-300"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
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
