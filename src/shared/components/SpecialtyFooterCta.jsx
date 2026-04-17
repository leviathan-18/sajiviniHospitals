import { Link } from "react-router-dom";

export default function SpecialtyFooterCta() {
  return (
    <section className="specialty-footer-cta">
      <div className="specialty-footer-cta-inner">
        <div>
          <p className="specialty-footer-kicker">Sanjivini Hospitals</p>
          <h2>Need expert guidance for this specialty?</h2>
          <p>
            Our care team can help you with appointments, treatment planning, and emergency support.
          </p>
        </div>

        <div className="specialty-footer-actions">
          <Link to="/contact-us" className="specialty-footer-btn specialty-footer-btn-primary">
            Book Appointment
          </Link>
          <a href="tel:0522-4232333" className="specialty-footer-btn specialty-footer-btn-secondary">
            Call 0522-4232333
          </a>
        </div>
      </div>
    </section>
  );
}
