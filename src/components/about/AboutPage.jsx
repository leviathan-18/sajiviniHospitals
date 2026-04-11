import './about.css';
import AboutEmergencyStrip from './AboutEmergencyStrip';
import OurFounders from './ourFounders/OurFounders';
import OurLakshya from './ourLakshya/OurLakshya';
import ProjectUmmeed from './projectUmmeed/ProjectUmmeed';

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