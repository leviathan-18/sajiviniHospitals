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

  const navLinkBase =
    'relative inline-flex items-center gap-0.5 rounded-full px-2.5 py-1.5 text-[12px] font-bold text-[#AD3048] transition-all duration-300 after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#AD3048] after:transition-transform after:duration-300 hover:bg-[#FDF2F2] hover:text-[#AD3048] hover:after:scale-x-100 max-[1024px]:gap-0 max-[1024px]:px-1.5 max-[1024px]:py-1 max-[1024px]:text-[10px] max-[1024px]:leading-none min-[1025px]:gap-0.5 min-[1025px]:px-2 min-[1025px]:py-1.5 min-[1025px]:text-[11px] min-[1440px]:gap-1 min-[1440px]:px-4 min-[1440px]:py-2.5 min-[1440px]:text-[15px]';

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
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-[#E9D9DD] bg-white/90 shadow-[0_10px_30px_rgba(21,62,76,0.08)] backdrop-blur-xl">
      <div className="container mx-auto px-3 py-3.5 sm:px-4 sm:py-4 lg:px-5 lg:py-4 xl:px-6">
        <div className="flex items-center justify-between gap-2 md:gap-1 lg:gap-2.5 xl:gap-4">
          <Link to="/" className="shrink-0" onClick={handleMenuItemClick}>
            <img src={logoImage} alt="Sanjivini Logo" className="h-10 object-contain sm:h-11 md:h-10 lg:h-11 min-[1440px]:h-14" />
          </Link>

          <Link
            to="/specialties"
            onClick={handleMenuItemClick}
            className="md:hidden shrink-0 rounded-full border border-[#efbcc5] bg-[#FDF2F2] px-2 py-0.75 text-[9px] font-semibold leading-none text-[#AD3048] whitespace-nowrap max-[360px]:px-1.5 max-[360px]:py-0.5 max-[360px]:text-[8px]"
          >
            Specialities
          </Link>

          <Link
            to="/facilities-and-services"
            onClick={handleMenuItemClick}
            className="md:hidden shrink-0 rounded-full border border-[#efbcc5] bg-white px-2 py-0.75 text-[9px] font-semibold leading-none text-[#AD3048] whitespace-nowrap max-[360px]:px-1.5 max-[360px]:py-0.5 max-[360px]:text-[8px]"
          >
            Facilities & Services
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-[#E9D9DD] bg-white text-[#AD3048] shadow-sm transition hover:bg-[#FDF2F2] md:hidden max-[360px]:h-8 max-[360px]:w-8"
          >
            <span className="flex flex-col gap-1.25 max-[360px]:gap-1">
              <span className="block h-0.5 w-4.5 bg-current" />
              <span className="block h-0.5 w-4.5 bg-current" />
              <span className="block h-0.5 w-4.5 bg-current" />
            </span>
          </button>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 whitespace-nowrap text-[#AD3048] md:flex md:mx-0 lg:mx-1 xl:gap-1">
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
                className={`absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-[22px] border border-[#E9D9DD] bg-white p-2 shadow-[0_24px_50px_rgba(21,62,76,0.14)] transition-all duration-200 max-[1024px]:w-56 ${
                  isAboutMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                }`}
                onMouseEnter={openAboutMenu}
                onMouseLeave={closeAboutMenu}
              >
                <Link
                  to="/about#our-founders"
                  onClick={handleMenuItemClick}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[1024px]:px-2.5 max-[1024px]:py-2 max-[1024px]:text-[11px]"
                >
                  Our Founders
                </Link>
                <Link
                  to="/about#project-umeed"
                  onClick={handleMenuItemClick}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[1024px]:px-2.5 max-[1024px]:py-2 max-[1024px]:text-[11px]"
                >
                  Project Ummeed by Sanjivni
                </Link>
                <Link
                  to="/about#our-lakshya"
                  onClick={handleMenuItemClick}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[1024px]:px-2.5 max-[1024px]:py-2 max-[1024px]:text-[11px]"
                >
                  Our Lakshya
                </Link>
              </div>
            </div>

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
                  className={`text-[11px] transition-transform duration-300 ${isSpecialtiesMenuOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 mt-3 w-[min(94vw,980px)] -translate-x-1/2 overflow-hidden rounded-[22px] border border-[#E9D9DD] bg-white px-5 py-4 shadow-[0_24px_50px_rgba(21,62,76,0.14)] whitespace-normal transition-all duration-200 max-[1024px]:w-[min(96vw,820px)] max-[1024px]:px-3 max-[1024px]:py-3 ${
                  isSpecialtiesMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                }`}
                onMouseEnter={openSpecialtiesMenu}
                onMouseLeave={closeSpecialtiesMenu}
              >
                <div className="grid gap-5 md:grid-cols-3">
                  {specialtiesMegaMenu.map((section) => (
                    <div key={section.heading} className="min-w-0">
                      <h3 className="mb-2 border-l-4 border-[#AD3048] pl-2 text-[11px] font-black uppercase leading-tight tracking-[0.04em] text-[#194656] lg:text-xs max-[1024px]:text-[10px]">
                        {section.heading}
                      </h3>
                      <div className="space-y-0.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/specialties/${item.slug}`}
                            onClick={handleMenuItemClick}
                            className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-[15px] font-medium text-[#1f2f35] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[1024px]:gap-1 max-[1024px]:px-1 max-[1024px]:py-1 max-[1024px]:text-[11px]"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#E8B6C0] group-hover:bg-[#AD3048]" aria-hidden="true" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {primaryMenu
              .filter((item) => item.path !== '/' && item.path !== '/specialties')
              .map((item) => (
                <NavLink key={item.path} to={item.path} className={routeLinkClass} onClick={handleMenuItemClick}>
                  {item.label}
                </NavLink>
              ))}
          </nav>

          <a
            href="tel:0522-4232333"
            className="hidden shrink-0 rounded-full bg-[#AD3048] px-4 py-2.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(173,48,72,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#194656] hover:shadow-[0_18px_36px_rgba(25,70,86,0.25)] min-[768px]:inline-flex min-[768px]:px-3.5 min-[768px]:py-1.5 min-[768px]:text-[11px] min-[1280px]:px-5 min-[1280px]:py-2.5 min-[1280px]:text-[15px] max-[767px]:px-3 max-[767px]:py-1.25 max-[767px]:text-[10px]"
          >
            Call Us
          </a>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[620px] pt-3' : 'max-h-0'}`}
        >
          <nav className="rounded-2xl border border-[#E9D9DD] bg-white p-2 shadow-[0_14px_30px_rgba(21,62,76,0.08)] max-[435px]:p-1.5">
            <NavLink to="/" end onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-3 max-[435px]:py-2.5 max-[435px]:text-[13px]">
              Home
            </NavLink>
            <Link to="/about" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-3 max-[435px]:py-2.5 max-[435px]:text-[13px]">
              About Us
            </Link>
            <Link to="/about#our-founders" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-3 max-[435px]:py-2.5 max-[435px]:text-[13px]">
              Our Founders
            </Link>
            <Link to="/about#project-umeed" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-3 max-[435px]:py-2.5 max-[435px]:text-[13px]">
              Project Ummeed by Sanjivni
            </Link>
            <Link to="/about#our-lakshya" onClick={handleMenuItemClick} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-3 max-[435px]:py-2.5 max-[435px]:text-[13px]">
              Our Lakshya
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileSpecialtiesOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-3 max-[435px]:py-2.5 max-[435px]:text-[13px]"
            >
              <span>Specialties</span>
              <span className={`text-xs transition-transform ${isMobileSpecialtiesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isMobileSpecialtiesOpen ? 'max-h-[520px] pb-1' : 'max-h-0'}`}>
              {specialtiesMegaMenu.map((section) => (
                <div key={section.heading} className="px-4 py-1 max-[435px]:px-3">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#194656] max-[435px]:text-[10px]">{section.heading}</p>
                  <div className="space-y-0.5">
                    {section.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/specialties/${item.slug}`}
                        onClick={handleMenuItemClick}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-2.5 max-[435px]:py-1.5 max-[435px]:text-[13px]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {primaryMenu
              .filter((item) => item.path !== '/' && item.path !== '/specialties')
              .map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#AD3048] transition hover:bg-[#FDF2F2] hover:text-[#AD3048] max-[435px]:px-3 max-[435px]:py-2.5 max-[435px]:text-[13px]"
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
