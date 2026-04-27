import { useState, useEffect } from "react";
import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import internalImage from "../../images/Specialties/Internal_Medicine/internal.webp";
import projectUmmeedGif from "../../images/Specialties/Internal_Medicine/Project-Ummeed-Page_1-1.gif";
import drAKUpadhyayImage from "../../images/Specialties/Internal_Medicine/Dr.-A.K.-Upadhyay-copy.webp";

// Slideshow images for 3rd image slot
import inMed01 from "../../images/Specialties/Internal_Medicine/third image slide show/In-med-01-new-edit.webp";
import inMed02 from "../../images/Specialties/Internal_Medicine/third image slide show/In-med-02-.webp";
import inMed03 from "../../images/Specialties/Internal_Medicine/third image slide show/In-med-03.webp";
import inMed04 from "../../images/Specialties/Internal_Medicine/third image slide show/In-med-04.webp";
import inMed05 from "../../images/Specialties/Internal_Medicine/third image slide show/In-med-05-.webp";

const treatedConditions = [
  "Rheumatic Fever",
  "Thyroid",
  "Diabetes",
  "UTI- Urinary Tract Infection",
  "Gastroenteritis",
  "GERD- Gastroesophageal reflux DISEASE",
  "Diarrhoea",
  "Influenza",
  "Hypertension (Blood Pressure)",
  "Polymyalgia Rheumatica",
  "Infectious Diseases",
  "Seasonal Diseases"
];

const facilities = [
  "Infection Control Unit",
  "Rehabilitation &",
  "Physiotherapy Unit",
  "Infection Control Unit",
  "Critical Care Unit"
];

const specialists = [
  {
    name: "Dr. A.K. Upadhyay",
    qualification: "MBBS, MD. GENERAL MEDICINE",
    role: "Senior Consultant",
    location: "Department Of Internal Medicine & Diabetologist",
    imagePath: drAKUpadhyayImage,
    imageAlt: "Dr. A.K. Upadhyay"
  }
];

const slideshowImages = [
  { id: 1, imagePath: inMed01, alt: "Health condition 1" },
  { id: 2, imagePath: inMed02, alt: "Health condition 2" },
  { id: 3, imagePath: inMed03, alt: "Health condition 3" },
  { id: 4, imagePath: inMed04, alt: "Health condition 4" },
  { id: 5, imagePath: inMed05, alt: "Health condition 5" }
];

function InternalMedicineSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const goPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="internal-slideshow-container">
      <div className="slideshow-image-wrapper">
        <img
          src={slideshowImages[currentSlide].imagePath}
          alt={slideshowImages[currentSlide].alt}
          loading="lazy"
        />
      </div>
      <div className="slideshow-nav">
        <button
          className="slideshow-btn prev-btn"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="slideshow-dots">
          {slideshowImages.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          className="slideshow-btn next-btn"
          onClick={goNext}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function InternalMedicinePage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip">
          <h1>Internal Medicine</h1>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Internal Medicine - Best General Physician In Lucknow</h2>
            <p>
              Sanjivini's Department of Internal Medicine has set benchmarks in the state's healthcare industry by successfully treating complicated emergencies and chronic ailments. Our team of specialists, supported by highly trained nursing and para medical staff, together deliver high standards of patient care and monitoring. Continuous visits by the medical officers ensures patient safety and higher recovery results. Our mission is to deliver the best-standards of patient care for a holistic recovery of the patient.
            </p>
            <p>
              Sanjivini's Department of Internal Medicine is equipped with international of infrastructure to treat our patients across any diseases, a few of them are:
            </p>
            <ul className="pulmo-list two-col">
              {treatedConditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Facilities</h2>
            <p>
              Sanjivini's Department of Internal Medicine is always updated with highly advanced treatment protocols and is supported by technologically advanced machinery/equipment. Department consists of the following units:
            </p>
            <ul className="pulmo-list two-col">
              {facilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Why Sanjivini ?</h2>
            <p>
              Sanjivini's Department of Internal Medicine is dedicated and delivers consistently on the value of "patient care comes first". Specialists with decades of experience are our heroes who work tirelessly only to cater to the patient needs in the best available standards. With strict Infection Protocol and dedicated staff to maintain hygiene, Sanjivini has negligible cross infection rates. With the best diabetes specialist in Lucknow and the best physician in Lucknow, Sanjivini's team of doctors, patiently listen to patient complaints and very easily treat them
            </p>
          </section>
        </div>

        <aside className="pulmo-side-rail">
          <div className="pulmo-image-slot side side-tall">
            <img src={internalImage} alt="Internal Medicine banner" loading="lazy" />
          </div>
          <div className="pulmo-image-slot side side-rect">
            <img src={projectUmmeedGif} alt="Project Ummeed" loading="lazy" />
          </div>
          <div className="pulmo-image-slot side side-square">
            <InternalMedicineSlideshow />
          </div>
        </aside>
      </section>

      <section className="pulmo-section">
        <h2 className="pulmo-specialist-title">Specialist</h2>
        <div className="pulmo-doctor-grid single-specialist-grid">
          {specialists.map((doctor) => (
            <article className="pulmo-doctor-card" key={doctor.name}>
              <div className="pulmo-image-slot doctor">
                {doctor.imagePath ? (
                  <img src={doctor.imagePath} alt={doctor.imageAlt} loading="lazy" />
                ) : (
                  <span>Add Doctor Image</span>
                )}
              </div>
              <h3>{doctor.name}</h3>
              <p className="specialist-qualification">{doctor.qualification}</p>
              <p className="specialist-role">{doctor.role}</p>
              <p className="specialist-location">{doctor.location}</p>
            </article>
          ))}
        </div>
      </section>

      <SpecialtyFooterCta />
    </main>
  );
}
