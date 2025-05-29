import Button from './Button';
import iPhoneMob from '../assets/images/hero_iphone_m.png';

export default function HeroSection() {
  return (
    <div
      id="hero-container"
      className="flex flex-col items-center justify-end gap-12 bg-[#211C24] px-4"
    >
      <div
        id="hero-content"
        className="flex flex-col items-center gap-8 mt-[88px]"
      >
        <div
          id="hero-text"
          className="flex flex-col items-center gap-4 text-center"
        >
          <h5 className="font-semibold text-[25px] leading-8 text-white/40">
            Pro.Beyond.
          </h5>
          <h1 className="font-thin text-7xl leading-[72px] tracking-[-0.01em] text-white">
            IPhone 14 <span className="font-semibold">Pro</span>
          </h1>
          <p className="font-medium text-[19px] leading-6 text-[#909090]">
            Created to change everything for the better. For everyone
          </p>
        </div>
        <Button variant="ghost" color="white" className="w-[191px]">
          Shop Now
        </Button>
      </div>
      <div id="iphone-image">
        <img src={iPhoneMob} alt="iPhone" className="h-[289px]" />
      </div>
    </div>
  );
}
