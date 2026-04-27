import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import geriatricTallImage from "../../images/Specialties/Geriatric/Geriatric-Palliative-Care-331x706-1.webp";
import projectUmmeedGif from "../../images/Specialties/Geriatric/Project-Ummeed-Page_1-1.gif";
import oldAgeCareImage from "../../images/Specialties/Geriatric/02-2-1024x1024.webp";
import oldAgeProgramImage from "../../images/Specialties/Geriatric/03-03.webp";
import MeetSpecialistsCarousel from "./MeetSpecialistsCarousel";

const seniorCitizenConcerns = [
  "Respiratory Diseases (COPD, Asthma, Pneumonia and ILD)",
  "Hypertension (High BP)",
  "Diabetes",
  "Bone / Joint Pain Problems (Arthritis, Osteoporosis)",
  "Lack of Urine / Bowl Control",
  "Constipation",
  "Pelvic Organ Prolapse",
  "Post Menopausal Bleeding",
  "Neurological Conditions",
  "Cancer"
];

const symptomFaq = [
  {
    question: "Is Project Ummeed for any particular illness like Dementia or Alzheimers?",
    answer:
      "No. The program is for senior citizens (65 & above) with any medical condition. Patients who have to undergo surgery or require Palliative care can avail the benefits of the program."
  },
  {
    question: "How can patients who undergo regular dialysis benefit?",
    answer:
      "The program offers special provisions and packages for patients on regular dialysis."
  },
  {
    question: "Are there any food arrangements for the elderly and terminally ill patients?",
    answer:
      "Yes, we take a very detailed care of our patients and ensure that they have regular healthy balanced diets. Family's presence is a beautiful emotional support for the patient and contributes to faster recovery. Wards are therefore designed to accommodate a family member with the patient and are furnished with comfortable beds, spacious cupboards and attached washrooms."
  }
];

const sideBanners = [
  {
    id: 1,
    className: "side-tall",
    imagePath: geriatricTallImage,
    imageAlt: "Geriatric and palliative care"
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
    imagePath: oldAgeCareImage,
    imageAlt: "Old age care"
  },
  {
    id: 4,
    className: "side-square side-with-caption",
    imagePath: oldAgeProgramImage,
    imageAlt: "Project Umeed old age care program",
    caption: "Project Umeed - Old Age Care Program"
  }
];

export default function GeriatricPalliativeCarePage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip geri-top-strip">
          <h1>Geriatric &amp; Palliative Care</h1>
          <span className="geri-strip-icon" aria-hidden="true">
            Care
          </span>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Project Umeed For Geriatric Medicine - Old Age Care</h2>
            <p>
              Special healthcare, wellness and rehabilitation services provided
              to the senior citizens against any medical complexity.
            </p>
            <p>
              Ummeed is an exclusive program designed by Sanjivini Hospital for
              hospitalized senior citizens which offers the best medical care
              across any medical disorder.
            </p>
            <p>
              Umeed gives senior citizens Free Consultations, Free Nursing
              Care, Free Medical Officer Visits, and Free Balanced Diets.
            </p>
            <p>True to our values, we are Advanced Accessible Affordable.</p>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Most Common Health Concerns for Senior Citizens?</h2>
            <ul className="pulmo-list">
              {seniorCitizenConcerns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>What Should Be Done If You Have Symptoms?</h2>
            <p>
              To avoid any possible serious medical complication, consult a
              physician at the earliest and avail the benefits of Project
              Umeed. At Sanjivini Hospital, we specialize in Geriatric Care and
              have therefore designed our services to deliver a holistic care
              program, exactly as per the needs of our senior citizens.
            </p>

            {symptomFaq.map((item) => (
              <article className="geri-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </section>

          <section className="pulmo-section pulmo-flat">
            <h2>Why Sanjivini ?</h2>
            <p>
              As we age, the body&apos;s response to medication and the ability to
              absorb it changes significantly demanding better care and
              expertise. The team of Doctors &amp; Nurses at Sanjivini
              specialise in Old-Age care, promising a faster recovery to an
              independent and healthy life.
            </p>
          </section>
        </div>

        <aside className="pulmo-side-rail">
          {sideBanners.map((banner) => (
            <figure key={banner.id} className={`pulmo-image-slot side ${banner.className}`}>
              {banner.imagePath ? (
                <img src={banner.imagePath} alt={banner.imageAlt} loading="lazy" />
              ) : (
                <span>Add Sidebar Image</span>
              )}
              {banner.caption ? <figcaption>{banner.caption}</figcaption> : null}
            </figure>
          ))}
        </aside>
      </section>

      <MeetSpecialistsCarousel />

      <SpecialtyFooterCta />
    </main>
  );
}