import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AboutUs />
      <Contact />
      <GetStarted />
    </>
  );
};

export default LandingPage;
