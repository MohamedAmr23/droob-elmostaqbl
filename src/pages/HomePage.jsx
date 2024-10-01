import  { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import OurTrainingPrograms from "../components/OurTrainingPrograms.jsx";
import About from "../components/About.jsx";

const HomePage = () => {
  return(
    <Fragment>
      <HeroSection />
      <OurTrainingPrograms/>
      <About/>
    </Fragment>
  );
};

export default HomePage;
