import { useState } from 'react';

const benefits = ['Free Consultations', 'Free Medical Officer Visits', 'Free Nursing Care', 'Free Balanced Diet'];

const ProjectUmmeed = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="about-shell py-10 md:py-14">
      <div className={`grid gap-8 lg:gap-10 items-stretch ${expanded ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-[6fr_4fr]'}`}>
        <div className="rounded-[30px] border border-[#ead7db] bg-[#fffdfd] p-7 md:p-10 shadow-[0_18px_40px_rgba(21,62,76,0.07)]">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#AD3048] font-bold">Social care program</p>
              <h2 className="mt-2 text-[#194656] font-serif text-2xl md:text-3xl uppercase tracking-[0.2em]">
                Project Ummeed By Sanjivini
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="shrink-0 rounded-full border border-[#AD3048] px-4 py-2 text-sm font-bold text-[#AD3048] transition hover:bg-[#AD3048] hover:text-white"
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          </div>

          <p className="mt-2 text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl">
            True to our values, we have an exclusive program for indoor patients of 65 years and above*.
            {expanded ? ' It is designed to reduce friction in the care journey and make the experience calmer, warmer, and easier to trust.' : ''}
          </p>

          <div className="mt-8 rounded-[24px] bg-[linear-gradient(135deg,rgba(173,48,72,0.06),rgba(25,70,86,0.04))] border border-[#ead7db] p-6 md:p-7">
            <h3 className="text-2xl md:text-4xl leading-tight text-gray-900">
              PROJECT <span className="text-[#C63C3C]">UMMEED</span>{' '}
              <span className="text-2xl md:text-4xl">offers:</span>
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base md:text-lg leading-relaxed text-gray-800">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 border border-[#ead7db] shadow-[0_8px_18px_rgba(21,62,76,0.05)]">
                  {item}
                </div>
              ))}
            </div>

            {expanded && (
              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl">
                Everything about <span className="text-[#C63C3C] font-semibold">Sanjivini</span> is very well crafted,
                designed and deeply thought about, making it a complete package of{' '}
                <span className="text-[#C63C3C] font-semibold">advanced yet highly affordable care in Gomti Nagar, Lucknow.</span>
              </p>
            )}

            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mt-6 text-sm font-semibold text-[#AD3048] underline decoration-[#AD3048]/30 underline-offset-4"
            >
              {expanded ? 'Collapse project details' : 'Read project details'}
            </button>
          </div>
        </div>

        {!expanded && (
          <div className="flex items-stretch gap-3 lg:gap-4">
            <span className="hidden xl:flex items-center justify-center self-center text-sm text-gray-500 tracking-[0.26em] uppercase font-semibold -rotate-180 [writing-mode:vertical-rl]">
              #inspiringhealthcare
            </span>

            <div className="w-full overflow-hidden rounded-[30px] border border-[#ead7db] bg-white p-3 shadow-[0_18px_45px_rgba(21,62,76,0.10)]">
              <img
                src="/project-umeed2.webp"
                alt="Project Ummeed by Sanjivani"
                className="w-full h-full min-h-[320px] object-contain rounded-[22px] bg-white"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectUmmeed;