"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home", isActive: true },
    { href: "/#features", label: "Features", isActive: false },
    { href: "/#how-it-works", label: "How it Works", isActive: false },
    { href: "/#about", label: "About us", isActive: false },
    { href: "/#contact", label: "Contact Us", isActive: false },
  ];

  return (
    <nav
      className="max-w-360 mx-auto px-8 sticky top-0 z-50 w-full bg-white border-b-2 border-gray-100"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0"
          aria-label="Neighbor Connector home"
        >
          <Image
            src="/images/logo.png"
            alt="Neighbor Connector Logo"
            width={186}
            height={96}
            priority
            className="h-20 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href} role="listitem">
              <Link
                href={link.href}
                className={`text-lg transition-colors duration-200 ${
                  link.isActive
                    ? "text-primary-bold"
                    : "text-secondary hover:text-primary-bold"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
