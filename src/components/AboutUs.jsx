import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-24" id="about">
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left - mockup image with glow */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-64 h-80 md:w-105 md:h-140">
              <Image
                src="/images/about.png"
                alt="About NeighborConnector"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right - content */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-secondary">
              About Us
            </h2>

            <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed">
              The NeighborConnector
              <sup className="text-[10px] font-semibold ">TM</sup> App is a
              volunteer-powered free mobile app designed to help neighbors build
              trust and support within small, verified social groups called
              "micro-circles". It was developed by Community Care Housing, a 501(c)(3) organization that promotes connected and shared housing opportunities, offers scholarships and grants to those in need, along with raising awareness and providing education on housing issues.
            </p>

            <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed">
             CCH and NeighborConnector
              <sup className="text-[10px] font-semibold ">TM</sup> are here to help make communities stronger, friendlier and more connected.  A part of connected and shared housing involves technology so unlike other community platforms designed for hundreds of homes or HOA communities, NeighborConnectorTM focuses on relationships among a select few people you've met and want to build trust with (aka “Circle LivingTM”)
              <sup className="text-[10px] font-semibold ">TM</sup> to connect naturally.   
            </p>

            <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed">
             Whether or not you are in connected or shared housing, let’s get connected to thrive in your community.
              The NeighborConnector<sup className="text-[10px] font-semibold">TM</sup> Tell others about the NeighborConnector<sup className="text-[10px] font-semibold">TM</sup> App and let’s live it up with "Circle Living
              <sup className="text-[10px] font-semibold">TM</sup>".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
