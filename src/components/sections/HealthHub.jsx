import React from 'react';

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
      <div className="text-center pt-12 pb-10 px-4">
        <span className="inline-flex items-center rounded-full border border-[#AD3048]/20 bg-[#FDF2F2] px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#AD3048]">
          Health Hub
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-serif uppercase tracking-[0.18em] text-[#194656]">Be Informed, Be Healthy</h2>
      </div>

      {/* 2. Video Playlist Container */}
      <div className="container mx-auto px-4 max-w-6xl pb-16">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-[28px] border border-[#E9D7DA] bg-white shadow-[0_18px_45px_rgba(21,62,76,0.12)]">
          
          {/* Large Video Player */}
          <div className="lg:w-2/3 bg-black aspect-video">
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
          <div className="lg:w-1/3 bg-[#FFFDFD] flex flex-col h-[400px] lg:h-[500px] border-l border-[#E9D7DA]">
            <div className="p-5 border-b border-[#E9D7DA] flex justify-between items-center bg-[#FDF7F7]">
              <span className="font-black text-[#AD3048] text-sm uppercase tracking-[0.2em]">Playlist</span>
              <span className="text-xs font-bold text-[#7C5A61] uppercase tracking-[0.2em]">
                {playlistVideos.length} Videos
              </span>
            </div>
            
            {/* Scroll Area Fix: Added overflow-y-auto and flex-1 */}
            <div className="overflow-y-auto flex-1 custom-playlist-scroll">
              {playlistVideos.map((video, index) => (
                <div key={index} className="flex gap-4 p-4 border-b border-[#F3E4E6] hover:bg-[#FFF4F5] cursor-pointer transition-all group">
                  <div className="w-28 h-16 bg-gray-200 rounded-lg relative flex-shrink-0 overflow-hidden shadow-sm ring-1 ring-black/5">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/0.jpg`} 
                      alt="thumb" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-all">
                       <div className="w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                         <div className="border-t-[5px] border-t-transparent border-l-[8px] border-l-[#AD3048] border-b-[5px] border-b-transparent ml-1"></div>
                       </div>
                    </div>
                  </div>
                  <p className="text-[11px] font-extrabold text-[#194656] leading-tight uppercase tracking-tight">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Also Read & Big Action Buttons Strip */}
      <div className="w-full">
        <div className="container mx-auto px-6 py-6 flex items-center gap-4 max-w-6xl">
          <div className="w-10 h-10 rounded-full border-2 border-[#AD3048] flex items-center justify-center animate-bounce bg-white shadow-sm">
            <span className="text-[#AD3048] text-xl font-bold">↓</span>
          </div>
          <span className="text-[#7C5A61] font-black uppercase tracking-[0.22em] text-sm italic">Also Read</span>
        </div>

        <div className="flex flex-col md:flex-row w-full text-white font-bold uppercase">
          <div className="md:w-1/2 bg-[#AD3048] py-8 px-12 flex justify-center items-center hover:brightness-95 cursor-pointer transition-all border-r border-white/10 text-xl md:text-2xl text-center leading-tight">
            <span className="underline decoration-2 underline-offset-8">Project Ummeed - Old Age Care Program</span>
          </div>
          <div className="md:w-1/2 bg-[#194656] py-8 px-12 flex justify-center items-center hover:brightness-95 cursor-pointer transition-all text-xl md:text-2xl text-center tracking-tighter">
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