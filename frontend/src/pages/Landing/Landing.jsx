import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <Navbar/>

      {/* Landing Sections */}
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default Landing;