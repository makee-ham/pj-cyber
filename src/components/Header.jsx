import logoBlack from '../assets/images/logo_black.svg';
import burger from '../assets/images/Burger.svg';
import search from '../assets/images/Search.svg';
import favorites from '../assets/images/Favorites.svg';
import cart from '../assets/images/Cart.svg';
import user from '../assets/images/User.svg';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header className="w-full max-w-[1120px] bg-white px-4 md:px-0 py-6 md:py-4 flex justify-between md:justify-center md:gap-8 items-center">
      <img src={logoBlack} alt="cyber logo" className="h-7 flex-none" />

      <div className="hidden md:flex flex-[4] items-center rounded-lg bg-[#f5f5f5] h-14">
        <img src={search} alt="search icon" className="w-6 h-6 m-4 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm focus:outline-none text-[#656565]"
        />
      </div>

      <nav className="hidden md:flex flex-[3] min-w-[210px] justify-between">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={
              location.pathname === path
                ? 'opacity-100 font-semibold'
                : 'opacity-30 hover:opacity-100'
            }
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex flex-[1] min-w-[96px] justify-between">
        <img src={favorites} alt="favorites icon" className="w-8 h-8" />
        <img src={cart} alt="cart icon" className="w-8 h-8" />
        <img src={user} alt="user icon" className="w-8 h-8" />
      </div>

      <button className="md:hidden">
        <img src={burger} alt="burger button" className="w-10 h-10" />
      </button>
    </header>
  );
}
