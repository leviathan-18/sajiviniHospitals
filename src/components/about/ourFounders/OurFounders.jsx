const OurFounders = () => {

  return (
    <section className="pt-0 pb-16 md:pb-20 bg-[linear-gradient(180deg,rgba(253,250,248,0.96),#ffffff)] font-sans">
      <div className="bg-[#AD3048] text-white py-10 md:py-12 mb-10 md:mb-12 shadow-[0_12px_30px_rgba(173,48,72,0.18)]">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-6">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/75 mb-3">About Sanjivini</p>
            <h1 className="text-3xl md:text-5xl font-serif uppercase tracking-[0.18em]">
            Our Founders
            </h1>
          </div>
          <img
            src="/cardiogram-icon-medical-icon-in-the-hospital-icon-sPdUiBDP.jpg"
            alt="Medical heart icon"
            className="w-16 h-16 md:w-20 md:h-20 shrink-0 object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-8 lg:gap-10 items-start lg:grid-cols-2">
          <div className="rounded-[30px] border border-[#ead7db] bg-white shadow-[0_22px_50px_rgba(21,62,76,0.12)] overflow-hidden">
            <img
              src="/founders_photo.jpg"
              alt="Dr. S.N. Gupta & Dr. Mamta Gupta"
              className="w-full h-[360px] md:h-[460px] object-cover"
            />

            <div className="grid grid-cols-2 gap-4 bg-[#f9f1f2] border-t border-[#ead7db] px-4 md:px-6 py-5">
              <div className="text-center">
                <h3 className="text-[#194656] text-lg md:text-xl font-serif uppercase">Dr S.N Gupta</h3>
                <p className="text-[#194656] text-xs md:text-sm leading-relaxed mt-1">
                  MD,FCCP (USA), EDRM(EUROPE)
                </p>
                <p className="text-[#194656] text-xs md:text-sm leading-relaxed">
                  Pulmonology, <br /> Critical Care & Sleep medicine
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-[#194656] text-lg md:text-xl font-serif uppercase">Dr Mamta Gupta</h3>
                <p className="text-[#194656] text-xs md:text-sm leading-relaxed mt-1">MBBS, DNB(RDI)</p>
                <p className="text-[#194656] text-xs md:text-sm leading-relaxed">Radiology</p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#ead7db] bg-[#fffdfd] p-7 md:p-10 shadow-[0_18px_40px_rgba(21,62,76,0.07)]">
            <p className="text-gray-800 text-base md:text-lg font-semibold leading-relaxed">
              Belonging to an extremely humble background, our founders have designed the hospital on 3A's
            </p>

            <h2 className="mt-6 text-[#1b2230] text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#B0304A]">A</span>dvanced{' '}
              <span className="text-[#B0304A]">A</span>ccessible{' '}
              <span className="text-[#B0304A]">A</span>ffordable
            </h2>

            <div className="mt-6 space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-bold">Advanced</span> - The infrastructure of the hospital is comparable to the
                international standards. Technologies like laminar air-flow, fully automated pathology, the best
                neonatal and adult ventilators, best in the market CT- Scan, and one of the only few to have a
                dedicated Sleep lab.
              </p>

              <p>
                <span className="font-bold">Accessible</span> - Our team of specialists and medical officers are easily
                available and always ready to answer the queries of our patients. We know, diseases can be troublesome
                and so we are always happy to help.
              </p>

              <p>
                <span className="font-bold">Affordable</span> - All our services and team efforts are based on the
                hospital's value of
              </p>
            </div>

            <p className="mt-6 text-[#194656] text-3xl md:text-4xl font-serif text-center">
              "Patient Care Comes First"
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-14 rounded-[30px] border border-[#ead7db] bg-white p-4 md:p-6 shadow-[0_18px_40px_rgba(21,62,76,0.10)]">
          <iframe
            className="w-full aspect-video rounded-[24px] border border-[#E9D7DA]"
            src="https://www.youtube.com/embed/R51y4Crqk1c"
            title="Hospital Tour Sanjivini Super Speciality Hospital Gomti Nagar Lucknow"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OurFounders;