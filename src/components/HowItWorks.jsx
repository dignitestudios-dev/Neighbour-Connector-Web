import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 flex items-center gap-8">
        {/* Left column - text */}
        <div className="w-1/2 space-y-8">
          <h2 className="text-5xl font-extrabold text-secondary">How It Works</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary">Step 1: Create Your Profile</h3>
              <p className="text-lg text-black/60 mt-2 max-w-xl">Download the app and create your profile by adding your name, photo and a few details about yourself. You can add emergency contact numbers if you want. Share only what you feel comfortable with. You can update your profile whenever you like.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Step 2: Click “Create Group” Or “Join Group”</h3>
              <p className="text-lg text-black/60 mt-2 max-w-xl">When you create a group, pick a name for it. Invite trusted family and friends who live nearby, and they'll get a message inviting them to join. You approve all requests to join your group. You can also report or block users who aren’t a good fit for your circle.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Step 3: Start Building Relationships</h3>
              <p className="text-lg text-black/60 mt-2 max-w-xl">Once you have your circle, start individual conversations by checking in with your people, posting your thoughts and ideas or asking for support. Respond to others' posts and stay in touch. If you want to have other discussions, start a group chat!</p>
            </div>
          </div>
        </div>

        {/* Right column - mockup image */}
        <div className="w-1/2 flex justify-center">
          <div className="relative w-[520px] h-[520px]">
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
    </section>
  );
};

export default HowItWorks;