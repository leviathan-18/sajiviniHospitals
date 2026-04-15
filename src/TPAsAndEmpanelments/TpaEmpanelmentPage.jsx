export default function TpaEmpanelmentPage() {
  const partnerCompanies = [
    "FHPL (Family Health Plan Insurance TPA Pvt Ltd)",
    "PHS (Paramount Health Services)",
    "Vision Digital Insurance TPA Pvt Ltd",
    "Iffco Tokio General Insurance",
    "Aditya Birla Health Insurance",
    "Max Bupa Health Insurance",
    "Future Generali Health Insurance",
    "ICICI Lombard",
    "Heritage Health TPA",
    "Liberty General Insurance",
    "United Health Care",
    "HPCL",
    "Manipal Signa",
    "Ayushman Bharat",
    "Star Health",
    "Go Digit General Insurance",
    "H TPA - Health Insurance TPA"
  ];

  const corporates = [
    "ITC Limited",
    "APCO",
    "Jaipuria Institute of Management",
    "Airtel Industries",
    "Little Millenium",
    "Euro Kids",
    "Kidzee",
    "Bachpan Play School",
    "Foot Prints Pre School",
    "NABARD Bank",
    "Hindustan Petroleum Corporate Limited",
    "Software Technology Park of India",
    "Innerwheel District 312",
    "Topper's Institute",
    "Bharatiya Varistha Nagarik Samiti",
    "PAHAL Foundation, Lucknow"
  ];

  const logoItems = [
    "Paramount Health",
    "PHS",
    "Tata AIG",
    "FHPL",
    "Star Health",
    "HPCL",
    "Future Generali",
    "ITC Limited",
    "Jaipuria",
    "Ayushman Bharat",
    "ICICI Lombard",
    "Manipal Signa"
  ];

  return (
    <main className="empanelment-page">
      <section className="empanelment-hero rounded-4 shadow-lg overflow-hidden">
        <div className="container py-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3">
            <div>
              <p className="eyebrow mb-2">Cashless Support Network</p>
              <h1 className="text-white mb-2">Our Empanelment</h1>
              <p className="text-white-50 mb-0 max-w-3xl">
                To make your hospital visits comfortable and cashless, Sanjivini
                Hospital has collaborated with multiple companies and third-party
                administrators (TPAs).
              </p>
            </div>
            <div className="pulse-badge">Trusted by 30+ Partners</div>
          </div>
        </div>
      </section>

      <section className="empanelment-layout">
        <article className="list-panel h-100 p-4 p-md-5 rounded-4">
          <h2 className="section-title mb-3">List of Partner Companies and TPAs</h2>
          <ul className="custom-list mb-4">
            {partnerCompanies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="section-title mt-4 mb-3">Corporates</h3>
          <ul className="custom-list mb-0">
            {corporates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <aside className="logo-panel p-4 p-md-5 rounded-4 h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="section-title mb-0">Company Logos</h2>
            <span className="mini-tag">Static Grid</span>
          </div>

          <div className="logo-grid">
            {logoItems.map((name) => (
              <div className="logo-tile rounded-3 h-100" key={name}>
                <span>{name.slice(0, 2).toUpperCase()}</span>
                <small>{name}</small>
              </div>
            ))}
          </div>

          <p className="text-muted mt-4 mb-0 small">
            Note: Replace placeholder logo tiles with official logo assets in
            `public/logos/` for production-ready branding.
          </p>
        </aside>
      </section>
    </main>
  );
}
