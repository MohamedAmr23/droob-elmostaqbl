import  { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import OurTrainingPrograms from "../components/OurTrainingPrograms.jsx";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";

const HomePage = () => {
  return(
    <Fragment>
      <HeroSection />
      <OurTrainingPrograms/>
      <About/>
      <Features/>
    </Fragment>
  );
};

export default HomePage;
