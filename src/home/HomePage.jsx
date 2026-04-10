export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Trusted Tertiary Care in Your City</p>
          <h1>SANJIVINI Super Speciality Hospital</h1>
          <p>
            Advanced diagnostics, emergency-ready response, and expert multi-
            speciality teams delivering compassionate care 24x7.
          </p>
          <div className="hero-actions">
            <button className="primary-action">Book Appointment</button>
            <button className="ghost-action">Emergency: 1024-778-911</button>
          </div>
        </div>
        <div className="hero-card">
          <h3>24/7 Emergency & Trauma</h3>
          <p>Rapid-response specialists, ICU support, and real-time triage.</p>
          <h3>NABH-inspired Quality Protocols</h3>
          <p>Clinical safety pathways designed for better outcomes.</p>
          <h3>Integrated Diagnostics</h3>
          <p>Digital radiology and pathology under one coordinated system.</p>
        </div>
      </section>

      <section className="quick-stats">
        <article>
          <strong>150+</strong>
          <span>Beds</span>
        </article>
        <article>
          <strong>40+</strong>
          <span>Specialists</span>
        </article>
        <article>
          <strong>12</strong>
          <span>Centres of Excellence</span>
        </article>
        <article>
          <strong>24x7</strong>
          <span>Critical Care</span>
        </article>
      </section>

      <section className="services-grid">
        <h2>Focused Clinical Programs</h2>
        <div className="grid-wrap">
          <article>
            <h3>Cardiac Sciences</h3>
            <p>Interventional cardiology, non-invasive imaging, and rehab.</p>
          </article>
          <article>
            <h3>Neuro Care</h3>
            <p>Stroke-ready emergency, neuro surgery, and recovery care.</p>
          </article>
          <article>
            <h3>Oncology</h3>
            <p>Personalized cancer pathways from screening to supportive care.</p>
          </article>
          <article>
            <h3>Ortho & Joint Health</h3>
            <p>Trauma, minimally invasive procedures, and physiotherapy.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
