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
    <div
      id="header-container"
      className="mx-auto my-0 max-w-[1440px] flex flex-col items-center"
    >
      <header className="w-full max-w-[1120px] bg-white px-4 md:px-0 py-6 md:py-4 flex justify-between md:justify-center md:gap-8 items-center">
        {/* 로고 */}
        <Link to="/">
          <img src={logoBlack} alt="cyber logo" className="h-7 flex-none" />
        </Link>

        {/* 검색창 */}
        <form className="hidden md:flex flex-[4] items-center rounded-lg bg-[#f5f5f5] h-14 pr-10">
          <img src={search} alt="search icon" className="w-6 h-6 m-4 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm focus:outline-none text-[#656565] flex-[1]"
          />
        </form>

        {/* 네비게이션 */}
        <nav className="hidden md:flex flex-[3] min-w-[210px] justify-between">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={
                location.pathname === path
                  ? 'opacity-100'
                  : 'opacity-30 hover:opacity-100'
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 아이콘 목록 */}
        <div className="hidden md:flex flex-[1] min-w-[96px] justify-between">
          <Link>
            <img src={favorites} alt="favorites icon" className="w-8 h-8" />
          </Link>
          <Link>
            <img src={cart} alt="cart icon" className="w-8 h-8" />
          </Link>
          <Link>
            <img src={user} alt="user icon" className="w-8 h-8" />
          </Link>
        </div>

        {/* 햄버거 메뉴 */}
        <button className="md:hidden">
          <img src={burger} alt="burger button" className="w-10 h-10" />
        </button>
      </header>
    </div>
  );
}
