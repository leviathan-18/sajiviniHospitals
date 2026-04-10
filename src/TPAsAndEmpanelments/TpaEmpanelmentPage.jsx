function chunkArray(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

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

  const logoSlides = chunkArray(logoItems, 6);

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

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-lg-7">
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
          </div>

          <div className="col-lg-5">
            <article className="logo-panel p-4 p-md-5 rounded-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="section-title mb-0">Company Logos</h2>
                <span className="mini-tag">Slide View</span>
              </div>

              <div
                id="logoCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2600"
              >
                <div className="carousel-inner">
                  {logoSlides.map((slide, idx) => (
                    <div
                      key={`slide-${idx}`}
                      className={`carousel-item ${idx === 0 ? "active" : ""}`}
                    >
                      <div className="row g-3">
                        {slide.map((name) => (
                          <div className="col-6" key={name}>
                            <div className="logo-tile rounded-3 h-100">
                              <span>{name.slice(0, 2).toUpperCase()}</span>
                              <small>{name}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#logoCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#logoCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <p className="text-muted mt-4 mb-0 small">
                Note: Replace placeholder logo tiles with official logo assets in
                `public/logos/` for production-ready branding.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
