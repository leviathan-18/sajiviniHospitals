import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import pediatricsTallImage from "../../images/Specialties/Pediatrics_Neonatology/Pediatrics-copy.webp";
import projectUmmeedGif from "../../images/Specialties/Pediatrics_Neonatology/Project-Ummeed-Page_1-1.gif";
import kidsCareImage from "../../images/Specialties/Pediatrics_Neonatology/Paediatrics-and-Neonatology-v3.webp";
import childCareImage from "../../images/Specialties/Pediatrics_Neonatology/Paediatrics-and-Neonatology-2-v4--1024x1024.webp";
import drPandeyImage from "../../images/Specialties/Pediatrics_Neonatology/docnew4.jpg";

const treatments = [
  "Low birth weight of premature babies",
  "Infections",
  "Congenital defects",
  "Acute and Chronic Kidney diseases",
  "Respiratory Tract Infections / Respiratory problems",
  "Congenital anomalies of the renal tract",
  "Inherited Nephropathies",
  "Glomerulonephritis",
  "Urinary tract infection",
  "Paediatric eye condition",
  "Gastroenteritis",
  "Vasculitis",
  "Childhood obesity",
  "Inherited and Acquired forms of Tubulopathy",
  "Renal stones",
  "Vesicoureteric reflux",
  "Nephrotic syndrome",
  "Pneumonia",
  "Congenital airway problems",
  "Infections like Asthma",
  "Bone and joint problems"
];

const facilities = [
  "Pediatric Intensive Care Unit",
  "Paediatric General Surgery",
  "NICU- Neonatal Intensive Care Unit",
  "Critical Care Ventilator support",
  "Modular Operation theatres",
  "Dialysis24x7 Vital Monitoring & recording Units as recommended by healthcare associations",
  "24x7 availability of emergency and trauma team to manage all injuries",
  "24x7 CT scan & Digital X-ray",
  "Ultrasound"
];

const specialists = [
  {
    name: "Dr S. M. Pandey",
    qualification: "MBBS, DCH, DNB, fellowship in Pediatric Gastroenterology",
    role: "Senior Consultant",
    location: "Department of Pediatrics & Neonatology",
    imagePath: drPandeyImage,
    imageAlt: "Dr S. M. Pandey"
  }
];

const sideBanners = [
  {
    id: 1,
    className: "side-tall",
    imagePath: pediatricsTallImage,
    imageAlt: "Pediatrics and neonatology"
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
    imagePath: kidsCareImage,
    imageAlt: "Expert care for kids"
  },
  {
    id: 4,
    className: "side-square",
    imagePath: childCareImage,
    imageAlt: "Every need of your child"
  }
];

export default function PediatricsNeonatologyPage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip geri-top-strip">
          <h1>Pediatrics and Neonatology</h1>
          <span className="geri-strip-icon" aria-hidden="true">
            Peds
          </span>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Department of Paediatrics and Neonatology - Best Child Hospital in Lucknow</h2>
            <p>
              Sanjivini Department of paediatrics and neonatology offers the best child care in Lucknow across any medical condition with the support of highly experienced team of specialists, medically advanced equipments and a highly trained team of para-medical staff. We offer in-patient, out-patient and intensive care services.
            </p>
            <p>
              Sanjivini Department of paediatrics and neonatology delivers specialized care for newborns, premature babies with low weight, child or a newborn suffering from any infections, heart problems or congenital defects.
            </p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Treatments</h2>
            <p>
              At Sanjivini, the team is driven by the idea of "patient care comes first" and we therefore put our hearts into delivering a holistic medical care.
            </p>
            <p>
              The Department of paediatrics and neonatology aspires to make the time easy and comfortable at the hospital whilst making a difference in the well being of children, adolescents and their families.
            </p>
            <ul className="pulmo-list">
              {treatments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Facilities</h2>
            <p>
              Sanjivini Department of paediatrics and neonatology delivers the best paediatric care through latest equipments, highly trained medical professionals, Paediatric Intensive care facilities, operating rooms with advanced technology and fully automated laboratory services which help in early diagnosis and treatment of any medical disorders.
            </p>
            <ul className="pulmo-list">
              {facilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Why Sanjivini</h2>
            <p>
              Sanjivini Department of paediatrics and neonatology is well equipped with advanced equipments, experienced team of specialists and a highly trained team of medical professional who can manage any situation to provide the best treatment protocol to the patient. With the best paediatric doctor in lucknow, Sanjivini is always ready to help with emergency or trauma cases.
            </p>
            <p>
              Being a Multi disciplinary hospital, Paediatric Department benefits from the availability of super specialists of other departments, all under one roof.
            </p>
            <p>
              The department has successfully delivered across many complex and critical cases and has the record of providing the best treatments in the region.
            </p>
            <p>
              Sanjivini Department of Pediatrics and Neonatology is the most Advanced Accessible Affordable medical care provider in Lucknow.
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
        <div className="pulmo-doctor-grid single-specialist-grid">
          {specialists.map((doctor) => (
            <article className="pulmo-doctor-card" key={doctor.name}>
              <div className="pulmo-image-slot doctor">
                <img src={doctor.imagePath} alt={doctor.imageAlt} loading="lazy" />
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
