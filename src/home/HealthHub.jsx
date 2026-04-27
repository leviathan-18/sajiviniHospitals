
const HealthHub = () => {
  // 8 Videos ka data array
  const playlistVideos = [
    { id: "nyfB8R36DVU", title: "Decoding PID | Understanding Pelvic Inflammatory Disease" },
    { id: "PsjXxewe3CM", title: "Decoding UTIs | Understanding Urinary Tract Infection" },
    { id: "PsjXxewe3CM", title: "PCOD क्या है? | Causes, Symptoms and Treatment" },
    { id: "nyfB8R36DVU", title: "Infertility: Be Aware, Be Informed" },
    { id: "PsjXxewe3CM", title: "Fertility Boost: Unveiling Home Remedies" },
    { id: "nyfB8R36DVU", title: "Understanding Infertility: A Journey of Hope" },
    { id: "PsjXxewe3CM", title: "Thyroid & Pregnancy: What You Need to Know" },
    { id: "nyfB8R36DVU", title: "Prenatal Care: Tips for a Healthy Pregnancy" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#fff8f8] font-sans">
      {/* 1. Health Hub Header */}
      <div className="px-4 pb-8 pt-10 text-center sm:pb-10 sm:pt-12">
        <span className="inline-flex items-center rounded-full border border-[#AD3048]/20 bg-[#FDF2F2] px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#AD3048]">
          Health Hub
        </span>
        <h2 className="mt-5 text-[1.6rem] font-serif uppercase tracking-[0.08em] text-[#194656] sm:mt-6 sm:text-4xl md:text-5xl md:tracking-[0.18em]">Be Informed, Be Healthy</h2>
      </div>

      {/* 2. Video Playlist Container */}
      <div className="container mx-auto max-w-6xl px-2 pb-12 sm:px-4 sm:pb-16">
        <div className="flex flex-col gap-6 overflow-hidden rounded-[20px] border border-[#E9D7DA] bg-white shadow-[0_18px_45px_rgba(21,62,76,0.12)] sm:rounded-[28px] lg:flex-row lg:gap-0">
          
          {/* Large Video Player */}
          <div className="bg-black aspect-video lg:w-2/3">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/nyfB8R36DVU" 
              title="Health Hub Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Scrollable Playlist Sidebar - Fix: Added fixed height for desktop */}
          <div className="flex h-[370px] flex-col border-l border-[#E9D7DA] bg-[#FFFDFD] sm:h-[400px] lg:h-[500px] lg:w-1/3">
            <div className="flex items-center justify-between border-b border-[#E9D7DA] bg-[#FDF7F7] px-3 py-4 sm:p-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#AD3048] sm:text-sm sm:tracking-[0.2em]">Playlist</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7C5A61] sm:text-xs sm:tracking-[0.2em]">
                {playlistVideos.length} Videos
              </span>
            </div>
            
            {/* Scroll Area Fix: Added overflow-y-auto and flex-1 */}
            <div className="overflow-y-auto flex-1 custom-playlist-scroll">
              {playlistVideos.map((video, index) => (
                <div key={index} className="group flex gap-3 border-b border-[#F3E4E6] p-3 transition-all hover:bg-[#FFF4F5] sm:gap-4 sm:p-4">
                  <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 shadow-sm ring-1 ring-black/5 sm:h-16 sm:w-28">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/0.jpg`} 
                      alt="thumb" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-all">
                       <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-md sm:h-7 sm:w-7">
                         <div className="border-t-[5px] border-t-transparent border-l-[8px] border-l-[#AD3048] border-b-[5px] border-b-transparent ml-1"></div>
                       </div>
                    </div>
                  </div>
                  <p className="line-clamp-3 text-[12px] font-extrabold leading-tight tracking-tight text-[#194656] sm:text-[11px] sm:uppercase">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Also Read & Big Action Buttons Strip */}
      <div className="w-full pt-2 sm:pt-4">
        <div className="container mx-auto flex max-w-6xl items-center gap-3 px-3 py-5 sm:gap-4 sm:px-6 sm:py-6">
          <div className="w-10 h-10 rounded-full border-2 border-[#AD3048] flex items-center justify-center animate-bounce bg-white shadow-sm">
            <span className="text-[#AD3048] text-xl font-bold">↓</span>
          </div>
          <span className="text-xs font-black uppercase tracking-[0.12em] text-[#7C5A61] italic sm:text-sm sm:tracking-[0.22em]">Also Read</span>
        </div>

        <div className="flex w-full flex-col gap-px text-white font-bold uppercase md:flex-row md:gap-0">
          <div className="flex items-center justify-center bg-[#AD3048] px-4 py-6 text-center text-lg leading-tight transition-all hover:brightness-95 cursor-pointer md:w-1/2 md:border-r md:border-white/10 md:px-12 md:py-8 md:text-2xl">
            <span className="underline decoration-2 underline-offset-8">Project Ummeed - Old Age Care Program</span>
          </div>
          <div className="flex items-center justify-center bg-[#194656] px-4 py-6 text-center text-lg tracking-tighter transition-all hover:brightness-95 cursor-pointer md:w-1/2 md:px-12 md:py-8 md:text-2xl">
            24x7 Emergency Medical Care
          </div>
        </div>
      </div>

      {/* Inline Style for Scrollbar appearance */}
      <style>{`
        .custom-playlist-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-playlist-scroll::-webkit-scrollbar-track {
          background: #f7ecee;
        }
        .custom-playlist-scroll::-webkit-scrollbar-thumb {
          background: #AD3048;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default HealthHub;