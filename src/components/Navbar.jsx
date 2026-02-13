"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How it Works" },
    { href: "/#about", label: "About us" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact Us" },
  ];

  const [active, setActive] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Observe in-page sections and update active nav link on scroll
    if (typeof window === "undefined") return;

    const idFromHref = (href) => {
      if (href === "/") return "__home__";
      const hash = href.split("#")[1];
      return hash || null;
    };

    const observedIds = navLinks.map((l) => idFromHref(l.href)).filter(Boolean);

    const elements = observedIds
      .map((id) => ({
        id,
        el:
          id === "__home__"
            ? document.documentElement
            : document.getElementById(id),
      }))
      .filter((x) => x.el);

    const onIntersect = (entries) => {
      // pick the entry with largest intersectionRatio
      let best = null;
      entries.forEach((entry) => {
        if (!best || entry.intersectionRatio > best.intersectionRatio)
          best = entry;
      });

      if (best && best.target.id) {
        const id = best.target.id;
        const matched = navLinks.find((l) => l.href.endsWith(`#${id}`));
        if (matched) setActive(matched.href);
      } else {
        // if nothing intersects, set home when near top
        if (window.scrollY < 200) setActive("/");
      }
    };

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      threshold: [0.25, 0.5, 0.75],
    });

    elements.forEach((e) => {
      if (e.id === "__home__") {
        // observe top sentinel
        let topSentinel = document.getElementById("hero-top-sentinel");
        if (!topSentinel) {
          topSentinel = document.createElement("div");
          topSentinel.id = "hero-top-sentinel";
          document.body.prepend(topSentinel);
        }
        observer.observe(topSentinel);
      } else {
        observer.observe(e.el);
      }
    });

    // fallback: update active on scroll based on bounding boxes
    const onScroll = () => {
      const viewportTop = window.scrollY + window.innerHeight / 3;
      let found = false;
      
      // Start from the end and work backwards to find the most relevant section
      for (let i = navLinks.length - 1; i >= 1; i--) {
        const l = navLinks[i];
        const id = l.href.split("#")[1];
        const el = document.getElementById(id);
        
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          
          if (viewportTop >= top) {
            setActive(l.href);
            found = true;
            break; // Stop after finding the deepest section
          }
        }
      }
      
      if (!found && window.scrollY < 200) setActive("/");
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // initial run
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    // smooth scroll for in-page anchors
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
        setActive(href);
        setIsMenuOpen(false); // close mobile menu after click
      } else {
        // fallback: navigate
        window.location.href = href;
      }
    } else {
      setIsMenuOpen(false); // close mobile menu for home link
    }
  };

  return (
    <>
      <nav
        className="max-w-360 mx-auto px-6 md:px-8 sticky top-0 z-50 w-full bg-white border-b-2 border-gray-100"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="Neighbor Connector home"
          >
            <Image
              src="/images/logo.png"
              alt="Neighbor Connector Logo"
              width={186}
              height={96}
              priority
              className="md:h-20 h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href} role="listitem">
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg transition-colors duration-200 ${
                    active === link.href
                      ? "text-primary-bold"
                      : "text-secondary hover:text-primary-bold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary hover:text-primary-bold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Slider */}
        <nav
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col gap-6">
            {/* Close Button */}
            <button
              className="self-end p-2 text-secondary hover:text-primary-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col gap-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href} role="listitem">
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-2 rounded transition-colors ${
                      active === link.href
                        ? "bg-primary text-white font-bold"
                        : "text-secondary hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
