import Image from "next/image";
import React from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.cts.neighbour_connector";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/neighbor-connector/id6759636423";

const GetStarted = () => {
  return (
    <section className="px-6 md:px-14 py-12 md:py-16 bg-black rounded-2xl flex flex-col xl:flex-row items-center justify-between gap-10 bg-[url(/images/contact-bg.png)] bg-cover bg-center overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <h2 className="text-white text-3xl md:text-5xl font-medium capitalize">
          Ready to get started?
        </h2>

        <p className="text-white text-sm md:text-lg max-w-xl">
          Download the NeighborConnector<sup className="text-[10px] font-semibold">TM</sup> App and start your "Circle Living
          <sup className="text-[10px] font-semibold">TM</sup>"
          today!!
        </p>

        <div className="flex flex-col md:flex-row md:items-end gap-5 md:gap-6">
          <div className="flex flex-col gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl overflow-hidden shadow-[0_0_24px_rgba(255,255,255,0.33)] transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Download NeighborConnector on Google Play"
            >
              <Image
                src="/images/google.png"
                alt="Get it on Google Play"
                width={2000}
                height={650}
                className="h-14 md:h-16 w-auto"
              />
            </a>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl overflow-hidden shadow-[0_0_24px_rgba(255,255,255,0.33)] transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Download NeighborConnector on the App Store"
            >
              <Image
                src="/images/apple.png"
                alt="Download on the App Store"
                width={2000}
                height={650}
                className="h-14 md:h-16 w-auto"
              />
            </a>
          </div>

          <div className="w-max self-start md:self-auto">
            <div className="block rounded-2xl p-1.5">
              <Image
                src="/images/qrcode.png"
                alt="NeighborConnector app download QR code"
                width={1024}
                height={1024}
                className="w-24 h-24 md:w-28 md:h-28 rounded-lg"
              />
            </div>
            <p className="text-xs text-white/90 text-center mt-2">Scan to download</p>
          </div>
        </div>
      </div>

      <div className="relative w-40 h-52 md:w-[420px] md:h-[520px] shrink-0">
        <Image
          src="/images/contact.png"
          alt="Get Started NeighborConnector"
          fill
          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          priority
        />
      </div>
    </section>
  );
};

export default GetStarted;
