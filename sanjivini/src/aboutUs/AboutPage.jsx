import './about.css';
import AboutEmergencyStrip from './AboutEmergencyStrip';
import OurFounders from './ourFounders/OurFoundersPage';
import OurLakshya from './ourLakshay/OurLakshyaPage';
import ProjectUmmeed from './projectUmmeed/ProjectUmmeedPage';

const AboutPage = () => {
  return (
    <div id="about-top" className="about-page">
      {/* 1. Founders Section */}
      <section id="our-founders" className="scroll-mt-28">
        <OurFounders />
      </section>

      {/* 2. Project Ummeed Section */}
      <section id="project-umeed" className="scroll-mt-28">
        <ProjectUmmeed />
      </section>

      {/* 3. Lakshya Section */}
      <section id="our-lakshya" className="scroll-mt-28">
        <OurLakshya />
      </section>

      <AboutEmergencyStrip />
    </div>
  );
};

export default AboutPage;