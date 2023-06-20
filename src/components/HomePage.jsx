import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import MainContent from "./MainContent";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <MainContent />
      <AboutMe />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default HomePage;
