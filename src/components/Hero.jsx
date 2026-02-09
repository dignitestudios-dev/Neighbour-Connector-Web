"use client";

import React from "react";
import Image from "next/image";
import Star from "./icons/Star";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-24">
      {/* Decorative Stars */}
      <div className="absolute top-12 left-12 w-16 h-16">
        <Star />
      </div>
      <div className="absolute top-20 right-20 w-12 h-12 transform rotate-45">
        <Star />
      </div>
      <div className="absolute bottom-32 left-[50%] w-12 h-12 transform rotate-45">
        <Star />
      </div>

      {/* Main Container */}
      <div className="h-full flex items-center">
        {/* Left Content */}
        <div className="w-1/2 pr-8">
          <div className="space-y-4">
            {/* Welcome Text */}
            <h1 className="text-[50px] font-bold text-secondary leading-tight">
              Welcome to <br />
                <span className="text-success font-black text-[50px]">
                Neighbor Connector
                <sup className="text-success text-lg font-black ml-1">™</sup>
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl font-bold text-primary leading-snug">
              Where Caring Neighbors Make Stronger Communities
            </h2>

            {/* Description */}
            <p className="text-xl font-medium text-black/50 leading-relaxed mt-6 max-w-xl">
              The NeighborConnector™ app helps community members create personal
              profiles and invite others into their trusted micro-circles.
              Residents can connect securely with friends and family to share
              support and companionship.
            </p>

            <p className="text-xl font-medium text-black/50 leading-relaxed max-w-xl">
              Unlike other community platforms designed for hundreds of homes or
              HOA communities, NeighborConnector™ focuses on relationships among
              a select few people you've met and want to build trust with.
            </p>

            <p className="text-xl font-medium text-black/50 leading-relaxed max-w-xl">
              Your closest neighbors join by invitation only, eliminating noise
              from people outside your private circle for a more intimate
              experience. We call this "Circle Living."
            </p>
          </div>
        </div>

        {/* Right Side - iPhone Mockups with Glow */}
        <div className="w-1/2 relative h-full flex items-center justify-center">
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
