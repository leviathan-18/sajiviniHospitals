import immediateHelpImage from '../images/assets/immidiate help.png';

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-copy">
            <p className="contact-hero-kicker">Sanjivini Hospitals</p>
            <h1>We're Here to Help You</h1>
            <p className="contact-hero-text">
              Reach out to us anytime. Our compassionate team is ready to assist you with 
              emergency care, appointments, or any questions about our services.
            </p>
            <p className="contact-hero-highlight">
              <strong>24/7 Emergency Support Available</strong>
            </p>
          </div>

          <div className="contact-hero-media" style={{ backgroundImage: `url('${immediateHelpImage}')` }}>
            <div className="contact-hero-media-overlay"></div>
          </div>
        </div>
      </section>

      <section className="contact-page-compact">
        <section className="contact-strip contact-strip-call">
        <div className="section-divider">
          <span />
          <span className="divider-mark">✦</span>
          <span />
        </div>
        <h2>Give Us a Call</h2>
        <p>
          We understand you might have additional questions about our hospital.
          Feel free to give us a call, and our managers will patiently listen
          to all your doubts and help you make an informed decision.
        </p>
        <a href="tel:05224232333" className="contact-action-card">
          <strong>Mobile Number</strong>
          <span>+91 72900 21707 / 706</span>
        </a>
      </section>

      <section className="contact-strip contact-strip-whatsapp">
        <div className="section-divider">
          <span />
          <span className="divider-mark">✦</span>
          <span />
        </div>
        <h2>Chat With Us - Send us a WhatsApp Message</h2>
        <p>
          Our team is available to chat with you on WhatsApp round the clock.
          Just scan the QR code or send us a Hello!
          {' '}
          <a href="https://wa.me/917290021707">+91 72900 21707</a>
          {' '}or{' '}
          <a href="https://wa.me/917290021706">+91 72900 21706</a>
        </p>
        <a href="https://wa.me/917290021707" className="contact-action-button contact-action-button-alt">
          WhatsApp Now
        </a>
      </section>

      <section className="contact-strip contact-strip-write">
        <div className="section-divider">
          <span />
          <span className="divider-mark">✦</span>
          <span />
        </div>
        <h2>Write to Us</h2>
        <p>
          At Sanjivini, we are always eager to hear from you and address your
          curiosities and concerns.
        </p>
      </section>

      <section className="contact-info-section">
        <div className="contact-info-grid">
          <article className="contact-info-card contact-info-address">
            <div className="contact-info-icon"></div>
            <h3>Visit Us</h3>
            <p>
              CP23 Viraj Khand, Gomti Nagar, Lucknow, near Hahnemann Rd,
              Chauraha, Uttar Pradesh 226010
            </p>
          </article>

          <article className="contact-info-card contact-info-timing">
            <div className="contact-info-icon"></div>
            <h3>Hospital Timing</h3>
            <p><strong>Emergency &amp; Trauma:</strong> 24/7</p>
            <p><strong>OPD:</strong> Mon - Sun, 9:00 AM - 8:00 PM</p>
          </article>

          <article className="contact-info-card contact-info-appointment">
            <div className="contact-info-icon"></div>
            <h3>Book Appointment</h3>
            <ul className="contact-info-phone-list">
              <li><a href="tel:05224232333"><strong>0522-4232333</strong></a></li>
              <li><a href="tel:05223573895">0522-3573895</a></li>
              <li><a href="tel:7307507050">7307507050</a></li>
            </ul>
          </article>
        </div>
      </section>

      <section className="contact-map">
        <h2>Visit Our Hospital</h2>
        <iframe
          src="https://maps.google.com/maps?q=Sanjivini%20Super%20Speciality%20Hospital%2C%20CP23%20Viraj%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sanjivini Hospital Location"
          className="contact-map-frame"
        ></iframe>
      </section>

      <section className="contact-enquiry">
        <div className="contact-card contact-enquiry-card slide-in-right delay-3">
          <div className="contact-enquiry-copy">
            <h2>Write to Us</h2>
            <p>
              Share your details and our team will reach out with the right
              support for appointments, emergency care, or general assistance.
            </p>
          </div>

          <form className="enquiry-form enquiry-form-grid" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="first-name">Your First Name*</label>
              <input id="first-name" type="text" placeholder="Your First Name*" aria-label="Your First Name" />
            </div>
            <div>
              <label htmlFor="last-name">Your Last Name*</label>
              <input id="last-name" type="text" placeholder="Your Last Name*" aria-label="Your Last Name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email" aria-label="Email" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number*</label>
              <input id="phone" type="tel" placeholder="Phone Number*" aria-label="Phone Number" />
            </div>
            <div className="enquiry-full">
              <label htmlFor="interest">I am interested in Sanjivini for *</label>
              <input id="interest" type="text" placeholder="Please Select" aria-label="Interest" />
            </div>
            <div className="enquiry-full">
              <label htmlFor="message">Leave us a message</label>
              <textarea id="message" rows="4" placeholder="Leave us a message" aria-label="Message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
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
