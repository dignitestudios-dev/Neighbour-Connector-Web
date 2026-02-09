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
            <h2 className="text-4xl md:text-5xl font-black text-secondary">About Us</h2>

            <p className="text-base md:text-lg font-medium capitalize text-black/50 leading-relaxed">
              The NeighborConnector™ App is a volunteer-powered free mobile app
              designed to help neighbors build trust and support within small,
              verified social groups called "micro-circles". It was developed by a
              division of Community Care Housing, a 501(c)(3) organization that
              promotes connected and shared housing opportunities, offers
              scholarships and grants to those in need, along with raising
              awareness and providing education on housing issues.
            </p>

            <p className="text-base md:text-lg font-medium capitalize text-black/50 leading-relaxed">
              Current community apps and volunteer platforms emphasize large,
              broadcast-style communication on social feeds that offer resources
              and tools, but they don''t support small-scale community building,
              trust or companionship the way NeighborConnector™ does. In an age of
              technology, neighbors remain disconnected and unaware of potential
              support systems. Loneliness and isolation are creating a serious
              health crisis, especially among older adults and vulnerable
              neighbors in need of local help.
            </p>

            <p className="text-base md:text-lg font-medium capitalize text-black/50 leading-relaxed">
              The NeighborConnector™ App helps people connect naturally and thrive
              in their communities. We love Circle Living!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
