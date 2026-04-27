import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Specialists = () => {
  const specialists = [
    {
      name: "DR ABHAY PRATAP SINGH",
      degree: "SENIOR CONSULTANT, INTERNAL MEDICINE",
      img: "https://sanjivinihospitals.com/wp-content/uploads/2024/05/Dr.-Abhay-Pratap-Singh.webp"
    },
    {
      name: "DR. MAMTA GUPTA",
      degree: "MBBS, DNB (RADIODIAGNOSIS)",
      img: "https://sanjivinihospitals.com/wp-content/uploads/2024/05/Dr.-Mamta-Gupta.webp"
    },
    {
      name: "DR. S.N. GUPTA",
      degree: "MD, FCCP (USA), EDRM",
      img: "https://sanjivinihospitals.com/wp-content/uploads/2024/05/Dr.S-N-Gupta.webp"
    },
    {
      name: "DR. SIDDHIDATRI",
      degree: "OBSTETRICS & GYNAECOLOGY",
      img: "https://sanjivinihospitals.com/wp-content/uploads/2024/05/Dr-Siddhitari.webp"
    },
    {
      name: "DR. ABHISHEK GUPTA",
      degree: "CONSULTANT, PULMONOLOGY & CRITICAL CARE",
      img: "https://sanjivinihospitals.com/wp-content/uploads/2024/05/Dr.-Abhishek-Gupta.webp"
    }
  ];

  return (
    <section className="overflow-x-hidden bg-white py-10 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-[#194656] text-2xl md:text-4xl font-serif uppercase tracking-widest mb-4 md:mb-5">
            Meet Our Specialist
          </h2>
          <p className="text-gray-900 font-bold max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            We are a team of highly dedicated super specialist doctors who are pioneers in their respective fields <br className="hidden md:block" />
            with immense experience of more than 30 years.
          </p>
        </div>

        <div className="px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Scrollbar]}
            spaceBetween={18}
            slidesPerView={1}
            navigation
            loop={true}
            grabCursor={true}
            
            /* Autoplay settings: Slowed down to 4 seconds */
            autoplay={{ 
              delay: 1000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            
            /* Speed of transition */
            speed={900}

            /* Improved swipe/touch responsiveness */
            touchEventsTarget="container"
            threshold={5}
            longSwipesRatio={0.1}

            pagination={{ clickable: true }}
            scrollbar={{ draggable: true, hide: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3.2, spaceBetween: 22 },
            }}
            className="specialist-swiper pb-6"
          >
            {specialists.map((doc, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-full group cursor-pointer">
                  <div className="bg-[#FDF2F2] rounded-t-3xl overflow-hidden flex justify-center items-end pt-4 h-[280px] md:h-[300px]">
                    <img 
                      src={doc.img} 
                      alt={doc.name} 
                      className="h-[90%] w-auto object-contain transition-all duration-500 transform group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="bg-[#AD3048] text-white p-4 text-center rounded-b-lg flex-grow min-h-[92px] flex flex-col justify-center">
                    <h4 className="font-extrabold text-base uppercase tracking-wider mb-1">
                      {doc.name}
                    </h4>
                    <p className="text-[10px] font-medium opacity-90 tracking-widest leading-tight">
                      {doc.degree}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .specialist-swiper .swiper-button-next,
        .specialist-swiper .swiper-button-prev {
          color: #AD3048;
          transform: scale(0.65);
        }

        .specialist-swiper .swiper-pagination-bullet-active {
          background: #AD3048;
        }

        .specialist-swiper .swiper-scrollbar-drag {
          background: #AD3048;
        }
      `}</style>
    </section>
  );
};

export default Specialists;