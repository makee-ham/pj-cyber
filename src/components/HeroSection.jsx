import Button from './Button';
import iPhoneMob from '../assets/images/hero_iphone_m.png';
import iPhonePC from '../assets/images/hero_iphone_d.png';

export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="flex flex-col md:flex-row items-center justify-end md:justify-center gap-12 md:gap-0 w-full bg-[#211C24] px-4 md:px-6"
    >
      <div
        id="hero-content"
        className="flex flex-col items-center md:items-start gap-8 md:gap-6 mt-[88px] md:mt-0 md:max-w-[714px] md:w-full"
      >
        <div
          id="hero-text"
          className="flex flex-col items-center md:items-start gap-4 md:gap-6 text-center md:text-left "
        >
          <h5 className="font-semibold text-[25px] leading-8 text-white/40">
            Pro.Beyond.
          </h5>
          <h1 className="font-thin text-7xl md:text-8xl leading-[72px] tracking-[-0.01em] text-white">
            IPhone 14 <span className="font-semibold">Pro</span>
          </h1>
          <p className="font-medium text-[19px] md:text-[18px] leading-6 text-[#909090]">
            Created to change everything for the better. For everyone
          </p>
        </div>
        <Button variant="ghost" color="white" className="w-[191px]">
          Shop Now
        </Button>
      </div>
      <div id="iphone-image">
        <img
          src={iPhoneMob}
          alt="iPhone"
          className="max-h-[289px] block md:hidden object-contain self-baseline"
        />
        <img
          src={iPhonePC}
          alt="iPhone"
          className="h-fit w-auto max-h-[632px] hidden md:block object-contain shrink-0"
        />
      </div>
    </div>
  );
}
