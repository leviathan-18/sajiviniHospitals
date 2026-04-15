import { useState } from "react";
import { Link } from "react-router-dom";
import icuImage from "../images/facilities/icu.jpg";
import nicuImage from "../images/facilities/nicu.jpg";
import operationTheatreImage from "../images/facilities/main.webp";
import "./facilitiesAndServices.css";

export default function FacilitiesServicesPage() {
  const [expandedId, setExpandedId] = useState(1);

  const facilities = [
    {
      id: 1,
      title: "ICU",
      color: "blue",
      description:
        "The crucial supportive system in critical care. Intensive Care Unit (ICU) at Sanjivini Hospital & Research Centre gives proficient, devoted & high-quality evidence-based care to critically ill or injured patients through a synergistic multi-disciplinary outlook.\n\nThe ICUs are furnished with cutting edge technology, clinical support and manned by highly experienced Doctors and Ancillary staff for taking immense care of patients with an extensive range of medical obstacles including complex comorbid conditions extending from sepsis to pneumonia, Acute Respiratory Distress Syndrome (ARDS) as well as multi-organ failures.",
      imageAlt: "ICU Unit with advanced medical equipment",
      imagePath: icuImage
    },
    {
      id: 2,
      title: "NICU",
      color: "berry",
      description:
        "The crucial supportive system in critical care. Intensive Care Unit (ICU) at Sanjivini Hospital & Research Centre gives proficient, devoted & high-quality evidence-based care to critically ill or injured patients through a synergistic multi-disciplinary outlook.\n\nThe ICUs are furnished with cutting edge technology, clinical support and manned by highly experienced Doctors and Ancillary staff for taking immense care of patients with an extensive range of medical obstacles including complex comorbid conditions extending from sepsis to pneumonia.",
      imageAlt: "NICU with specialized infant care equipment",
      imagePath: nicuImage
    },
    {
      id: 3,
      title: "Modular OT For Highly Specialized Surgeries",
      color: "salmon",
      description:
        "Our Operation Theatres are specially designed to provide and serve as an effective barrier against infection. Our operation theatres are equipped with monitors, respirators, latest medical equipments including anaesthetic to perform diversified&specialized advanced surgical procedures. Our advanced operating Microscopes, endoscopes andequipments of resuscitation including defibrillator and other necessary instruments help in catering the needs of the surgical specialities. The modular OT also elongates further scope for succeeding expansion and modernization in line with advancement in surgical techniques.",
      imageAlt: "Modern operation theatre setup",
      imagePath: operationTheatreImage
    },
    {
      id: 4,
      title: "CT-SCAN",
      color: "mint",
      description:
        "The Radiology and Imaging department at Sanjivini Hospital & Research Centre has a state of the art multisclice CT scanner capable of complete scanning the brain in 3 seconds and the whole body scan (brain, cervical spine, thorax, abdomen and pelvis) in less than 15 seconds. This enables the rapid triaging of patients with Polytrauma, RTA or other injuries, enabling our doctors to diagnose and treat with utmost confidence, thereby saving hundreds of lives. We are also able to do Cerebral Angiograms for patients with Ischaemic stroke, CT perfusion, Neck vessel, CT Pulmonary, Peripheral limb angiograms and other contrast studies using dual injector.",
      imageAlt: "Diagnostic imaging equipment and laboratory",
      imagePath: null
    },
    {
      id: 5,
      title: "Pulmonary Function Test with Diffusion (P.F.T)",
      color: "blue",
      description:
        "Pulmonary function tests (PFTs) are a series of tests that effectively measure how well your lungs work. This includes how easily you're able to breathe and how effectively your lungs are distributing oxygen to the rest of your body.\n\nOur specialists may order these tests:\n- If you're having symptoms of lung problems\n- As part of a routine check-up\n- If you have a lung disease, such as asthma, then it helps in identifying the effectiveness of treatment\n- To assess the condition of your lungs before surgery",
      imageAlt: "Emergency department reception and triage area",
      imagePath: null
    },
    {
      id: 6,
      title: "SLEEP LAB",
      color: "berry",
      description:
        "If you are facing trouble falling or staying asleep, you're not alone. More than 93 per cent of Indians suffer from sleep deprivation. For the people who are experiencing sleep disorders, Sanjivini Hospital & Research Centre Sleep Disorders Lab is here to help. The Sleep Disorders Lab at Sanjivini Hospital & Research Centre offers a full range of sleep services specially designed to evaluate, diagnose, treat and help you manage your sleep deprivation.\n\nThe sleep lab is managed by our board-certified sleep doctors in sleep medicine. The sleep lab has multiple, separate bedrooms, and we undertake sleep studies (polysomnograms) 7 nights a week. We also perform paediatric sleep studies.",
      imageAlt: "Pharmacy counter with organized medication storage",
      imagePath: null
    },
    {
      id: 7,
      title: "Dialysis Care",
      color: "mint",
      description:
        "Dialysis care unit at Sanjivini Hospital & Research Centre is equipped with ultra-modern dialysis machines reinforced by a dedicated RO water treatment plant along with highly qualified, well trained and experienced dialysis technicians. Our dialysis specialists follow global standards and provisions to prevent all forms of infections.\n\nOur dialysis unit is operational 24/7 for all types of patients including critically ill patients. Those having multiple organ damage often require immediate dialysis. We create an environment for the dialysis patients to make them feel at home.",
      imageAlt: "Diagnostic imaging equipment and laboratory",
      imagePath: null
    },
    {
      id: 8,
      title: "Ultrasound With Colour Doppler",
      color: "blue",
      description:
        "Colour Doppler ultrasound is an advanced imaging technique which is used in Sanjivini Hospital & Research Centre to provide clear visualization of the blood flow in the arteries and veins of the patient. A Colour Doppler Ultrasound is perfectly safe and ideal for pregnant women as there is no radiation involved as well as safer for patients with kidney problems as there is no iodine involved. Besides being harmless, the Colour Doppler technique also serves as a cost-effective way of effectively diagnosing diseases of blood vessels.",
      imageAlt: "Emergency department reception and triage area",
      imagePath: null
    },
    {
      id: 9,
      title: "2D Echo",
      color: "berry",
      description:
        "A 2D echocardiogram is a diagnostic test performed at Sanjivini Hospital & Research Centreequipped with ultrasound scanner that provides excellent and clear images of the heart, Para cardiac structures and vessels in the heart. It is a non-invasive technique performed by our specialists in which sonar waves passed through the skin, reaching the internal organs and thereafter forms clear images. It is also known as Doppler ultrasound of the heart; the 2D echo test can be reached in conjunction with stress tests, as well as to analyse the proper functioning of the heart.",
      imageAlt: "Pharmacy counter with organized medication storage",
      imagePath: null
    },
    {
      id: 10,
      title: "Digital X-Ray",
      color: "mint",
      description:
        "Digital X-Ray is an imaging technique performed at Sanjivini Hospital & Research Centre that is useful in the detection of pathology of the skeletal system. Digital X-rays are also useful for detecting some disease emerging or processing in soft tissue. These are the most trusted &frequently used form of medical imaging. At Sanjivini Hospital & Research Centre, we use fully digital x-ray techniques. With Digital X-ray, images are instantly available. Since images are in digital format, they can be easily shared with the proposed specialists whenever needed.",
      imageAlt: "Diagnostic imaging equipment and laboratory",
      imagePath: null
    },
    {
      id: 11,
      title: "24x7 Fully Automated Pathology",
      color: "blue",
      description:
        "The Pathology at Sanjivini Hospital & Research Centre is well-equipped to carry out the state of art test on patient’s sample and assist clinicians in the overall evaluation and diagnosis of several diseases. Aided by modern and fully automated instruments as well as highly skilled HPC registered biomedical scientists under persistent supervision of consultant pathologist that guarantees high quality assurance.Sanjivini Hospital & Research Centre’s provides near-perfect pathology services to all patients.",
      imageAlt: "Emergency department reception and triage area",
      imagePath: null
    },
    {
      id: 12,
      title: "Physiotherapy & Rehabilitation",
      color: "berry",
      description:
        "The Physiotherapy & Rehabilitation facility at Sanjivini Hospital & Research Centre aims at providing highly specialised services for patients of all age groups and with any ailment or disability arising due to numerous reasons. Physiotherapy treatment has an approach in all the disciplines of modern medicine such as Orthopaedics, Cardiothoracic, Neurology, Oncology, Obstetrics and Gynaecology, Paediatrics and Neonatology, Plastic Surgery and Cosmetic Surgery, General Surgery, etc. The team is responsible for delivering superior quality pre & post-operative physiotherapeutic interventions to the out & in-patients. ",
      imageAlt: "Pharmacy counter with organized medication storage",
      imagePath: null
    }
  ];

  return (
    <main className="facilities-page">
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

      <section className="facilities-intro" id="facility-list">
        <p>
          Our infrastructure is designed around patient safety and clinical
          excellence, with every facility meeting international standards and
          regulatory compliance.
        </p>
      </section>

      {facilities.map((facility, index) => {
        const isExpanded = expandedId === facility.id;

        return (
          <section
            key={facility.id}
            className={`facility-section facility-${facility.color} ${
              index % 2 === 0 ? "image-left" : "image-right"
            } ${isExpanded ? "is-expanded" : "is-collapsed"}`}
          >
            <div className="facility-image-wrapper">
              {facility.imagePath ? (
                <img
                  className="facility-image"
                  src={facility.imagePath}
                  alt={facility.imageAlt}
                  loading="lazy"
                />
              ) : (
                <div className={`facility-image-placeholder no-image facility-${facility.color}`}>
                  <span>{facility.title}</span>
                </div>
              )}
              <span className="image-overlay" />
              <div className="image-accent" />
            </div>

            <div className="facility-content-wrapper">
              <div className="facility-content">
                <h2>{facility.title}</h2>
                <p className={isExpanded ? "is-open" : "is-closed"}>{facility.description}</p>
                <button
                  className="learn-more-btn"
                  onClick={() => setExpandedId(isExpanded ? null : facility.id)}
                  type="button"
                >
                  {isExpanded ? "Show Less" : "Learn More"}
                </button>
              </div>
            </div>
          </section>
        );
      })}

      <section className="facilities-cta">
        <div className="cta-card">
          <h3>Want to Know More About Our Facilities?</h3>
          <p>
            Contact our care coordinators for a facility tour or detailed information.
          </p>
          <button className="cta-btn-primary">Schedule a Tour</button>
        </div>
      </section>
    </main>
  );
}
