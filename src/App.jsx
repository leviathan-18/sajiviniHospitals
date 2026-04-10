import { Route, Routes } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import HomePage from "./home/HomePage";
import FacilitiesServicesPage from "./facilitiesAndServices/FacilitiesServicesPage";
import SpecialtiesPage from "./specialties/SpecialtiesPage";
import OurChroniclesPage from "./ourChronicles/OurChroniclesPage";
import TpaEmpanelmentPage from "./TPAsAndEmpanelments/TpaEmpanelmentPage";
import ContactPage from "./contactUs/ContactPage";
import OurFoundersPage from "./aboutUs/OurFoundersPage";
import OurLakshyaPage from "./aboutUs/OurLakshyaPage";
import ProjectUmmeedPage from "./aboutUs/ProjectUmmeedPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/facilities-and-services"
          element={<FacilitiesServicesPage />}
        />
        <Route path="/specialties" element={<SpecialtiesPage />} />
        <Route path="/our-chronicles" element={<OurChroniclesPage />} />
        <Route
          path="/tpas-and-empanelments"
          element={<TpaEmpanelmentPage />}
        />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route path="/about-us/our-founders" element={<OurFoundersPage />} />
        <Route path="/about-us/our-lakshya" element={<OurLakshyaPage />} />
        <Route
          path="/about-us/project-ummeed"
          element={<ProjectUmmeedPage />}
        />
      </Routes>
    </>
  );
}
