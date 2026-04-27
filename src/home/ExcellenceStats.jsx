import { useEffect, useRef, useState } from 'react';

const CounterNumber = ({ value, duration = 1400 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    const node = hostRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        setHasAnimated(true);
        const start = performance.now();

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, hasAnimated, value]);

  return <span ref={hostRef}>{count.toLocaleString('en-IN')}</span>;
};

const ExcellenceStats = () => {
  return (
    <section className="w-full py-14 text-white md:py-20" style={{
      backgroundImage: "linear-gradient(rgba(25,70,86,0.55), rgba(173,48,72,0.45)), url('https://sanjivinihospitals.com/wp-content/uploads/2022/07/medicine-capsules-global-health-with-geometric-pattern-digital-remix-scaled.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="inline-block px-2 py-2 text-2xl font-serif uppercase tracking-wide text-white sm:px-4 md:px-6 md:text-5xl">
          Excellence And Innovation At Heart
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="text-4xl font-bold text-[#F3F8FB] sm:text-5xl md:text-6xl">
              <CounterNumber value={25} />+
            </h3>
            <p className="mt-3 text-xl font-semibold sm:text-2xl">Years Of Excellence</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#F3F8FB] sm:text-5xl md:text-6xl">
              <CounterNumber value={100000} />+
            </h3>
            <p className="mt-3 text-xl font-semibold sm:text-2xl">Happy Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceStats;