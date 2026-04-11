import React from 'react';

const SuccessStories = () => (
  <section className="w-full bg-gradient-to-b from-[#fffdfd] to-white">
    <div className="py-14 container mx-auto px-6 max-w-6xl">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#AD3048]/20 bg-[#FDF2F2] px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#AD3048]">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl text-[#194656] font-serif uppercase tracking-[0.18em]">Real Stories of Care</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <iframe className="w-full aspect-video rounded-[24px] shadow-[0_18px_45px_rgba(21,62,76,0.12)] border border-[#E9D7DA]" src="https://www.youtube.com/embed/PsjXxewe3CM" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="lg:w-1/3 bg-[#FFFDFD] p-4 rounded-[24px] h-[400px] overflow-y-auto border border-[#E9D7DA] shadow-[0_12px_30px_rgba(21,62,76,0.08)] custom-success-scroll">
          <p className="font-bold mb-4 border-b border-[#E9D7DA] pb-3 text-[#AD3048] uppercase tracking-[0.2em] text-xs">Playlist (5 Videos)</p>
          {[1,2,3,4,5].map(v => (
            <div key={v} className="flex gap-3 mb-4 cursor-pointer hover:bg-[#FFF4F5] p-2 rounded-xl transition-colors border border-transparent hover:border-[#F1DBDD]">
              <div className="w-24 h-14 bg-[#F7EDEE] rounded-lg flex-shrink-0 border border-[#E9D7DA]"></div>
              <p className="text-xs font-medium text-[#194656]">Success Story | Project Umeed by Sanjivini...</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      .custom-success-scroll::-webkit-scrollbar {
        width: 5px;
      }
      .custom-success-scroll::-webkit-scrollbar-track {
        background: #f7ecee;
      }
      .custom-success-scroll::-webkit-scrollbar-thumb {
        background: #AD3048;
        border-radius: 10px;
      }
    `}</style>
  </section>
);

export default SuccessStories;