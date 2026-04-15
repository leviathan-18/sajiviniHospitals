import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImage from '../images/build/logo.png';
import { primaryMenu } from '../shared/navigation/menuData';

const getActiveSection = (pathname, hash) => {
  if (pathname.startsWith('/about')) {
    return 'about';
  }

  if (pathname === '/contact-us' || hash === '#contact') {
    return 'contact';
  }

  if (pathname === '/' || hash === '#home') {
    return 'home';
  }

  return pathname;
};

const Navbar = () => {
  const { pathname, hash } = useLocation();
  const activeSection = getActiveSection(pathname.toLowerCase(), hash.toLowerCase());
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  const navLinkBase =
    'relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-bold text-[#AD3048] transition-all duration-300 after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#AD3048] after:transition-transform after:duration-300 hover:bg-[#FDF2F2] hover:text-[#AD3048] hover:after:scale-x-100 lg:px-4 lg:py-2.5 lg:text-[15px]';

  const navLinkActive = 'bg-[#FDF2F2] text-[#AD3048]';

  const routeLinkClass = ({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : ''}`;

  const openAboutMenu = () => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      setCloseTimer(null);
    }

    setIsAboutMenuOpen(true);
  };

  const closeAboutMenu = () => {
    const timerId = window.setTimeout(() => {
      setIsAboutMenuOpen(false);
    }, 120);

    setCloseTimer(timerId);
  };

  const closeMenus = () => {
    setIsAboutMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenus();
  };

  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-[#E9D9DD] bg-white/90 shadow-[0_10px_30px_rgba(21,62,76,0.08)] backdrop-blur-xl">
      <div className="container mx-auto px-3 py-3.5 sm:px-4 sm:py-4 lg:px-6 lg:py-4">
        <div className="flex items-center justify-between gap-3 md:gap-3">
          <Link to="/" className="shrink-0" onClick={handleMenuItemClick}>
            <img src={logoImage} alt="Sanjivini Logo" className="h-11 object-contain sm:h-12 md:h-12 lg:h-14" />
          </Link>

          <Link
            to="/specialties"
            onClick={handleMenuItemClick}
            className="md:hidden shrink-0 rounded-full border border-[#efbcc5] bg-[#FDF2F2] px-2.5 py-1 text-[10px] font-semibold leading-none text-[#AD3048] whitespace-nowrap"
          >
            Specialities
          </Link>

          <Link
            to="/facilities-and-services"
            onClick={handleMenuItemClick}
            className="md:hidden shrink-0 rounded-full border border-[#efbcc5] bg-white px-2.5 py-1 text-[10px] font-semibold leading-none text-[#194656] whitespace-nowrap"
          >
            Facilities & Services
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#E9D9DD] bg-white text-[#194656] shadow-sm transition hover:bg-[#FDF2F2] md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap text-[#AD3048] md:flex md:mx-2 lg:mx-4">
            <NavLink to="/" className={routeLinkClass} end>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={openAboutMenu}
              onMouseLeave={closeAboutMenu}
              onFocusCapture={openAboutMenu}
              onBlurCapture={closeAboutMenu}
            >
              <Link
                to="/about"
                onClick={handleMenuItemClick}
                className={`${navLinkBase} ${activeSection === 'about' || isAboutMenuOpen ? navLinkActive : ''}`}
              >
                About Us
                <span
                  className={`text-[11px] transition-transform duration-300 ${isAboutMenuOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </Link>

              <div
                className={`absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-[22px] border border-[#E9D9DD] bg-white p-2 shadow-[0_24px_50px_rgba(21,62,76,0.14)] transition-all duration-200 ${
                  isAboutMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                }`}
                onMouseEnter={openAboutMenu}
                onMouseLeave={closeAboutMenu}
              >
                <Link
                  to="/about#our-founders"
                  onClick={handleMenuItemClick}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]"
                >
                  Our Founders
                </Link>
                <Link
                  to="/about#project-umeed"
                  onClick={handleMenuItemClick}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]"
                >
                  Project Ummeed by Sanjivni
                </Link>
                <Link
                  to="/about#our-lakshya"
                  onClick={handleMenuItemClick}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]"
                >
                  Our Lakshya
                </Link>
              </div>
            </div>

            {primaryMenu
              .filter((item) => item.path !== '/')
              .map((item) => (
                <NavLink key={item.path} to={item.path} className={routeLinkClass} onClick={handleMenuItemClick}>
                  {item.label}
                </NavLink>
              ))}
          </nav>

          <a
            href="tel:0522-4232333"
            className="hidden shrink-0 rounded-full bg-[#AD3048] px-4 py-2.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(173,48,72,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#194656] hover:shadow-[0_18px_36px_rgba(25,70,86,0.25)] lg:inline-flex lg:px-5 lg:text-[15px]"
          >
            Call Us
          </a>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[620px] pt-3' : 'max-h-0'}`}
        >
          <nav className="rounded-2xl border border-[#E9D9DD] bg-white p-2 shadow-[0_14px_30px_rgba(21,62,76,0.08)]">
            <NavLink to="/" end onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">
              Home
            </NavLink>
            <Link to="/about" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">
              About Us
            </Link>
            <Link to="/about#our-founders" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">
              Our Founders
            </Link>
            <Link to="/about#project-umeed" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">
              Project Ummeed by Sanjivni
            </Link>
            <Link to="/about#our-lakshya" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">
              Our Lakshya
            </Link>
            {primaryMenu
              .filter((item) => item.path !== '/')
              .map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]"
                >
                  {item.label}
                </NavLink>
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
