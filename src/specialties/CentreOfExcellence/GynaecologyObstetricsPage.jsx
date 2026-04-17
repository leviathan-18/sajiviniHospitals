import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import gynaeTallImage from "../../images/Specialties/Obstetrics & gynecology /gynae-copy.webp";
import projectUmmeedGif from "../../images/Specialties/Obstetrics & gynecology /Project-Ummeed-Page_1-1.gif";
import pregnancyCareImage from "../../images/Specialties/Obstetrics & gynecology /gyno-2-1024x1024.webp";
import prenatalPartnerImage from "../../images/Specialties/Obstetrics & gynecology /Gyni-04-1024x1024.webp";
import endometriosisCareImage from "../../images/Specialties/Obstetrics & gynecology /gynov3-1024x1024.webp";
import pcosCareImage from "../../images/Specialties/Obstetrics & gynecology /gyno-5v3.webp";
import drHumairaImage from "../../images/Specialties/Obstetrics & gynecology /Dr.-Humaira.webp";
import drSiddhidatriImage from "../../images/Specialties/Obstetrics & gynecology /Siddhidatri-circle.webp";

const treatments = [
  "Complicated / High risk Pregnancies",
  "Abnormal Pap",
  "Ovarian cysts",
  "Heavy/painful menses",
  "Menopause",
  "Irregular bleeding",
  "Pelvic pain",
  "Post-menopausal bleeding",
  "Premenstrual syndrome (PMS)",
  "Gynaecological Cancer",
  "Stress Urinary Incontinence",
  "Pelvic Organ Prolapse",
  "Endometriosis",
  "Infertility"
];

const gynecologicalProcedures = [
  "Treatment of fibroids, including myomectomy",
  "Treatment for polycystic ovarian syndrome (PCOS)",
  "Hysterectomy (laparoscopic, vaginal, abdominal)",
  "Dilation & curettage (D&C)",
  "Minimally Invasive Surgeries",
  "Cervix Biopsy",
  "SALPINGECTOMY",
  "CYSTECTOMY",
  "Diagnostic Hysteroscopy",
  "Laparoscopic Sterilisation",
  "Cervical Polypectomy",
  "Vulvar Biopsy",
  "Bartholin's Abscess & Marsupialisation",
  "Pelvic examination under anaesthesia (EUA)",
  "Ante Natal Screening Tests",
  "Pre & Post Natal Care"
];

const obstetricsProcedures = [
  "Multiple gestations",
  "Fetal growth issues",
  "Baby / Mother Genetic problems",
  "History of Cardiac conditions or cystic fibrosis",
  "Hypertension (high blood pressure)",
  "Diabetes (both pre-gestational and gestational types)",
  "Hepatitis, HIV and AIDS",
  "Rh negative mother with Rh positive fetus",
  "Current / previous medical illness",
  "Recurrent pregnancy loss",
  "IVF conception",
  "Placenta Praevia",
  "Abruption Placenta",
  "Preterm Labour"
];

const nicuFacilities = [
  "Phototherapy",
  "Neonatal ventilators",
  "Oxygen therapy",
  "Central line insertion",
  "Multipara Monitoring units - Cardiac monitoring (ECG), Blood pressure monitoring (NIBP/IBP), etc.",
  "Piped medical gases and suction",
  "Automated Infusion Pumps - for precise drug & fluid administration",
  "ECG and non-invasive blood pressure monitoring",
  "Radiant warmer open care units - servo-controlled temperature maintenance in newborn",
  "Preterm care",
  "Bed-side Echocardiography",
  "Nutritional care"
];

const specialists = [
  {
    name: "Dr. Humaira Siddiqui",
    qualification: "MBBS, MS (Obs & Gynae), FMAS",
    role: "Senior Consultant",
    location: "Department of Gynecology & Obstetrics",
    imagePath: drHumairaImage,
    imageAlt: "Dr. Humaira Siddiqui"
  },
  {
    name: "Dr. Siddhidatri",
    qualification: "M.B.B.S, MD, DNB (Obs & Gynae)",
    role: "PDCC (Maternal & Fetal Medicine)",
    location: "Department of Gynecology & Obstetrics",
    imagePath: drSiddhidatriImage,
    imageAlt: "Dr. Siddhidatri"
  }
];

const sideBanners = [
  {
    id: 1,
    className: "side-tall",
    imagePath: gynaeTallImage,
    imageAlt: "Women's health matters"
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
    imagePath: pregnancyCareImage,
    imageAlt: "All stages of pregnancy care"
  },
  {
    id: 4,
    className: "side-square",
    imagePath: prenatalPartnerImage,
    imageAlt: "Prenatal care support"
  },
  {
    id: 5,
    className: "side-square",
    imagePath: endometriosisCareImage,
    imageAlt: "Endometriosis awareness"
  },
  {
    id: 6,
    className: "side-square",
    imagePath: pcosCareImage,
    imageAlt: "PCOS and PCOD awareness"
  }
];

export default function GynaecologyObstetricsPage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip geri-top-strip">
          <h1>Obstetrics &amp; gynecology</h1>
          <span className="geri-strip-icon" aria-hidden="true">
            OBG
          </span>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Department of Obstetrics &amp; Gynecology - Best Women Hospital in Lucknow</h2>
            <p>
              Sanjivini Hospital has earned the reputation as the best women&apos;s health hospital in Lucknow. We acknowledge the fact that a woman&apos;s body undergoes a systematic development throughout life which could cause potential health issues like irregular menstrual problems, fertility, complicated pregnancy or menopause. With a cumulative experience of over 30 years, our consultants aim to cater across the wide range of women health by offering the best treatment or preventive protocols in Lucknow.
            </p>
            <p>
              If the patients request, our team of gynecologists and obstetricians at Sanjivini are open to discuss and guide on any non-medical conditions so as to prevent any occurrence in near future.
            </p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Treatments</h2>
            <p>
              Sanjivini Department of Obstetrics &amp; Gynecology delivers a complete care program for all obstetric conditions and gynecological problems. Our highly experienced team of specialists supported by a combination of medically advanced equipments and machinery, provide exceptional care across:
            </p>
            <ul className="pulmo-list">
              {treatments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Procedures</h2>
            <p>
              Sanjivini Hospital, Lucknow maintains a low infection rate comparable to the best hospitals in India. True to the idea of "where patient care comes first", technologies like laminar air flow and strict schedules of sterilization are implemented.
            </p>
            <p>
              Furthermore, the extensive experience of the specialists combined with the latest minimally invasive medical technologies deliver lower post-procedure complications, faster recovery and higher patient satisfaction.
            </p>
            <p>A few regular procedures/treatments delivered at Sanjivini:</p>

            <h2>Gynecological</h2>
            <ul className="pulmo-list">
              {gynecologicalProcedures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Obstetrics</h2>
            <ul className="pulmo-list">
              {obstetricsProcedures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Facilities</h2>
            <p>Neonatal Intensive Care Unit (NICU)</p>
            <p>
              If there is a complication during pregnancy, or the baby is born pre term or in case of incomplete development of an organ, the baby is very closely monitored in the NICU. The NICU at Sanjivini Hospital is an ultra-modern facility with the following services:
            </p>
            <ul className="pulmo-list">
              {nicuFacilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Sanjivini Department of Obstetrics &amp; Gynaecology is supported by an advanced NICU under the care of a dedicated team of neonatologists and trained neonatal nurses who manage premature deliveries or babies who require specialized medical attention.
            </p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Labour and Delivery Room</h2>
            <p>
              Sanjivini Department of Obstetrics &amp; Gynecology has the best technology labour room in Lucknow with sound proofing. It was designed keeping in mind the safety of the baby and the mother and is therefore very conveniently located next to the operation theaters. In case of an emergency or complication, where every second counts, the patient can be shifted very quickly and prepared for a procedure.
            </p>
            <p>
              It replaces the older system where women needed to be taken to a separate floor or wing of the hospital at the last moment.
            </p>
            <p>
              Sanjivini has earned the name of the best women hospital in Lucknow and our gynecologists help to undergo a comfortable and painless delivery.
            </p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Why Choose Sanjivini</h2>
            <p>
              The Department of Obstetrics &amp; Gynecology at Sanjivini Hospital delivers the most advanced treatment protocol across a wide scope of women health. With the best gynecologists in Lucknow our team aims to help every women have the best quality of life. The empathetic nursing care backed by the support of inter-department expertise has earned us the pleasure of delivering the best treatment to women in need.
            </p>
            <p>
              Sanjivini always remains true to its promise of being the most Affordable and Advanced Accessible.
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
