const OurLakshya = () => {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(132,193,188,0.78), rgba(132,193,188,0.78)), url('https://sanjivinihospitals.com/wp-content/uploads/2022/07/medicine-capsules-global-health-with-geometric-pattern-digital-remix-scaled.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="about-shell text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/40 bg-white/45 px-6 py-10 md:px-10 md:py-12 backdrop-blur-sm shadow-[0_16px_40px_rgba(21,62,76,0.10)]">
          <h2 className="text-[#1B4D67] font-serif text-3xl md:text-4xl uppercase tracking-[0.2em]">
          Our Lakshya
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-[#0A1F2E] text-base md:text-lg leading-relaxed">
            At Sanjivini, you will instantly discover that you are more than just a patient. From how we
            have designed our patient rooms to how we serve you, we have left no stone unturned,
            ensuring that both your medical and personal needs are placed above everything else.
            Our Lakshya is to deliver the best medical services at highly affordable prices so that all
            segments of society, irrespective of financial wellbeing, can avail the advantages of
            advanced medical care and infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurLakshya;