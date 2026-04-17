import { useEffect, useState } from "react";
import awantikaMehrotraImage from "../../images/Specialties/Geriatric/slide-Show/awantika-mehrotra-2.webp";
import rohitAilaniImage from "../../images/Specialties/Geriatric/slide-Show/Rohit-Ailani-1.webp";
import snGuptaImage from "../../images/Specialties/Geriatric/slide-Show/sn-gupta-1.webp";
import mamtaGuptaImage from "../../images/Specialties/Geriatric/slide-Show/Mamta-mam-1.webp";
import abhishekGuptaImage from "../../images/Specialties/Geriatric/slide-Show/Abhishek-Gupta-2.webp";
import akUpadhyayImage from "../../images/Specialties/Geriatric/slide-Show/Ak-Upadhyay-2.webp";
import sonaliSharmaImage from "../../images/Specialties/Geriatric/slide-Show/sonali-sharma-2.webp";
import rkSrivastavaImage from "../../images/Specialties/Geriatric/slide-Show/Rk-Shrivastva-2.webp";
import ashishJainImage from "../../images/Specialties/Geriatric/slide-Show/ashish-jain-2.webp";

const specialistSlides = [
  {
    name: "Dr. Awantika Mehrotra",
    qualifications: "B.D.S, B.ED, M.H.A",
    line1: "Senior Consultant",
    line2: "Department of Dentistry",
    imagePath: awantikaMehrotraImage
  },
  {
    name: "Dr. Rohit Ailani",
    qualifications: "MS - Orthopaedics",
    line1: "Senior Consultant",
    line2: "Joint Replacement Specialist",
    line3: "Department Orthopaedics & Trauma",
    imagePath: rohitAilaniImage
  },
  {
    name: "Dr S.N. Gupta",
    qualifications: "MD,FCCP(USA), EDRM(EUROPE)",
    line1: "Head of Department Pulmonology,",
    line2: "Critical Care & Sleep Medicine",
    imagePath: snGuptaImage
  },
  {
    name: "Dr Mamta Gupta",
    qualifications: "MBBS, DNB(RDI)",
    line1: "Head of Department",
    line2: "Radiology",
    imagePath: mamtaGuptaImage
  },
  {
    name: "Dr. Abhishek Gupta",
    qualifications: "MBBS, MD - FIP, EDARM",
    line1: "Junior Consultant",
    line2: "Pulmonology, Critical Care",
    imagePath: abhishekGuptaImage
  },
  {
    name: "Dr. A.K. Upadhyay",
    qualifications: "MBBS, MD - General Medicine",
    line1: "Senior Consultant",
    line2: "Department of Internal Medicine &",
    line3: "Diabetologist",
    imagePath: akUpadhyayImage
  },
  {
    name: "Sonali Sharma",
    qualifications: "MD - Gynae & Obs",
    line1: "Senior Consultant",
    line2: "Department of Gynecology & Obstetrics",
    imagePath: sonaliSharmaImage
  },
  {
    name: "Dr. R. K. Srivastava",
    qualifications: "MS - Orthopaedics",
    line1: "Senior Consultant",
    line2: "Department Orthopaedics & Trauma",
    imagePath: rkSrivastavaImage
  },
  {
    name: "Dr. Ashish Jain",
    qualifications: "M.B.B.S.(AFMC), M.S.(Ortho), M.CH., DIP.SICOT, AOSPINE",
    line1: "Senior Consultant",
    line2: "Department of Spine Surgery",
    imagePath: ashishJainImage
  }
];

function getCardsPerView() {
  if (typeof window === "undefined") {
    return 3;
  }

  if (window.innerWidth < 760) {
    return 1;
  }

  if (window.innerWidth < 1100) {
    return 2;
  }

  return 3;
}

export default function MeetSpecialistsCarousel() {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (startIndex > specialistSlides.length - 1) {
      setStartIndex(0);
    }
  }, [startIndex]);
  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const autoplayInterval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % specialistSlides.length);
    }, 4500);

    return () => clearInterval(autoplayInterval);
  }, [isPaused]);

  const visibleCards = Array.from({ length: cardsPerView }, (_, idx) => {
    const cardIndex = (startIndex + idx) % specialistSlides.length;
    return specialistSlides[cardIndex];
  });

  const currentPage = Math.floor(startIndex / cardsPerView);
  const totalPages = Math.ceil(specialistSlides.length / cardsPerView);

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % specialistSlides.length);
  };

  const goPrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + specialistSlides.length) % specialistSlides.length
    );
  };

  return (
    <section
      className="specialist-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="specialist-carousel-head">
        <div>
          <p className="specialist-carousel-kicker">Senior Consultant Team</p>
          <h2>Meet Our Specialists</h2>
          <p>
            Highly experienced super-specialist doctors leading multidisciplinary
            care with decades of clinical expertise.
          </p>
        </div>

      </div>

      <div className="specialist-carousel-shell">
        <button
          type="button"
          className="specialist-nav-btn"
          onClick={goPrev}
          aria-label="Previous specialists"
        >
          ←
        </button>

        <div className="specialist-cards" style={{ gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))` }}>
          {visibleCards.map((card) => (
            <article className="specialist-slide-card" key={card.name}>
              <div className="specialist-image-wrap">
                <img src={card.imagePath} alt={card.name} loading="lazy" />
              </div>

              <div className="specialist-info-box">
                <h3>{card.name}</h3>
                <p className="specialist-qualification-text">{card.qualifications}</p>
                <p className="specialist-dept-line">{card.line1}</p>
                <p className="specialist-dept-line">{card.line2}</p>
                {card.line3 ? <p className="specialist-dept-line">{card.line3}</p> : null}
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="specialist-nav-btn"
          onClick={goNext}
          aria-label="Next specialists"
        >
          →
        </button>
      </div>

      <div className="specialist-carousel-dots" role="tablist" aria-label="Specialist slides pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-label={`Go to group ${index + 1}`}
            aria-selected={index === currentPage}
            className={`specialist-dot ${index === currentPage ? "is-active" : ""}`}
            onClick={() => setStartIndex(index * cardsPerView)}
          />
        ))}
      </div>
    </section>
  );
}
