import Image from "next/image";
import React from "react";
import Apple from "./icons/Apple";

const GetStarted = () => {
  return (
    <section className="px-6 md:px-14 py-12 md:py-16 bg-black rounded-xl flex flex-col lg:flex-row items-center justify-between gap-8 bg-[url(/images/contact-bg.png)] bg-cover bg-center">
      <div className="space-y-4">
        <h2 className="text-white text-3xl md:text-5xl font-medium capitalize">
          Ready to get started?
        </h2>

        <p className="capitalize text-white text-sm md:text-lg">
          Download the NeighborConnector™ app and start your Circle Living
          today!!
        </p>

        <div>
          {/* <div className=" text-black bg-white rounded-lg flex gap-2 items-center px-4 py-3 w-max cursor-pointer text-sm md:text-base">
            Download App <Apple />
          </div> */}

          <div className=" text-black bg-white rounded-lg flex gap-2 items-center px-4 py-3 w-max cursor-pointer text-sm md:text-base">
            Coming Soon
          </div>
        </div>
      </div>

      <div className="relative w-32 h-40 md:w-130 md:h-140 shrink-0">
        <Image
          src="/images/contact.png"
          alt="Get Started NeighborConnector"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default GetStarted;
