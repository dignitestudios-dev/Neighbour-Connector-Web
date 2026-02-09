"use client";

import React from "react";
import Image from "next/image";
import Star from "./icons/Star";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-12 md:pt-24">
      {/* Decorative Stars */}
      <div className="absolute top-12 left-6 md:left-12 w-8 md:w-16 h-8 md:h-16">
        <Star />
      </div>
      <div className="absolute top-20 right-6 md:right-20 w-6 md:w-12 h-6 md:h-12 transform rotate-45">
        <Star />
      </div>
      <div className="absolute bottom-32 left-[50%] w-6 md:w-12 h-6 md:h-12 transform rotate-45">
        <Star />
      </div>

      {/* Main Container */}
      <div className="h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
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
                <span className="text-success font-black text-3xl md:text-5xl">
                Neighbor Connector
                <sup className="text-success text-xs md:text-lg font-black ml-1">™</sup>
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg md:text-2xl font-bold text-primary leading-snug">
              Where Caring Neighbors Make Stronger Communities
            </h2>

            {/* Description */}
            <p className="text-sm md:text-xl font-medium text-black/50 leading-relaxed mt-6">
              The NeighborConnector™ app helps community members create personal
              profiles and invite others into their trusted micro-circles.
              Residents can connect securely with friends and family to share
              support and companionship.
            </p>

            <p className="text-sm md:text-xl font-medium text-black/50 leading-relaxed">
              Unlike other community platforms designed for hundreds of homes or
              HOA communities, NeighborConnector™ focuses on relationships among
              a select few people you've met and want to build trust with.
            </p>

            <p className="text-sm md:text-xl font-medium text-black/50 leading-relaxed">
              Your closest neighbors join by invitation only, eliminating noise
              from people outside your private circle for a more intimate
              experience. We call this "Circle Living."
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
