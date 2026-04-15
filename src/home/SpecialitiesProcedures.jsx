import { useState } from 'react';

const SpecialitiesProcedures = () => {
  const [activeTab, setActiveTab] = useState('specialties');

  // Specialties Data (Maroon Theme)
  const specialties = [
    { title: 'Pulmonology & Sleep medicine', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Pulmonology-Sleep-medicine.png' },
    { title: 'Geriatric & Palliative Care', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Geriatric-Palliative-Care.png' },
    { title: 'Internal Medicine', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Internal-Medicine.png' },
    { title: 'Gynecology & Obstetrics', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Gynecology-Obstetrics.png' },
    { title: 'Pediatrics & Neonatology', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Pediatrics-Neonatology.png' },
  ];

  // Procedures Data (Blue Theme - Using original Sanjivini icon paths)
  const procedures = [
    { title: 'Bronchoscopy', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Bronchoscopy.png' },
    { title: 'Appendix Surgery', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Appendix-Surgery.png' },
    { title: 'ACL Repair Surgery', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/ACL-Repair-Surgery.png' },
    { title: 'Hysterectomy', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Hysterectomy.png' },
    { title: 'Laproscopic Hernia Repair', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Laproscopic-Hernia-Repair.png' },
    { title: 'Gall Bladder Stone Removal', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Gall-Bladder-Stone-Removal.png' },
    { title: 'Ovarian Cyst Removal', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Ovarian-Cyst-Removal.png' },
    { title: 'Knee & Hip Replacement', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Knee-Hip-Replacement.png' },
    { title: 'Pediatric Surgery', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Pediatric-Surgery.png' },
    { title: 'Spinal Lamenectomy', img: 'https://sanjivinihospitals.com/wp-content/uploads/2024/05/Spinal-Lamenectomy.png' },
  ];

  const currentData = activeTab === 'specialties' ? specialties : procedures;
  const activeColor = activeTab === 'specialties' ? '#AD3048' : '#194656'; // Maroon vs Blue

  return (
    <section className="bg-white py-10 font-sans md:py-14 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4">
        
        {/* Tab Header Section */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 items-stretch">
          {/* Specialties Button */}
          <button 
            onClick={() => setActiveTab('specialties')}
            style={{ borderColor: '#efbcc5', color: activeTab === 'specialties' ? '#AD3048' : '#194656' }}
            className={`min-w-[150px] sm:min-w-[220px] px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-xl md:text-2xl font-serif uppercase tracking-wide border-t border-l border-r transition-all duration-300 relative ${
              activeTab === 'specialties' ? 'bg-white z-20 -mb-[1.5px] shadow-sm' : 'bg-transparent opacity-60'
            }`}
          >
            Specialties
          </button>

          {/* Procedures Button */}
          <button 
            onClick={() => setActiveTab('procedures')}
            style={{ borderColor: '#efbcc5', color: activeTab === 'procedures' ? '#AD3048' : '#194656' }}
            className={`min-w-[150px] sm:min-w-[220px] px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-xl md:text-2xl font-serif uppercase tracking-wide border-t border-l border-r transition-all duration-300 relative ${
              activeTab === 'procedures' ? 'bg-white z-20 -mb-[1.5px] shadow-sm' : 'bg-transparent opacity-60'
            }`}
          >
            Procedures
          </button>
        </div>

        {/* Main Content Box */}
        <div className="border border-[#efbcc5] bg-white p-5 sm:p-8 md:p-12">
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-4 sm:gap-x-6`}>
            {currentData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                {/* Icon Image */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain"
                    /* CSS Filter to match the color theme of the active tab */
                    style={{ 
                        filter: activeTab === 'procedures' 
                        ? 'invert(22%) sepia(21%) saturate(1633%) hue-rotate(153deg) brightness(92%) contrast(92%)' 
                        : 'none' 
                    }}
                  />
                </div>
                {/* Text Title */}
                <p 
                  style={{ color: activeColor }}
                  className="font-medium text-[11px] sm:text-xs md:text-sm leading-snug uppercase tracking-tight max-w-[140px]"
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialitiesProcedures;