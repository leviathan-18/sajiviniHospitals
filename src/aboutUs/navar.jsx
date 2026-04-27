import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImage from '../images/build/logo.png';
import { primaryMenu } from '../shared/navigation/menuData';
import { specialtiesMegaMenu } from '../specialties/specialtiesData';

const getActiveSection = (pathname, hash) => {
  if (pathname.startsWith('/about')) {
    return 'about';
  }

  if (pathname.startsWith('/specialties')) {
    return 'specialties';
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
  const [isSpecialtiesMenuOpen, setIsSpecialtiesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSpecialtiesOpen, setIsMobileSpecialtiesOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  // Desktop nav link styling (768px+)
  const navLinkBase =
    "relative inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-bold text-[rgb(173,48,72)] !no-underline transition-all duration-300 md:text-[11px] md:px-2 lg:text-[12px] lg:px-2.5 xl:text-[13px] xl:px-3 2xl:text-[14px] 2xl:px-4 after:content-[''] after:absolute after:left-1.5 after:right-1.5 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#AD3048] after:transition-transform after:duration-300 hover:bg-[#FDF2F2] hover:text-[rgb(173,48,72)] hover:!no-underline hover:after:scale-x-100";

  const navLinkActive = 'bg-[#FDF2F2] text-[rgb(173,48,72)] after:scale-x-100';

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

  const openSpecialtiesMenu = () => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setIsSpecialtiesMenuOpen(true);
  };

  const closeSpecialtiesMenu = () => {
    const timerId = window.setTimeout(() => {
      setIsSpecialtiesMenuOpen(false);
    }, 120);
    setCloseTimer(timerId);
  };

  const closeMenus = () => {
    setIsAboutMenuOpen(false);
    setIsSpecialtiesMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileSpecialtiesOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenus();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9D9DD] bg-white/90 text-[rgb(173,48,72)] shadow-[0_10px_30px_rgba(21,62,76,0.08)] backdrop-blur-xl">
      <div className="container mx-auto w-full max-w-7xl px-2 py-3 sm:px-4 sm:py-3.5 lg:px-4 lg:py-4">
        <div className="flex min-w-0 flex-nowrap items-center justify-between gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-5">
          {/* Logo */}
          <Link to="/" className="shrink-0" onClick={handleMenuItemClick}>
            <img src={logoImage} alt="Sanjivini Logo" className="h-10 max-w-[120px] object-contain sm:h-11 md:h-10 lg:h-11 xl:h-12 2xl:h-14" />
          </Link>

          {/* Mobile: Hamburger (320px - 767px) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => {
              setIsMobileMenuOpen((current) => !current);
            }}
            className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#E9D9DD] bg-white text-[rgb(173,48,72)] shadow-sm transition hover:bg-[#FDF2F2] sm:h-9 sm:w-9 md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          {/* Tablet & Desktop: Main nav (768px+) */}
          <nav className="nav-scroll-tablet hidden min-w-0 flex-1 items-center justify-start gap-0.5 whitespace-nowrap text-[#AD3048] md:inline-flex lg:gap-1 xl:justify-center xl:gap-1.5 2xl:gap-2">
            <NavLink to="/" className={routeLinkClass} end>
              Home
            </NavLink>

            {/* About Us with dropdown */}
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
                  className={`text-[8px] transition-transform duration-300 ${isAboutMenuOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </Link>

              <div
                className={`absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-[16px] border border-[#E9D9DD] bg-white p-2 shadow-[0_24px_50px_rgba(21,62,76,0.14)] transition-all duration-200 ${
                  isAboutMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                }`}
                onMouseEnter={openAboutMenu}
                onMouseLeave={closeAboutMenu}
              >
                <Link
                  to="/about#our-founders"
                  onClick={handleMenuItemClick}
                  className="block rounded-lg px-3 py-2 text-[11px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]"
                >
                  Our Founders
                </Link>
                <Link
                  to="/about#project-umeed"
                  onClick={handleMenuItemClick}
                  className="block rounded-lg px-3 py-2 text-[11px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]"
                >
                  Project Ummeed by Sanjivni
                </Link>
                <Link
                  to="/about#our-lakshya"
                  onClick={handleMenuItemClick}
                  className="block rounded-lg px-3 py-2 text-[11px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]"
                >
                  Our Lakshya
                </Link>
              </div>
            </div>

            {/* Specialties with mega menu */}
            <div
              className="relative"
              onMouseEnter={openSpecialtiesMenu}
              onMouseLeave={closeSpecialtiesMenu}
              onFocusCapture={openSpecialtiesMenu}
              onBlurCapture={closeSpecialtiesMenu}
            >
              <button
                type="button"
                onClick={() => setIsSpecialtiesMenuOpen((value) => !value)}
                className={`${navLinkBase} ${activeSection === 'specialties' || isSpecialtiesMenuOpen ? navLinkActive : ''}`}
              >
                Specialties
                <span
                  className={`text-[8px] transition-transform duration-300 ${isSpecialtiesMenuOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 mt-2 w-[min(90vw,900px)] -translate-x-1/2 overflow-hidden rounded-[16px] border border-[#E9D9DD] bg-white px-4 py-3 shadow-[0_24px_50px_rgba(21,62,76,0.14)] whitespace-normal transition-all duration-200 ${
                  isSpecialtiesMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                }`}
                onMouseEnter={openSpecialtiesMenu}
                onMouseLeave={closeSpecialtiesMenu}
              >
                <div className="grid gap-3 md:grid-cols-3">
                  {specialtiesMegaMenu.map((section) => (
                    <div key={section.heading} className="min-w-0">
                      <h3 className="mb-1.5 border-l-4 border-[#AD3048] pl-2 text-[9px] font-black uppercase leading-tight tracking-[0.04em] text-[#AD3048] md:text-[10px]">
                        {section.heading}
                      </h3>
                      <div className="space-y-0.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/specialties/${item.slug}`}
                            onClick={handleMenuItemClick}
                            className="group flex items-start gap-1.5 rounded-lg px-2 py-1.5 text-[11px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-[1px] bg-[#E8B6C0] group-hover:bg-[#AD3048]" aria-hidden="true" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other menu items */}
            {primaryMenu
              .filter((item) => item.path !== '/' && item.path !== '/specialties' && item.path !== '/about')
              .map((item) => (
                <NavLink key={item.path} to={item.path} className={routeLinkClass} onClick={handleMenuItemClick}>
                  {item.label}
                </NavLink>
              ))}
          </nav>

          {/* Call button (768px+) */}
          <a
            href="tel:0522-4232333"
            className="hidden shrink-0 rounded-full bg-[#AD3048] px-3 py-1.5 text-[11px] font-bold text-white shadow-[0_14px_30px_rgba(173,48,72,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#194656] hover:shadow-[0_18px_36px_rgba(25,70,86,0.25)] lg:inline-flex lg:px-3.5 lg:py-2 lg:text-[12px] xl:px-4 xl:text-[13px]"
          >
            Call Us
          </a>
        </div>

        {/* Mobile: Full menu (320px - 767px) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[calc(100vh-110px)] overflow-y-auto pt-2' : 'max-h-0'}`}
        >
          <nav className="rounded-lg border border-[#E9D9DD] bg-white p-2 shadow-[0_8px_16px_rgba(21,62,76,0.08)]">
            <NavLink to="/" end onClick={handleMenuItemClick} className="block rounded-lg px-3 py-2.5 text-[12px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]">
              Home
            </NavLink>
            <Link to="/about" onClick={handleMenuItemClick} className="block rounded-lg px-3 py-2.5 text-[12px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]">
              About Us
            </Link>
            <Link to="/about#our-founders" onClick={handleMenuItemClick} className="block rounded-lg px-3 py-2.5 text-[12px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]">
              Our Founders
            </Link>
            <Link to="/about#project-umeed" onClick={handleMenuItemClick} className="block rounded-lg px-3 py-2.5 text-[12px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]">
              Project Ummeed by Sanjivni
            </Link>
            <Link to="/about#our-lakshya" onClick={handleMenuItemClick} className="block rounded-lg px-3 py-2.5 text-[12px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]">
              Our Lakshya
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileSpecialtiesOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[12px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]"
            >
              <span>Specialties</span>
              <span className={`text-xs transition-transform ${isMobileSpecialtiesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isMobileSpecialtiesOpen ? 'max-h-[60vh] overflow-y-auto pb-1' : 'max-h-0'}`}>
              {specialtiesMegaMenu.map((section) => (
                <div key={section.heading} className="px-3 py-1">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#AD3048]">{section.heading}</p>
                  <div className="space-y-0.5">
                    {section.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/specialties/${item.slug}`}
                        onClick={handleMenuItemClick}
                        className="block rounded-lg px-3 py-1.5 text-[11px] font-medium text-[#AD3048] transition hover:bg-[#FDF2F2]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {primaryMenu
              .filter((item) => item.path !== '/' && item.path !== '/specialties' && item.path !== '/about')
              .map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className="block rounded-lg px-3 py-2.5 text-[12px] font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2]"
                >
                  {item.label}
                </NavLink>
              ))}

            <a
              href="tel:0522-4232333"
              className="mt-2 block rounded-full bg-[#AD3048] px-3 py-2.5 text-center text-[12px] font-bold text-white shadow-[0_14px_30px_rgba(173,48,72,0.22)] transition hover:bg-[#194656]"
            >
              Call Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
