import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import jointLineImage from "../../images/Specialties/Bone & Joint Care/Joint-line-copy.webp";
import projectUmmeedGif from "../../images/Specialties/Bone & Joint Care/Project-Ummeed-Page_1-1.gif";
import boneCareImage from "../../images/Specialties/Bone & Joint Care/Bone-care-v3-1-1024x1024.webp";
import kneePainImage from "../../images/Specialties/Bone & Joint Care/Bone-care-2-v4-1-1024x1024.webp";
import drRKSrivastavaImage from "../../images/Specialties/Bone & Joint Care/Dr.-R.-K.-Srivastava-copy-1.webp";
import drRohitAilaniImage from "../../images/Specialties/Bone & Joint Care/Dr.-Rohit-Ailani-1.webp";

const treatments = [
  "Pain Management",
  "Bone and joint infections - Septic Arthritis & Osteomyelitis",
  "Tear or Partial joint replacement: Hip / Knee / Shoulder / Elbow",
  "Ligament Injury",
  "Arthroscopic Surgery",
  "Trauma & Multi Injury Surgeries",
  "Pediatric Orthopedic Surgery",
  "Deformity Correction & Limb Lengthening",
  "Congenital Deformities",
  "Hip Dysplasia & Dislocations (DDH)",
  "Cart problems & Limb length discrepancies",
  "Revision Surgeries",
  "Sports Injury surgeries and rehabilitation",
  "Infected implant removal & Revision Surgery"
];

const services = [
  "Operation Theatres equipped with laminar airflow",
  "C-arm",
  "24x7 Pulse monitoring",
  "Well-equipped & dedicated post-operative intensive care ward",
  "Excellent backup of physiotherapy services",
  "24x7 Digital X-ray",
  "24x7 128 Slice CT"
];

const specialists = [
  {
    name: "Dr. R. K. Srivastava",
    qualification: "MS - ORTHOPAEDICS",
    role: "Senior Consultant",
    location: "Department of Orthopaedics & Trauma",
    imagePath: drRKSrivastavaImage,
    imageAlt: "Dr. R. K. Srivastava"
  },
  {
    name: "Dr. Rohit Ailani",
    qualification: "MS - ORTHOPAEDICS",
    role: "Senior Consultant",
    location: "Department of Orthopaedics & Trauma",
    imagePath: drRohitAilaniImage,
    imageAlt: "Dr. Rohit Ailani"
  }
];

const sideBanners = [
  {
    id: 1,
    className: "side-tall",
    imagePath: jointLineImage,
    imageAlt: "Bone and joint care"
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
    imagePath: boneCareImage,
    imageAlt: "Bone and joint pain awareness"
  },
  {
    id: 4,
    className: "side-square",
    imagePath: kneePainImage,
    imageAlt: "Knee pain awareness"
  }
];

export default function BoneJointCarePage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip geri-top-strip">
          <h1>Bone &amp; Joint Care</h1>
          <span className="geri-strip-icon" aria-hidden="true">
            Bone
          </span>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Department of Bone &amp; Joint Care - Best Robotic Joint Replacement Hospital</h2>
            <p>
              Sanjivini Department of Orthopaedics &amp; Joint Replacement is
              considered a multidisciplinary team of orthopaedic surgeons,
              trauma specialists, pain medicine specialists and physiotherapists.
              The team is skilled in all kinds of musculoskeletal treatments
              including joint pain, ligament injury, trauma, sports injury,
              birth defects, and any other issue.
            </p>
            <p>
              Sanjivini Department of Orthopaedics &amp; Joint Replacement believes in
              the idea of "patient care comes first" and therefore uses a combination
              of latest medically advanced equipments and machinery. The Department is
              well equipped with operation theatres such as C-Arm, Modular Operation
              Theatres &amp; Arthroscopic Equipments ensuring the team to deliver a
              complete high quality patient care with minimum post-op complications.
            </p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>What We Treat</h2>
            <p>
              Sanjivini Department of Orthopaedics &amp; Joint Replacement delivers
              complete care across the bone and joint replacement on any possible
              with the availability of medically advanced equipments and a highly
              trained team of surgeons and para-medical nurses.
            </p>
            <p>
              The specialists at Sanjivini Department of Orthopaedics &amp; Joint
              Replacement have a cumulative experience of over 30 years and are
              therefore skilled in neurosurgical treatment of pain management.
              If a surgery is the better treatment for any injury or pain, then
              our comprehensive package of this specialist department, in all,
              technically advanced equipments and a highly trained para-medical
              staff are at the patients disposal to deliver a care program to
              achieve the best quality of life.
            </p>
            <p>Treatments at Sanjivini Department of Orthopaedics &amp; Joint Replacement:</p>
            <ul className="pulmo-list">
              {treatments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Services</h2>
            <p>
              Sanjivini Department of Orthopaedics &amp; Joint Replacement provides a
              complete care to the patients with advanced infrastructure comparable
              to the international standards:
            </p>
            <ul className="pulmo-list">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Why Sanjivini</h2>
            <p>
              Sanjivini Department of Orthopaedics &amp; Joint Replacement is dedicated
              to the idea of "Where patient care comes first" and is supported by a
              highly trained team of paramedical staff and the best equipments. The
              team is available for the patient 24x7 with trauma and emergency services,
              headed by the best orthopaedic surgeons in Lucknow to take care in any disaster.
            </p>
            <p>
              Sanjivini Department of Orthopaedics &amp; Joint Replacement is therefore
              Advanced Accessible Affordable bone and joint treatment provider in Lucknow.
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
        <div className="pulmo-doctor-grid">
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
