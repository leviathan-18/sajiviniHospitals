export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-intro">
        <h1>Get In Touch</h1>
        <p>
          Sanjivini Super Speciality Hospital is always ready to cater to all
          your acute, critical and emergency needs. For enquiries,
          appointments, emergency or any other assistance, please reach us
          freely. We would love to serve you with the best healthcare services.
        </p>

        <div className="contact-badges">
          <span>24x7 Emergency</span>
          <span>Trauma Ready Teams</span>
          <span>Instant Appointment Support</span>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-column contact-left">
          <article className="contact-card slide-in-left delay-1">
            <h2>Address</h2>
            <p>
              CP23 Viraj Khand, Gomti Nagar, Lucknow, near Hahnemann Rd,
              Chauraha, Uttar Pradesh 226010
            </p>
          </article>

          <article className="contact-card slide-in-left delay-2">
            <h2>Hospital Timing</h2>
            <p>Emergency &amp; Trauma 24x7</p>
            <p>OPD Timing - Mon To Sunday - 9am to 8pm</p>
          </article>

          <article className="contact-card slide-in-left delay-3">
            <h2>For Marketing &amp; Business Relations</h2>
            <p>Email: corporaterelations@sanjivinihospitals.com</p>
          </article>

          <article className="contact-card slide-in-left delay-4">
            <h2>For Job/ Careers</h2>
            <p>Email: hr@sanjivinihospitals.com</p>
            <p>Call/Whatsapp: 9140912806</p>
          </article>
        </div>

        <div className="contact-column contact-right">
          <article className="contact-card contact-primary slide-in-right delay-2">
            <h2>For Appointment &amp; General Enquiries</h2>

            <h3>Call / Whatsapp</h3>
            <ul className="contact-phone-list">
              <li>
                <a href="tel:05224232333">0522-4232333</a>
              </li>
              <li>
                <a href="tel:05223573895">0522-3573895</a>
              </li>
              <li>
                <a href="tel:7307507050">7307507050</a>
              </li>
            </ul>

            <h3>Or Fill Form</h3>
            <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name*" aria-label="Name" />
              <input
                type="tel"
                placeholder="Phone Number*"
                aria-label="Phone Number"
              />
              <button type="submit">Submit Now</button>
            </form>
          </article>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="contact-footer-grid">
          <article>
            <h4>SANJIVINI</h4>
            <p>
              Super speciality care with compassion, precision, and emergency
              readiness for every patient family.
            </p>
          </article>

          <article>
            <h4>Reach Fast</h4>
            <p>Emergency Desk: 0522-4232333</p>
            <p>Front Office: 0522-3573895</p>
          </article>

          <article>
            <h4>Care Hours</h4>
            <p>Emergency &amp; Trauma: 24x7</p>
            <p>OPD: Mon-Sun, 9:00 AM - 8:00 PM</p>
          </article>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} Sanjivini Super Speciality Hospital. All
          rights reserved.
        </p>
      </footer>
    </main>
  );
}
