import Button from './Button';

export default function CarouselBanner({ count, image, title, description }) {
  const width = `${100 / count}%`;
  return (
    <div
      className="flex flex-col shrink-0 items-center gap-4"
      style={{ width: width }}
    >
      <img src={image} alt={title} className="h-[331px] object-cover" />
      <h1 className="text-[49px] text-center leading-12 font-light">{title}</h1>
      <p className="text-[#909090] text-sm text-center leading-6 font-medium">
        {description}
      </p>
      <Button variant="ghost" className="w-[191px]">
        Shop Now
      </Button>
    </div>
  );
}
