import SpecialtyFooterCta from "../../shared/components/SpecialtyFooterCta";
import traumaTallGif from "../../images/Specialties/Trauma & Emergency Care/Trauma-GIF.gif";
import projectUmmeedGif from "../../images/Specialties/Trauma & Emergency Care/Project-Ummeed-Page_1-1.gif";

const sideBanners = [
  {
    id: 1,
    className: "side-tall",
    imagePath: traumaTallGif,
    imageAlt: "Trauma and emergency care"
  },
  {
    id: 2,
    className: "side-rect",
    imagePath: projectUmmeedGif,
    imageAlt: "Project Ummeed"
  }
];

export default function TraumaEmergencyCarePage() {
  return (
    <main className="pulmo-page">
      <section className="pulmo-top-block">
        <div className="pulmo-top-strip geri-top-strip">
          <h1>Trauma &amp; Emergency Care</h1>
          <span className="geri-strip-icon" aria-hidden="true">
            ER
          </span>
        </div>      </section>

      <section className="pulmo-main-grid">
        <div className="pulmo-main-flow">
          <section className="pulmo-section pulmo-flat">
            <h2>Trauma &amp; Emergency Care</h2>
            <p>
              The Emergency &amp; Trauma Care division at Sanjivini Hospital &amp; Research Centre
              constitutes a team of highly specialized physicians &amp; surgeons. Critically ill
              patients due to sickness or patients who are severely injured by life threatening
              episodes &amp; fatal poisoning are promptly taken under the care to be rescued,
              stabilised &amp; managed as per the hospital&apos;s protocols.
            </p>
            <p>
              The department has a completely technologically equipped care area to manage
              patients, who need instant treatment.
            </p>
            <p>
              Sanjivini Hospital &amp; Research Centre provides the best trauma and emergency
              care in Lucknow with the highest level of specialty expertise and meets
              uncompromising standards. There are special Emergency operating rooms dedicated
              solely to trauma patients and have 24x7 availability of specialists in Trauma
              Surgery, Orthopaedic Surgery, Plastic Surgery, Neurosurgery, Spine Surgery,
              Vascular Surgery, Surgical Critical Care, Rehabilitation Medicine and Emergency
              Medicine to adequately respond and care for the various types of trauma.
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
