import { useMemo } from 'react';
import AboutPage from './components/about/AboutPage';
import AboutNavbar from './components/about/navar';
import Footer from './components/layout/Footer';
import ExcellenceStats from './components/sections/ExcellenceStats';
import HealthHub from './components/sections/HealthHub';
import Home from './components/sections/Home';
import SpecialitiesProcedures from './components/sections/SpecialitiesProcedures';
import Specialities from './components/sections/Specialities';
import SuccessStories from './components/sections/SuccessStories';

function App() {
  const isAboutPage = useMemo(() => {
    return window.location.pathname.toLowerCase().startsWith('/about');
  }, []);

  return (
    <div className="App">
      <AboutNavbar />
      <main>
        {isAboutPage ? (
          <section id="about">
            <AboutPage />
          </section>
        ) : (
          <>
            <section id="home">
              <Home />
            </section>
            <section id="specialities-procedures">
              <SpecialitiesProcedures />
            </section>
            <section id="specialties">
              <Specialities />
            </section>
            <section id="excellence-stats">
              <ExcellenceStats />
            </section>
            <section id="success-stories">
              <SuccessStories />
            </section>
            <section id="health-hub">
              <HealthHub />
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;