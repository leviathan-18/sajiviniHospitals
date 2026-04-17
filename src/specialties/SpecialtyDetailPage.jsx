import { Navigate, useParams } from "react-router-dom";
import GenericInfoPage from "../shared/components/GenericInfoPage";
import { specialtiesBySlug } from "./specialtiesData";
import PulmonologySleepMedicinePage from "./CentreOfExcellence/PulmonologySleepMedicinePage";
import GeriatricPalliativeCarePage from "./CentreOfExcellence/GeriatricPalliativeCarePage";
import InternalMedicinePage from "./CentreOfExcellence/InternalMedicinePage";
import GynaecologyObstetricsPage from "./CentreOfExcellence/GynaecologyObstetricsPage";
import PediatricsNeonatologyPage from "./CentreOfExcellence/PediatricsNeonatologyPage";
import BoneJointCarePage from "./CentreOfExcellence/BoneJointCarePage";
import CriticalCarePage from "./CentreOfExcellence/CriticalCarePage";
import TraumaEmergencyCarePage from "./CentreOfExcellence/TraumaEmergencyCarePage";
import SpecialtyFooterCta from "../shared/components/SpecialtyFooterCta";

export default function SpecialtyDetailPage() {
  const { slug } = useParams();
  const specialty = specialtiesBySlug[slug];

  if (!specialty) {
    return <Navigate to="/specialties" replace />;
  }

  if (slug === "pulmonology-sleep-medicine") {
    return <PulmonologySleepMedicinePage />;
  }

  if (slug === "geriatric-palliative-care") {
    return <GeriatricPalliativeCarePage />;
  }

  if (slug === "internal-medicine") {
    return <InternalMedicinePage />;
  }

  if (slug === "gynaecology-obstetrics") {
    return <GynaecologyObstetricsPage />;
  }

  if (slug === "pediatrics-neonatology") {
    return <PediatricsNeonatologyPage />;
  }

  if (slug === "bone-joint-care") {
    return <BoneJointCarePage />;
  }

  if (slug === "critical-care") {
    return <CriticalCarePage />;
  }

  if (slug === "trauma-emergency-care") {
    return <TraumaEmergencyCarePage />;
  }

  return (
    <>
      <GenericInfoPage
        title={specialty.label}
        text="This page is currently a placeholder for specialty details. We will customize this section next with complete content, visuals, and doctor information."
      />
      <SpecialtyFooterCta />
    </>
  );
}
