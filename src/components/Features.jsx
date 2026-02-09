import React from 'react';
import Image from 'next/image';
import Sheild from './icons/Sheild';
import Users from './icons/Users';
import Chats from './icons/Chats';
import Holly from './icons/Holly';

const Features = () => {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Image with glow */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/features.png"
            alt="NeighborConnector features mockup"
            width={640}
            height={760}
            className="object-contain"
            priority
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[50px] font-extrabold text-secondary mb-6">Features</h2>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Sheild />
                <h4 className="text-[20px] font-bold text-primary">Optional Safety Check-Ins</h4>
              </div>
              <p className="text-[18px] text-black/50 leading-7 max-w-xl">
                This optional feature lets your neighbors know how you’re doing by checking in and marking yourself “Safe” each day. Use 911 in a real emergency.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Users />
                <h4 className="text-[20px] font-bold text-primary">Community Circles</h4>
              </div>
              <p className="text-[18px] text-black/50 leading-7 max-w-xl">
                You can create or join verified neighbor groups, called “micro-circles,” to share updates, ask for help or plan events. Whether you want to chat, schedule walks, need help with chores, rides, errands or want to plan a get-together, your circle is there for you.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Chats />
                <h4 className="text-[20px] font-bold text-primary">Group Chat & Media Sharing</h4>
              </div>
              <p className="text-[18px] text-black/50 leading-7 max-w-xl">
                Stay in touch with your local circle by sending messages and sharing images or photos in a secure, private chat. Over time, you can turn strangers into acquaintances and then into friends, building a strong support system.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Holly />
                <h4 className="text-[20px] font-bold text-primary">Ask Holly</h4>
              </div>
              <p className="text-[18px] text-black/50 leading-7 max-w-xl">
                Holly is your personal assistant. She can answer your questions about the app as you learn to use it. She understands that not everyone is comfortable with technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;