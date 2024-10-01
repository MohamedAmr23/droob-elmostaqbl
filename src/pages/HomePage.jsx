import  { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import OurTrainingPrograms from "../components/OurTrainingPrograms.jsx";

const HomePage = () => {
  return(
    <Fragment>
      <HeroSection />
      <OurTrainingPrograms/>
    </Fragment>
  );
};

export default HomePage;
