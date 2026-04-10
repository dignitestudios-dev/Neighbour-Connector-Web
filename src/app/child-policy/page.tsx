import React from "react";

const page = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          CHILD POLICY
        </h1>

        <div className="text-sm text-gray-600">
          <p>
            <strong>Effective Date:</strong> Lorem Ipsum
          </p>
          <p>
            <strong>Last Updated:</strong> Lorem Ipsum
          </p>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Lorem Ipsum</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Dolor Sit Amet</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Consectetur Adipiscing</h2>
          <p className="text-gray-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Eiusmod Tempor</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Duis aute irure dolor in reprehenderit</li>
            <li>In voluptate velit esse cillum dolore</li>
            <li>Eu fugiat nulla pariatur</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Ut Labore</h2>
          <p className="text-gray-700">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">6. Magna Aliqua</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Quis autem vel eum iure reprehenderit</li>
            <li>Neque porro quisquam est</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">7. Ullamco Laboris</h2>
          <p className="text-gray-700">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-bold mb-3">8. Contact</h2>
          <p className="text-gray-700 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-blue-600">lorem@ipsum.com</p>
        </section>

      </div>
    </div>
  );
};

export default page;