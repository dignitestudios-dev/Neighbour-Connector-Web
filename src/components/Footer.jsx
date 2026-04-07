"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.dev.neighborconnector.org/news-letter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newsletterEmail }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe to newsletter");
      }

      console.log("Newsletter signup:", newsletterEmail);
      setShowModal(true);
      setNewsletterEmail("");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      console.error("Newsletter subscription error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer className="relative w-full bg-white pt-12 md:pt-16 font-medium">
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Success!"
        message="Thanks for subscribing! We'll send you the latest updates and blog ideas soon."
      />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top section with logo and three columns */}
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Neighbor Connector Logo"
          width={400}
          height={400}
          className="w-40 md:w-60 mb-8 md:mb-12"
        />
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 ${!isHome ? "hidden" : ""}`}
        >
          {/* Left column - Links */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-lg md:text-2xl font-extrabold text-secondary mb-4">
                Links
              </h3>
              {/* <p className="text-xs md:text-sm text-black/50 mb-4">
                (Stats you shared) - Remember anything that has dated statistics
                must be periodically updated for optimal SEO/GEO-search engine
                optimization and generative engine optimization for ranking and
                visibility.
              </p> */}
              <ul className="space-y-2 text-xs md:text-sm text-black/50 mb-6">
                <li>External Research Links</li>
                <li>Articles/Newsletters/Blogs</li>
              </ul>
            </div>
          </div>

          {/* Middle column - Legal & Product */}
          <div className="flex-1 space-y-6">
            {/* Legal */}
            <div>
              <h4 className="text-lg md:text-2xl font-extrabold text-secondary mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-xs md:text-sm text-black/50">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:underline hover:text-success"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:underline hover:text-success"
                  >
                    Privacy Policy
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
              <h4 className="text-lg md:text-2xl font-extrabold text-secondary mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-xs md:text-sm text-black/50">
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
              </ul>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="flex-1">
            <h4 className="text-lg md:text-2xl font-extrabold text-secondary mb-4">
              Articles/Newsletters/Blogs
            </h4>
            <p className="text-xs md:text-sm text-black/50 mb-6">
              Articles About Loneliness/Isolation Health Crisis, Aging Boomers,
              Senior Issues, Isolated Parents And Children, Single Parents,
              Isolated 20s And 30s In A Digital World, Shared Housing, Community
              For People Of Different Age Groups, Comparison Chart Between
              Neighbor Connector<sub className="text-[10px] font-semibold ml-1">TM</sub> And Other App Features, Etc.
            </p>

            {/* <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
                  {error}
                </div>
              )}
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email Address"
                required
                disabled={isLoading}
                className="w-full h-12 md:h-14 px-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] placeholder:text-secondary text-black text-sm md:text-base focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 md:py-4 bg-success text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form> */}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400/50 my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-secondary">
            Copyright © {new Date().getFullYear()} Neighbor Connector
            <sub className="text-[10px] font-semibold ml-1">TM</sub>. All rights reserved.
          </p>
          <div className="text-xs md:text-sm text-secondary space-x-2 md:space-x-4 flex flex-wrap">
            <a href="/terms-and-conditions" className="hover:text-primary">
              Terms & Conditions
            </a>
            <span>/</span>
            <a href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </a>
            <span>/</span>
            <a href="/legal-disclaimer" className="hover:text-primary">
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>

      {/* Still have questions strip */}
      <div className="w-full bg-primary mt-8 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <p className="text-white font-medium text-sm md:text-base">
            Still have questions?
          </p>
          <a
            href="/connect"
            className="px-5 py-2 bg-white text-primary font-bold rounded-lg text-sm md:text-base hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
