import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import pulmonaryGif from "../../images/Specialties/Pulmonology/Pulmonary-GIF.gif";
import projectUmmeedGif from "../../images/Specialties/Pulmonology/Project-Ummeed-Page_1-1.gif";
import quitSmokingImage from "../../images/Specialties/Pulmonology/02.webp";
import breathingWellnessImage from "../../images/Specialties/Pulmonology/03-02-1024x1024.webp";
import drSNGuptaImage from "../../images/Specialties/Pulmonology/Dr.-S.N.-Gupta.webp";
import drAbhishekGuptaImage from "../../images/Specialties/Pulmonology/Dr.-Abhishake-Gupta.webp";

const treatedConditions = [
  "Chronic Obstructive Pulmonary Disease (COPD)",
  "Tuberculosis",
  "Asthma",
  "Regular / Frequent Cough",
  "Blood in Sputum",
  "Allergic Bronchitis",
  "Pneumonia",
  "Breathlessness",
  "Bronchiectasis",
  "Chest Pain",
  "Interstitial Lung Disease",
  "Sarcoidosis",
  "Pulmonary Embolism",
  "Pleural Effusion",
  "Pneumothorax"
];

const facilities = [
  "C-arm Assisted Bronchoscopy",
  "Lung Biopsy",
  "Pulmonary Function Testing",
  "Diffusion Study",
  "Pulmonary Rehabilitation",
  "BiPAP/CPAP/O2 Therapy",
  "Polysomnography",
  "Sputum Test & Other Laboratory Testing",
  "Spirometry (PFT)",
  "Nebulization",
  "CT-Scan",
  "Ambulatory Blood Pressure Monitoring",
  "24x7 Emergency, Trauma and Ambulance Service",
  "Sleep Study Lab"
];

const specialists = [
  {
    name: "Dr. S.N. Gupta",
    qualification: "MD, FCCP (USA), EDRM (Europe)",
    role: "Head of Department - Pulmonology, Critical Care & Sleep Medicine",
    imagePath: drSNGuptaImage,
    imageAlt: "Dr. S.N. Gupta"
  },
  {
    name: "Dr. Abhishek Gupta",
    qualification: "MBBS, MD, FIP, EDARM",
    role: "Junior Consultant - Pulmonology, Critical Care",
    imagePath: drAbhishekGuptaImage,
    imageAlt: "Dr. Abhishek Gupta"
  }
];

const sideBanners = [
  {
    id: 1,
    className: "side-tall",
    imagePath: pulmonaryGif,
    imageAlt: "Pulmonary awareness"
  },
  {
    id: 2,
    className: "side-rect",
    imagePath: projectUmmeedGif,
    imageAlt: "Project Ummeed"
  },
  {
    id: 3,
    className: "side-square",
    imagePath: quitSmokingImage,
    imageAlt: "Quit smoking"
  },
  {
    id: 4,
    className: "side-square",
    imagePath: breathingWellnessImage,
    imageAlt: "Breathing wellness"
  }
];

export default function PulmonologySleepMedicinePage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip">
          <h1>Pulmonology &amp; Sleep Medicine</h1>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Pulmonology and Sleep Medicine - Best Chest Specialist in Lucknow</h2>
            <p>
              Department of Pulmonology and Sleep Medicine at Sanjivini is a complete
              pool of world-class treatments and diagnostic services for all respiratory
              diseases and sleep disorders. Common conditions treated at the department
              include Asthma, COPD, Pneumonia, Interstitial Lung Disease, Tuberculosis
              and Sleep Apnea.
            </p>
            <p>
              The department offers complete diagnostics through advanced lung function
              testing labs, diffusion studies and a fully equipped bronchoscopy suite
              with C-arm. The combination of expertise and technology supports complex
              therapeutic and endobronchial procedures.
            </p>
            <p>
              Department of Pulmonology and Sleep Medicine at Sanjivini provides a
              holistic treatment for:
            </p>
            <ul className="pulmo-list two-col">
              {treatedConditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Facilities &amp; Services</h2>
            <p>
              The Department of Pulmonology and Sleep Medicine is designed to provide
              treatment through technologically advanced equipment and highly trained
              medical professionals. The department is headed by Dr. S.N. Gupta and
              offers the following services.
            </p>
            <ul className="pulmo-list two-col">
              {facilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="pulmo-note">
              The hospital offers a Sleep Study Package which covers overnight stay at
              the hospital.
            </p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Why Sanjivini ?</h2>
            <p>
              Sanjivini&apos;s Department of Pulmonology &amp; Sleep Medicine is dedicated to the idea of “Where patient care comes first” and is supported by medically advanced equipment for diagnosis and treatment of any respiratory condition. The department is headed by Dr. SN Gupta-one of the most senior pulmonologist in Uttar Pradesh with highly trained team of experts and nurses who manage any situation. With a combination of German and American machinery for Pulmonary Function Testing, Diffusion Study and Bronchoscopy  Sanjivini Hospital offers world class care in Pulmonology ( Chest Care) at affordable prices and is the best hospital in Lucknow for lung and sleep disorders.
            </p>
            <p>
              24×7 Emergency and Ambulance services makes our hospital accessible for all patients. We have the best ventilator support for any medical emergency or critical situation.
            </p>
          </section>
        </div>

        <aside className="pulmo-side-rail">
          {sideBanners.map((banner) => (
            <div key={banner.id} className={`pulmo-image-slot side ${banner.className}`}>
              {banner.imagePath ? (
                <img src={banner.imagePath} alt={banner.imageAlt} loading="lazy" />
              ) : (
                <span>Add Sidebar Image</span>
              )}
            </div>
          ))}
        </aside>
      </section>

      <section className="pulmo-section">
        <h2 className="pulmo-specialist-title">Specialist</h2>
        <div className="pulmo-doctor-grid">
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
              <p>{doctor.qualification}</p>
              <p>{doctor.role}</p>
            </article>
          ))}
        </div>
      </section>

      <SpecialtyFooterCta />
    </main>
  );
}