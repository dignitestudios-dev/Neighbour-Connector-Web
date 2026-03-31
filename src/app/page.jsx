import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";
import FAQ from "../components/FAQ";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AboutUs />
      <FAQ />
      <GetStarted />
      <Contact />
    </>
  );
};

export default LandingPage;
