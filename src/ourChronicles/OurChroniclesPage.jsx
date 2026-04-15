import { useState } from 'react';
import { Link } from 'react-router-dom';
import operationTheatreImage from "../images/contactUs/contactUs.jpg";
import "../facilitiesAndServices/facilitiesAndServices.css";

const OurChroniclesPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const chronicles = [
    {
      id: 1,
      year: '2022',
      title: 'Foundation & Vision',
      description: 'Sanjivini Super Speciality Hospital was founded with a vision to provide advanced, accessible, and affordable healthcare services to the community. The hospital was established with state-of-the-art infrastructure and a team of dedicated specialists.',
      icon: '🏥',
    },
    {
      id: 2,
      year: '2022-2023',
      title: '500+ Successful Surgeries',
      description: 'Within the first year of operation, we successfully completed over 500 complex surgical procedures across multiple specialties including cardiology, orthopedics, and neurology.',
      icon: '⚕️',
    },
    {
      id: 3,
      year: '2023',
      title: 'ICU & Critical Care Excellence',
      description: 'Launched our state-of-the-art ICU facility with advanced ventilators and monitoring systems. Achieved a 95% recovery rate for critical care patients, setting new standards in patient care.',
      icon: '🏥',
    },
    {
      id: 4,
      year: '2023-2024',
      title: 'Project Ummeed - Community Outreach',
      description: 'Initiated Project Ummeed, our flagship community care program providing subsidized treatment and health camps for underprivileged sections of society. Reached over 5000 patients.',
      icon: '❤️',
    },
    {
      id: 5,
      year: '2024',
      title: '24/7 Trauma & Emergency Services',
      description: 'Established round-the-clock trauma services with dedicated teams, ambulances, and infrastructure. Achieved fastest emergency response time in the region.',
      icon: '🚑',
    },
    {
      id: 6,
      year: '2024',
      title: 'Sleep Lab & Diagnostic Excellence',
      description: 'Opened one of the few dedicated Sleep Disorders Lab in the region, equipped with advanced sleep study equipment and offering comprehensive sleep management services.',
      icon: '🔬',
    },
    {
      id: 7,
      year: '2024-2025',
      title: '10,000+ Lives Touched',
      description: 'Milestone achievement of providing healthcare services to over 10,000 patients with a 98% satisfaction rate. Established partnerships with 30+ insurance companies and TPAs.',
      icon: '🌟',
    },
    {
      id: 8,
      year: '2025-2026',
      title: 'Excellence & Growth',
      description: 'Continued expansion of facilities, recruitment of senior consultants, and enhanced patient care protocols. Committed to becoming the benchmark for healthcare excellence in the region.',
      icon: '📈',
    },
  ];

  return (
    <main className="chronicles-page">
      <section className="facilities-hero">
              <div className="facilities-hero-inner" style={{ backgroundImage: `url('${operationTheatreImage}')` }}>
                <div className="facilities-hero-copy">
                  <p className="facilities-hero-kicker">Sanjivini Hospitals</p>
                  <h1>We let nothing come between you and quality care.</h1>
                  <p className="facilities-hero-text">
                    Focus on what matters while we take care of your quality of life.
                    Explore our facilities, critical care units, and advanced
                    diagnostic services.
                  </p>
      
                  <div className="facilities-hero-actions">
                    <Link to="/contact-us" className="facilities-hero-button">
                      Contact Us
                    </Link>
                    <a href="#facility-list" className="facilities-hero-button facilities-hero-button-secondary">
                      Download Factsheet
                    </a>
                  </div>
                </div>
              </div>
      </section>
      

      <section className="chronicles-timeline container mx-auto px-6 max-w-6xl py-20" id="chronicles-timeline">
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#AD3048] via-[#194656] to-[#a3d3cc] transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {chronicles.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className="bg-white rounded-2xl border border-[#e0d5d8] p-6 shadow-[0_12px_30px_rgba(21,62,76,0.08)] cursor-pointer transition-all duration-300 hover:shadow-[0_18px_40px_rgba(21,62,76,0.14)]"
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-[#AD3048] font-bold text-sm uppercase tracking-widest mb-2">
                          {item.year}
                        </p>
                        <h3 className="text-xl md:text-2xl font-serif text-[#194656] mb-3">
                          {item.title}
                        </h3>
                        <p
                          className={`text-gray-700 text-sm md:text-base leading-relaxed transition-all duration-300 ${
                            expandedId === item.id ? 'line-clamp-none' : 'line-clamp-2'
                          }`}
                        >
                          {item.description}
                        </p>
                        <button
                          className="mt-4 text-[#AD3048] font-semibold text-sm hover:text-[#194656] transition"
                        >
                          {expandedId === item.id ? 'Show Less' : 'Read More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-0 md:w-0 justify-center">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#AD3048] rounded-full border-4 border-white shadow-[0_0_0_4px_rgba(173,48,72,0.1)]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="chronicles-stats bg-gradient-to-r from-[#194656] to-[#2d5f75] py-16 md:py-20 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#FBB03B] mb-2">10000+</p>
              <p className="text-lg font-semibold text-white/90">Lives Touched</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#56B7C3] mb-2">98%</p>
              <p className="text-lg font-semibold text-white/90">Patient Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#F37D79] mb-2">30+</p>
              <p className="text-lg font-semibold text-white/90">Insurance Partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#AD3048] mb-2">24/7</p>
              <p className="text-lg font-semibold text-white/90">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurChroniclesPage;
