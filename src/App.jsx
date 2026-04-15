import { Route, Routes } from "react-router-dom";
import AboutNavbar from "./aboutUs/navar";
import AboutPage from "./aboutUs/AboutPage";
import Footer from "./layout/Footer";
import ContactPage from "./contactUs/ContactPage";
import ExcellenceStats from "./home/ExcellenceStats";
import HealthHub from "./home/HealthHub";
import Home from "./home/Home";
import SpecialitiesProcedures from "./home/SpecialitiesProcedures";
import SuccessStories from "./home/SuccessStories";
import OurChroniclesPage from "./ourChronicles/OurChroniclesPage";
import FacilitiesServicesPage from "./facilitiesAndServices/FacilitiesServicesPage";
import SpecialtiesPage from "./specialties/SpecialtiesPage";
import TpaEmpanelmentPage from "./TPAsAndEmpanelments/TpaEmpanelmentPage";

function HomeRoute() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="specialities-procedures">
        <SpecialitiesProcedures />
      </section>
      <section id="excellence-stats">
        <ExcellenceStats />
      </section>
      <section id="health-hub">
        <HealthHub />
      </section>
      <section id="success-stories">
        <SuccessStories />
      </section>
    </main>
  );
}

function SiteLayout({ children }) {
  return (
    <>
      <AboutNavbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/facilities-and-services" element={<FacilitiesServicesPage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
          <Route path="/our-chronicles" element={<OurChroniclesPage />} />
          <Route path="/tpas-and-empanelments" element={<TpaEmpanelmentPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </SiteLayout>
    </div>
  );
}

export default App;