"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Navbar with active link tracking based on viewport section
const Navbar = () => {
  const navLinks = [
    { href: "/#hero", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How it Works" },
    { href: "/#about", label: "About us" },
    { href: "/#contact", label: "Contact Us" },
  ];

  const [active, setActive] = useState("hero");

  useEffect(() => {
    // Collect target ids from navLinks
    const ids = navLinks.map((l) => (l.href.includes("#") ? l.href.split("#")[1] : "hero"));
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x) => x.el);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with highest intersectionRatio or the one that isIntersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((x) => observer.observe(x.el));

    return () => observer.disconnect();
  }, []);

  function handleClick(e, href) {
    // Smooth scroll to section instead of navigation
    if (href.includes("#")) {
      e.preventDefault();
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // small timeout to ensure observer updates
        setTimeout(() => setActive(id), 200);
      } else {
        // fallback: navigate
        window.location.href = href;
      }
    }
  }

  return (
    <nav
      className="max-w-360 mx-auto px-8 sticky top-0 z-50 w-full bg-white border-b-2 border-gray-100"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <a href="/" className="shrink-0" aria-label="Neighbor Connector home">
          <Image
            src="/images/logo.png"
            alt="Neighbor Connector Logo"
            width={186}
            height={96}
            priority
            className="h-20 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const id = link.href.includes("#") ? link.href.split("#")[1] : "hero";
            const isActive = active === id;
            return (
              <li key={link.href} role="listitem">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-lg transition-colors duration-200 ${
                    isActive ? "text-primary-bold" : "text-secondary hover:text-primary-bold"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
