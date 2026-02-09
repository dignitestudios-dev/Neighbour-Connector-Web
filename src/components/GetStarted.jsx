import Image from "next/image";
import React from "react";
import Apple from "./icons/Apple";

const GetStarted = () => {
  return (
    <section className="px-14 py-0 bg-black rounded-xl flex items-center justify-between bg-[url(/images/contact-bg.png)] bg-cover bg-center">
      <div className="space-y-4">
        <h2 className="text-white text-5xl font-medium capitalize">
          Ready to get started?
        </h2>

        <p className="capitalize text-white text-lg">
          Download the NeighborConnector™ app and start your Circle Living
          today!!
        </p>

        <div>
          <div className=" text-black bg-white rounded-lg flex gap-2 items-center px-4 py-3 w-max cursor-pointer">
            Download App <Apple />
          </div>
          {/* <Image
            src={"/images/apple.png"}
            alt="Apple Store"
            width={150}
            height={150}
          />

          <Image
            src={"/images/google.png"}
            alt="Google Play Store"
            width={150}
            height={150}
          /> */}
        </div>
      </div>

      <div className="relative w-130 h-140">
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
