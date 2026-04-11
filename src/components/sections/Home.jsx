import { useEffect, useState } from 'react';


const slides = [
  {
    src: `${process.env.PUBLIC_URL}/sanjivini-hospital-building.jpg`,
    alt: 'Sanjivini hospital building',
    title: 'Care that feels steady, warm, and trustworthy',
    subtitle: 'Modern care, clean spaces, and a reassuring welcome for every patient.',
  },
  {
    src: `${process.env.PUBLIC_URL}/founders_photo.jpg`,
    alt: 'Founders of Sanjivini Hospitals',
    title: 'Led by experienced hands',
    subtitle: 'A team focused on personal attention and dependable care.',
  },
  {
    src: `${process.env.PUBLIC_URL}/home-page-img-1.jpeg`,
    alt: 'Hospital patient care area',
    title: 'Advanced care spaces built around comfort',
    subtitle: 'Thoughtfully designed treatment zones for safer and smoother care.',
  },
  {
    src: `${process.env.PUBLIC_URL}/sanjivini-hospital-img4.jpg`,
    alt: 'Sanjivini hospital facility',
    title: 'Spaces designed for comfort and trust',
    subtitle: 'Facilities that support smoother visits and better healing.',
  },
  {
    src: encodeURI(`${process.env.PUBLIC_URL}/susanjeevani-hospital img 3.jpeg`),
    alt: 'Susanjeevani hospital view',
    title: 'A hospital presence that feels welcoming',
    subtitle: 'Automatic movement with simple controls when you want them.',
  },
];


const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <section className="w-full overflow-x-clip">
      {/* 1. Main Banner Area */}
      <div className="container mx-auto max-w-7xl px-2 py-3 sm:px-4 sm:py-4">
        <div
          className="relative overflow-hidden rounded-[22px] border border-[#d8c5c9] bg-[#f7efed] shadow-[0_18px_50px_rgba(21,62,76,0.12)] sm:rounded-[30px] lg:rounded-[36px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,176,59,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(173,48,72,0.1),_transparent_26%)]" />

          <div className="relative grid min-h-[290px] lg:grid-cols-[1.05fr_0.95fr] lg:min-h-[390px]">
            <div className="flex items-center px-4 py-5 md:px-7 md:py-7">
              <div className="max-w-xl text-[#173D48]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#AD3048]">
                  Sanjivini Hospitals
                </p>
                <h1 className="mt-2 text-lg font-black leading-[1.08] text-[#173D48] sm:text-xl md:text-2xl lg:text-[1.9rem]">
                  {slides[activeSlide].title}
                </h1>
                <p className="mt-2 max-w-lg text-[11px] leading-5 text-[#5f6b70] sm:text-xs md:text-sm md:leading-5">
                  {slides[activeSlide].subtitle}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    className="rounded-full bg-[#AD3048] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#8f273a] sm:text-sm"
                  >
                    Contact Us
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={goToPreviousSlide}
                      aria-label="Previous slide"
                      className="grid h-8 w-8 place-items-center rounded-full border border-[#d8c5c9] bg-white text-base font-semibold text-[#173D48] transition hover:bg-[#fff4f6] sm:h-9 sm:w-9"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goToNextSlide}
                      aria-label="Next slide"
                      className="grid h-8 w-8 place-items-center rounded-full bg-[#FBB03B] text-base font-semibold text-[#194656] transition hover:bg-[#f3a520] sm:h-9 sm:w-9"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.alt}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeSlide ? 'w-7 bg-[#AD3048] sm:w-9' : 'w-2.5 bg-[#b8b0b0] hover:bg-[#8e8282]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden lg:min-h-[390px]">
              <div
                className="flex h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.alt} className="relative min-w-full">
                    <img
                      src={slide.src}
                      alt=""
                      aria-hidden="true"
                      className="h-[250px] w-full object-cover object-center lg:h-[390px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#173D48]/10 via-transparent to-[#173D48]/45" />
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f7efed] to-transparent lg:w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Blue Emergency & Trauma Strip */}
      <div className="relative overflow-hidden border-y border-[#d8c5c9] bg-[#fff8f6] py-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(173,48,72,0.08),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(251,176,59,0.12),_transparent_22%)]" />
        <div className="container relative mx-auto max-w-7xl px-4">
          <div className="grid items-stretch gap-4 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="rounded-[28px] bg-[#AD3048] p-5 md:p-6 text-white shadow-[0_18px_50px_rgba(173,48,72,0.14)]">
              <span className="inline-flex items-center rounded-full bg-[#FBB03B] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#194656]">
                24x7 Emergency
              </span>
              <h2 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                Emergency care, fast and calm
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/84">
                Immediate support with a patient-first approach, designed to feel reassuring instead of crowded.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-2xl font-black text-[#FBB03B]">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">Care access</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-2xl font-black text-[#56B7C3]">Fast</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">Response</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-[24px] border border-[#d8c5c9] bg-white shadow-[0_14px_35px_rgba(21,62,76,0.08)] flex h-full flex-col">
                <div className="p-4 min-h-[112px]">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#AD3048]">Clean care</p>
                  <p className="mt-2 text-sm leading-5 text-[#4e5a60]">Quiet, sterile, and organized spaces for urgent visits.</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/clean-care.jpeg`} alt="Clean care" className="h-24 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[#d8c5c9] bg-white shadow-[0_14px_35px_rgba(21,62,76,0.08)] flex h-full flex-col">
                <div className="p-4 min-h-[112px]">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#AD3048]">Trusted team</p>
                  <p className="mt-2 text-sm leading-5 text-[#4e5a60]">Experienced staff focused on quick attention and comfort.</p>
                </div>
                <img
                  src={`${process.env.PUBLIC_URL}/home-page-img-1.jpeg`}
                  alt="Trusted team"
                  className="h-24 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[#d8c5c9] bg-white shadow-[0_14px_35px_rgba(21,62,76,0.08)] flex h-full flex-col">
                <div className="p-4 min-h-[112px]">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#AD3048]">Immediate help</p>
                  <p className="mt-2 text-sm leading-5 text-[#4e5a60]">Clear support when every minute matters most.</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/immediate-help.png`} alt="Immediate help" className="h-24 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;