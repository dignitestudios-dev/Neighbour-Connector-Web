"use client";

import React from "react";
import Image from "next/image";
import Star from "./icons/Star";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-12 md:pt-24">
      {/* Decorative Stars */}
      <div className="absolute top-12 left-6 md:left-12 w-14 md:w-24 h-14 md:h-24 z-0">
        <Star />
      </div>

      <div className="absolute top-20 right-6 md:right-20 w-12 md:w-20 h-12 md:h-20 transform rotate-45 z-0">
        <Star />
      </div>

      <div className="absolute hidden md:block lg:block bottom-32 left-[50%] w-12 md:w-20 h-12 md:h-20 transform rotate-45 z-0">
        <Star />
      </div>

      {/* Main Container */}
      <div className="h-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        {/* Mobile Image - shows at top on mobile */}
        <div className="w-full lg:w-1/2 flex lg:hidden justify-center order-first">
          <Image
            src="/images/hero.png"
            alt="NeighborConnector App Mockups"
            width={600}
            height={700}
            className="object-contain w-full max-w-sm"
            priority
            
          />
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            {/* Welcome Text */}
            <h1 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
              Welcome to <br />
              <span className="relative inline-block text-success font-black text-3xl md:text-5xl">
                Neighbor Connector
                <span className="absolute top-1 lg:top-1 md:top-2 -right-4 text-[10px] font-semibold">
                  TM
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg md:text-2xl font-bold text-primary leading-snug">
              Where Caring Neighbors Make Stronger Communities
            </h2>

            {/* Description */}
            <p className="text-sm md:text-xl font-medium text-black/50 leading-relaxed mt-6">
              The NeighborConnector
              <sup className="text-[10px] font-semibold">TM</sup> App helps
              community members create personal profiles and invite others into
              their trusted micro-circles. Residents can connect securely to
              share support and companionship. You can also connect with close
              friends and family outside your neighborhood.
            </p>

            <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed">
              Current community apps and volunteer platforms emphasize large,
              broadcast-style communication on social feeds that offer resources
              and tools, but they don't support small-scale community building,
              trust or companionship the way NeighborConnector
              <sup className="text-[10px] font-semibold ">TM</sup> does. In
              an age of technology, neighbors, friends and family remain
              disconnected and unaware of potential support systems. Loneliness
              and isolation are creating a serious health crisis, especially
              among older adults and vulnerable neighbors in need of local help.
            </p>


            <p className="text-sm md:text-xl font-medium text-black/50 leading-relaxed">
              Create a circle or have your closest neighbors, friends and family
              join by invitation only, eliminating noise from people outside
              your private circle for a more intimate experience. We call this
               “Circle Living
              <sup className="text-[10px] font-semibold ">TM</sup>”.
            </p>
          </div>
        </div>

        {/* Desktop Image - shows on right on desktop */}
        <div className="hidden lg:flex w-1/2 relative h-full items-center justify-center">
          <Image
            src="/images/hero.png"
            alt="NeighborConnector App Mockups"
            width={600}
            height={700}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
