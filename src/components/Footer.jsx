"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SuccessModal = ({
  isOpen,
  onClose,
  title = "Success!",
  message = "Thank you! We'll be in touch soon.",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fadeIn">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-extrabold text-secondary text-center mb-3">
          {title}
        </h3>
        <p className="text-center text-black/60 mb-8">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 bg-success text-white rounded-lg font-medium hover:opacity-90 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setShowModal(true);
    setNewsletterEmail("");
  }

  return (
    <footer className="max-w-360 mx-auto px-8 relative w-full bg-white py-16 font-medium">
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Success!"
        message="Thanks for subscribing! We'll send you the latest updates and blog ideas soon."
      />

      {/* Main footer content */}
      <div className="">
        {/* Top section with logo and three columns */}
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Neighbor Connector Logo"
          width={500}
          height={500}
          className="w-60 -ml-10"
        />
        <div className="flex gap-12 mb-12">
          {/* Left Column - Links */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-secondary mb-4">
                Links
              </h3>
              <p className="text-sm text-black/50 mb-4">
                (Stats You Shared) – Remember Anything That Has Dated Statistics
                Must Be Periodically Updated For Optimal SEO/GEO-Search Engine
                Optimization And Generative Engine Optimization For Ranking And
                Visibility.
              </p>
              <ul className="space-y-2 text-sm text-black/50 mb-6">
                <li>Stats You Shared Remember Anything</li>
                <li>SEO Updates Status</li>
                <li>External Research Link</li>
              </ul>
            </div>
            <button className="w-full py-4 bg-success text-white rounded-lg font-medium hover:opacity-90">
              Join the Community
            </button>
          </div>

          {/* Middle Column - Legal & Product */}
          <div className="flex-1 space-y-6">
            {/* Legal */}
            <div>
              <h4 className="text-2xl font-extrabold text-secondary mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-black/50">
                <li>
                  <Link href="#" className="hover:underline hover:text-success">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover:text-success">
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-disclaimer"
                    className="hover:underline hover:text-success"
                  >
                    Legal disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-2xl font-extrabold text-secondary mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-black/50">
                <li>
                  <a href="#" className="hover:text-primary">
                    Mobile app (iOS & Android)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Web Application for Admins
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Commercial Model
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="flex-1">
            <h4 className="text-2xl font-extrabold text-secondary mb-4">
              Newsletter/Blog Ideas
            </h4>
            <p className="text-sm text-black/50 mb-6">
              Articles About Loneliness/Isolation Health Crisis, Aging Boomers,
              Senior Issues, Isolated Parents And Children, Single Parents,
              Isolated 20s And 30s In A Digital World, Shared Housing, Community
              For People Of Different Age Groups, Comparison Chart Between
              Neighbor Connector And Other App Features, Etc.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full h-14 px-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] placeholder:text-secondary text-black focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-success text-white rounded-lg font-medium hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400/50 my-8" />

        {/* Bottom footer */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-secondary">
            Copyright © 2024 Neighbor Connector. All rights reserved.
          </p>
          <div className="text-sm text-secondary space-x-4">
            <a href="#" className="hover:text-primary">
              Terms & Conditions
            </a>
            <span>/</span>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <span>/</span>
            <a href="#" className="hover:text-primary">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
