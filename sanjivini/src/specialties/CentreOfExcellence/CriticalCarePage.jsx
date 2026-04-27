import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import criticalCareTallImage from "../../images/Specialties/Critical_care/VB-critical-care-copy.webp";
import projectUmmeedGif from "../../images/Specialties/Critical_care/Project-Ummeed-Page_1-1.gif";
import criticalCareSupportImage from "../../images/Specialties/Critical_care/Critical-care-1024x1024.webp";
import criticalCareProcedureImage from "../../images/Specialties/Critical_care/Critical-care-02.webp";

const whatWeTreat = [
  "Complete Geriatric Care - Closely monitored treatment for old patients since their body reacts differently to medication",
  "Sepsis",
  "Multiple organ failure",
  "Respiratory complications",
  "Acute respiratory conditions",
  "Pediatric and neonatal emergencies",
  "Women health emergencies and complications",
  "Accident/Multiple trauma - injuries to head, chest, abdomen, spine, or bones",
  "Pre and Post-surgery high risk patient care and complication management",
  "Continuous palliative care for terminally ill patients - Project Ummeed",
  "Complex infections like Gangrene",
  "Neurological emergencies",
  "Hepatic failure care"
];

const highlights = [
  "24x7 availability of emergency and trauma team to manage all injuries",
  "A dedicated team of intensivists and critical care specialists",
  "24x7 Vital Monitoring & recording Units as recommended by healthcare associations",
  "Strict infection control protocols",
  "Technologically and medically advanced infrastructure",
  "Availability of multi-disciplinary team of specialists",
  "Advanced isolation rooms for treatment of highly contagious diseases"
];

const criticalCareSupport = [
  "24x7 CT scan & Digital X-ray",
  "Ultrasound",
  "TMT",
  "Fully Automated Pathology",
  "Advanced Dialysis Unit",
  "Invasive and Non-invasive ventilators"
];

const icuProcedures = [
  "Non-invasive and invasive hemodynamic monitoring",
  "Non-invasive and invasive mechanical ventilation",
  "Difficult airway management in serious patients",
  "Percutaneous tracheostomy",
  "Fiber optic bronchoscopy",
  "Inter-costal drainage",
  "Percutaneous gastrostomy and G.I. Endoscopy",
  "Haemodialysis/SLED",
  "Bed side, X-ray, 2D echo, Doppler & ultra sonography",
  "Focused Assessment with Sonography in Trauma",
  "Pain management"
];

const sideBanners = [
  {
    id: 1,
    className: "side-tall",
    imagePath: criticalCareTallImage,
    imageAlt: "Critical care overview"
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
    imagePath: criticalCareSupportImage,
    imageAlt: "Critical care support"
  },
  {
    id: 4,
    className: "side-square",
    imagePath: criticalCareProcedureImage,
    imageAlt: "Critical care ICU procedures"
  }
];

export default function CriticalCarePage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip geri-top-strip">
          <h1>Critical Care</h1>
          <span className="geri-strip-icon" aria-hidden="true">
            ICU
          </span>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Critical Care</h2>
            <p>
              Sanjivini Hospital&apos;s Department of Critical Care is a distinguished
              centre for all critically and terminally ill patients. It constitutes
              of a devolved team of intensivists and critical care specialists who are
              trained to treat seriously ill patients.
            </p>
            <p>
              Sanjivini has 24x7 emergency and trauma services with the best physicians
              and surgeons. Our multi-disciplinary doctors are accustomed to manage all
              medical conditions, including multiple organ failures, severe breathing
              difficulty and serious trauma injuries. The department follows international
              protocols for infection control which keeps cross-infection rates at
              Sanjivini comparable to the best hospitals in the world.
            </p>
            <p>
              Our highly trained critical care experts provide safe, consistent and
              continuous pre-operative care to sick patients undergoing complex gyne,
              ortho, spinal, trauma, cosmetic or minimally invasive surgeries in our
              technologically advanced modular operation theatres.
            </p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>What We Treat</h2>
            <ul className="pulmo-list">
              {whatWeTreat.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Highlights of the Department</h2>
            <ul className="pulmo-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Critical Care Is Supported By</h2>
            <ul className="pulmo-list">
              {criticalCareSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Procedures Performed in Our ICU</h2>
            <ul className="pulmo-list">
              {icuProcedures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Why Choose Sanjivini</h2>
            <p>
              Sanjivini&apos;s Department of Critical Care is dedicated to the idea of
              "Where patient care comes first" and is supported by medically advanced
              equipment for closely monitored care and treatment. The department&apos;s highly
              trained team of experts and nurses manage any situation. 24x7 Emergency and
              Ambulance services makes our hospital accessible for all patients.
            </p>
            <p>
              We have the best ventilator support for any medical emergency or critical
              situation. With a combination of German and American machinery, Sanjivini
              Hospital offers a world class care for critical or trauma patients at highly
              affordable prices and is therefore been named the best hospital in Lucknow.
            </p>
            <p>
              Sanjivini&apos;s Department of Critical Care is the most Advanced Accessible
              Affordable intensive care provider in Lucknow.
            </p>
          </section>
        </div>

        <aside className="pulmo-side-rail">
          {sideBanners.map((banner) => (
            <div key={banner.id} className={`pulmo-image-slot side ${banner.className}`}>
              <img src={banner.imagePath} alt={banner.imageAlt} loading="lazy" />
            </div>
          ))}
        </aside>
      </section>

      <section className="pulmo-section">
        <h2 className="pulmo-specialist-title">Specialist</h2>
      </section>

      <SpecialtyFooterCta />
    </main>
  );
}
