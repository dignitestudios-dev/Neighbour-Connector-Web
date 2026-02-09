import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-24" id="how-it-works">
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left column - text */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-secondary">How It Works</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary">
                  Step 1: Create Your Profile
                </h3>
                <p className="text-base md:text-lg font-medium capitalize text-black/50 mt-2">
                  Download the app and create your profile by adding your name,
                  photo and a few details about yourself. You can add emergency
                  contact numbers if you want. Share only what you feel
                  comfortable with. You can update your profile whenever you like.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary">
                  Step 2: Click "Create Group" Or "Join Group"
                </h3>
                <p className="text-base md:text-lg font-medium capitalize text-black/50 mt-2">
                  When you create a group, pick a name for it. Invite trusted
                  family and friends who live nearby, and they''ll get a message
                  inviting them to join. You approve all requests to join your
                  group. You can also report or block users who aren''t a good fit
                  for your circle.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary">
                  Step 3: Start Building Relationships
                </h3>
                <p className="text-base md:text-lg font-medium capitalize text-black/50 mt-2">
                  Once you have your circle, start individual conversations by
                  checking in with your people, posting your thoughts and ideas or
                  asking for support. Respond to others'' posts and stay in touch.
                  If you want to have other discussions, start a group chat!
                </p>
              </div>
            </div>
          </div>

          {/* Right column - mockup image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-96 md:w-130 md:h-130">
              <Image
                src="/images/how-it-works.png"
                alt="How it works - NeighborConnector mockups"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
