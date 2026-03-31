import React from "react";

const ResourcesPage = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-2xl border border-[#E6F3C9] bg-[#EEF7DE] px-6 py-12 md:px-10 md:py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary text-center">
            Resources
          </h2>

          <div className="mt-8 md:mt-10 text-center text-black/70 space-y-2">
            <p className="text-lg md:text-2xl font-semibold text-primary">
              Neighbor Connector Library
            </p>
            <p className="text-sm md:text-lg">- Videos</p>
            <p className="text-sm md:text-lg">- Presentations/Events</p>
            <p className="text-sm md:text-lg">- How-to</p>
            <p className="text-sm md:text-lg">
              - Community Resources (Paid Advertisers)
            </p>
            <p className="text-sm md:text-lg">- Articles/Newsletter/Blog Ideas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;
