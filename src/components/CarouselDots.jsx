export default function CarouselDots({ isActive, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      onClick={onClick}
      className="cursor-pointer"
    >
      <circle cx="4" cy="4" r="4" fill="black" opacity={isActive ? 1 : 0.1} />
    </svg>
  );
}
