import logoWhite from '../assets/images/logo_white.svg';
import twitter from '../assets/images/Twitter.svg';
import facebook from '../assets/images/Facebook.svg';
import tiktok from '../assets/images/Tiktok.svg';
import instagram from '../assets/images/Instagram.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-black flex justify-center items-center py-12 md:py-[104px] px-8 md:px-0">
      <div
        id="footer-container"
        className="w-full max-w-[311px] md:max-w-[1119px] flex flex-col items-center md:items-start justify-center md:justify-between gap-8 md:gap-6"
      >
        <div
          id="footer-content"
          className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-0 text-[#CFCFCF] text-sm"
        >
          <div
            id="footer-top"
            className="w-full md:max-w-96 flex flex-col items-center md:items-start justify-center gap-4 md:gap-6"
          >
            <Link to="/">
              <img src={logoWhite} alt="cyber logo" className="h-8" />
            </Link>
            <p className="leading-6 md:leading-7 text-center md:text-left text-[13px] md:text-base">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div
            id="footer-navigation"
            className="w-full md:max-w-[623px] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-0 font-light"
          >
            <div
              id="footer-section-1"
              className="w-full md:max-w-[295.5px] flex flex-col items-center md:items-start justify-center gap-4 font-light leading-8"
            >
              <h6 className="text-white font-semibold text-base leading-4 pb-2">
                Services
              </h6>
              <Link>Bonus program</Link>
              <Link>Gift cards</Link>
              <Link>Credit and payment</Link>
              <Link>Service contracts</Link>
              <Link>Non-cash account</Link>
              <Link>Payment</Link>
            </div>
            <div
              id="footer-section-2"
              className="w-full md:max-w-[295.5px] flex flex-col items-center md:items-start justify-center gap-4 font-light leading-8"
            >
              <h6 className="text-white font-semibold text-base leading-4 pb-2">
                Assistance to the buyer
              </h6>
              <Link>Find an order</Link>
              <Link>Terms of delivery</Link>
              <Link>Exchange and return of goods</Link>
              <Link>Guarantee</Link>
              <Link>Frequently asked questions</Link>
              <Link>Terms of use of the site</Link>
            </div>
          </div>
        </div>
        <div
          id="social-icons"
          className="flex w-full max-w-[173px] justify-between"
        >
          <Link>
            <img
              src={twitter}
              alt="twitter icon"
              className="w-6 h-6 md:w-4 md:h-4"
            />
          </Link>
          <Link>
            <img
              src={facebook}
              alt="facebook icon"
              className="w-6 h-6 md:w-4 md:h-4"
            />
          </Link>
          <Link>
            <img
              src={tiktok}
              alt="tiktok icon"
              className="w-6 h-6 md:w-4 md:h-4"
            />
          </Link>
          <Link>
            <img
              src={instagram}
              alt="instagram icon"
              className="w-6 h-6 md:w-4 md:h-4"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
