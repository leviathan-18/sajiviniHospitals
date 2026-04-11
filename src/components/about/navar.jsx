import { useEffect, useMemo, useState } from 'react';

const normalizeLocation = () => {
  if (typeof window === 'undefined') {
    return { pathname: '/', hash: '' };
  }

  return {
    pathname: window.location.pathname.toLowerCase(),
    hash: window.location.hash.toLowerCase(),
  };
};

const buildLocationKey = ({ pathname, hash }) => `${pathname}${hash}`;

const getActiveSection = (locationKey) => {
  if (locationKey.startsWith('/about')) {
    return 'about';
  }

  if (locationKey === '/#specialties') {
    return 'specialties';
  }

  if (locationKey === '/#contact') {
    return 'contact';
  }

  return 'home';
};

const Navbar = () => {
  const [locationKey, setLocationKey] = useState(() => buildLocationKey(normalizeLocation()));
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  useEffect(() => {
    const updateLocation = () => setLocationKey(buildLocationKey(normalizeLocation()));

    window.addEventListener('popstate', updateLocation);
    window.addEventListener('hashchange', updateLocation);

    return () => {
      window.removeEventListener('popstate', updateLocation);
      window.removeEventListener('hashchange', updateLocation);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [closeTimer]);

  const activeSection = useMemo(() => getActiveSection(locationKey), [locationKey]);

  const navLinkBase =
    'relative inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-[11px] font-semibold transition-all duration-300 after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#AD3048] after:transition-transform after:duration-300 hover:bg-[#FDF2F2] hover:text-[#AD3048] hover:after:scale-x-100 lg:px-3 lg:py-2 lg:text-[13px]';

  const navLinkActive = 'bg-[#FDF2F2] text-[#AD3048] after:scale-x-100';

  const openAboutMenu = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
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

  const handleMenuItemClick = (href) => {
    setLocationKey(href.toLowerCase());
    setIsAboutMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-[#E9D9DD] bg-white/90 shadow-[0_10px_30px_rgba(21,62,76,0.08)] backdrop-blur-xl">
      <div className="container mx-auto px-3 py-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 md:gap-2">
          <a href="/" className="shrink-0">
            <img src="/logo.png" alt="Sanjivini Logo" className="h-9 object-contain sm:h-10 md:h-10 lg:h-12" />
          </a>

          <a
            href="/#specialties"
            onClick={() => handleMenuItemClick('/#specialties')}
            className="md:hidden shrink-0 rounded-full border border-[#efbcc5] bg-[#FDF2F2] px-2.5 py-1 text-[10px] font-semibold leading-none text-[#AD3048] whitespace-nowrap"
          >
            Specialities
          </a>

          <a
            href="/#facilities"
            onClick={() => handleMenuItemClick('/#facilities')}
            className="md:hidden shrink-0 rounded-full border border-[#efbcc5] bg-white px-2.5 py-1 text-[10px] font-semibold leading-none text-[#194656] whitespace-nowrap"
          >
            Facilities & Services
          </a>

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

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 whitespace-nowrap text-gray-800 md:flex md:mx-2 lg:mx-4">
            <a
              href="/#home"
              aria-current={activeSection === 'home' ? 'page' : undefined}
              className={`${navLinkBase} ${activeSection === 'home' ? navLinkActive : ''}`}
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={openAboutMenu}
              onMouseLeave={closeAboutMenu}
              onFocusCapture={openAboutMenu}
              onBlurCapture={closeAboutMenu}
            >
              <a
                href="/about"
                aria-current={activeSection === 'about' ? 'page' : undefined}
                className={`${navLinkBase} ${activeSection === 'about' || isAboutMenuOpen ? navLinkActive : ''}`}
              >
                About Us
                <span
                  className={`text-[10px] transition-transform duration-300 ${isAboutMenuOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </a>

              <div
                className={`absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-[22px] border border-[#E9D9DD] bg-white p-2 shadow-[0_24px_50px_rgba(21,62,76,0.14)] transition-all duration-200 ${
                  isAboutMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                }`}
                onMouseEnter={openAboutMenu}
                onMouseLeave={closeAboutMenu}
              >
                <a
                  href="/about#our-founders"
                  onClick={() => handleMenuItemClick('/about#our-founders')}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]"
                >
                  Our Founders
                </a>
                <a
                  href="/about#project-umeed"
                  onClick={() => handleMenuItemClick('/about#project-umeed')}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]"
                >
                  Project Ummeed by Sanjivni
                </a>
                <a
                  href="/about#our-lakshya"
                  onClick={() => handleMenuItemClick('/about#our-lakshya')}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]"
                >
                  Our Lakshya
                </a>
              </div>
            </div>

            <a
              href="/#specialties"
              aria-current={activeSection === 'specialties' ? 'page' : undefined}
              className={`${navLinkBase} ${activeSection === 'specialties' ? navLinkActive : ''}`}
            >
              Specialities
            </a>

            <a href="/#facilities" className={navLinkBase}>
              Facilities & Services
            </a>
            <a href="/#chronicles" className={navLinkBase}>
              Our Chronicles
            </a>
            <a href="/#empanelments" className={navLinkBase}>
              TPA's/Empanelments
            </a>
            <a
              href="#contact"
              aria-current={activeSection === 'contact' ? 'page' : undefined}
              className={`${navLinkBase} ${activeSection === 'contact' ? navLinkActive : ''}`}
            >
              Contact Us
            </a>
          </nav>

          <a
            href="tel:0522-4232333"
            className="hidden shrink-0 rounded-full bg-[#AD3048] px-3 py-2 text-xs font-bold text-white shadow-[0_14px_30px_rgba(173,48,72,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#194656] hover:shadow-[0_18px_36px_rgba(25,70,86,0.25)] lg:inline-flex lg:px-4 lg:text-sm"
          >
            Call Us
          </a>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[520px] pt-3' : 'max-h-0'}`}
        >
          <nav className="rounded-2xl border border-[#E9D9DD] bg-white p-2 shadow-[0_14px_30px_rgba(21,62,76,0.08)]">
            <a href="/#home" onClick={() => handleMenuItemClick('/#home')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">Home</a>
            <a href="/about" onClick={() => handleMenuItemClick('/about')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">About Us</a>
            <a href="/about#our-founders" onClick={() => handleMenuItemClick('/about#our-founders')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">Our Founders</a>
            <a href="/about#project-umeed" onClick={() => handleMenuItemClick('/about#project-umeed')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">Project Ummeed by Sanjivni</a>
            <a href="/about#our-lakshya" onClick={() => handleMenuItemClick('/about#our-lakshya')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">Our Lakshya</a>
            <a href="/#chronicles" onClick={() => handleMenuItemClick('/#chronicles')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">Our Chronicles</a>
            <a href="/#empanelments" onClick={() => handleMenuItemClick('/#empanelments')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">TPA's/Empanelments</a>
            <a href="#contact" onClick={() => handleMenuItemClick('/#contact')} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#FDF2F2] hover:text-[#AD3048]">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;