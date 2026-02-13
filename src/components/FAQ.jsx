"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: "Getting Started",
      items: [
        {
          question: "What is NeighborConnector™?",
          answer:
            "Hi there! I'm Holly. NeighborConnector™ helps you build a small, trusted circle of neighbors, friends or family — usually 2 to 10 people — so you can stay connected, offer help and share companionship. It's your private, friendly community right where you live. You can also connect with close friends and family outside your neighborhood.",
        },
        {
          question: "How do I create my profile?",
          answer:
            "Easy! Just download the app, add your name, a photo if you like, and a few details about yourself. You can also include up to 2 emergency contacts — that's totally optional. You're always in control of what you share.",
        },
        {
          question: "How do I create or join a group?",
          answer:
            'Tap "Create Group" to start your own circle and invite trusted neighbors or friends. Or choose "Join Group" if someone sent you an invite. Once approved, you\'ll be part of your own little community — private and secure!',
        },
        {
          question: "Is the app free?",
          answer:
            "Yep, 100% free! NeighborConnector™ is powered by volunteers and supported by Community Care Housing, a nonprofit that helps build connected communities.",
        },
      ],
    },
    {
      category: "Safety & Privacy",
      items: [
        {
          question: "Who can see my information?",
          answer:
            "Only people in your circle can see what you share. Circles are invite-only, so no strangers or random neighbors can peek in.",
        },
        {
          question: "Do I have to share my address or phone number?",
          answer:
            "Nope! Share only what feels comfortable. Some people like adding contact info so others can reach them easily, but it's 100% your choice.",
        },
        {
          question: "How is my information protected?",
          answer:
            "All chats and check-ins are secure and encrypted. Your data isn't sold or shared — ever. Your privacy matters here.",
        },
        {
          question: "What if someone makes me uncomfortable?",
          answer:
            "You can block or report anyone right from the app. I'll walk you through it if you ever need help — you're always in control.",
        },
      ],
    },
    {
      category: "Communication & Features",
      items: [
        {
          question: "How do I message my circle?",
          answer:
            "Either with group chat or create or respond to a post for occasional help, appointments or rideshares, home help or help plan events, gatherings or activities. Just type your message or add a photo. It's as easy as texting a friend — but your chat or post stays private within your circle.",
        },
        {
          question: "What are \"Safety Check-Ins\"?",
          answer:
            "Safety Check-Ins let you mark yourself \"Safe\" daily so neighbors know you're okay. It's great for peace of mind — especially for older adults or folks living alone. But remember, call 911 for real emergencies!",
        },
        {
          question: "Can I join more than one circle?",
          answer:
            "Absolutely! You might have one for your street, one for family and one for friends. You can switch between them anytime.",
        },
        {
          question: "Can we plan events in the app?",
          answer:
            "Yes! Use your circle to plan coffee dates, dinners or neighborhood walks. It's all about making connection easy and fun.",
        },
      ],
    },
    {
      category: "Building Community",
      items: [
        {
          question: "What kinds of help can neighbors offer?",
          answer:
            "So many things! Checking mail, watering plants, giving rides, picking up groceries or just sharing a friendly hello. It's amazing what small acts can do.",
        },
        {
          question: "What if I don't know many neighbors yet?",
          answer:
            "That's okay! Start small — invite one or two people you trust. Great communities begin with just a couple of caring folks.",
        },
        {
          question: "I'm not very tech-savvy. Can you help me learn?",
          answer:
            "Of course! That's what I'm here for. Ask me anything — like how to send a message, add a photo or check in. I'll guide you step by step.",
        },
      ],
    },
    {
      category: "About the App",
      items: [
        {
          question: "Who created NeighborConnector™?",
          answer:
            "We're part of Community Care Housing — a nonprofit that helps people build stronger, friendlier communities.",
        },
        {
          question: "Why was NeighborConnector™ created?",
          answer:
            "Because loneliness is tough — and community makes it better. Or maybe you need a small favor from someone nearby. This app helps you connect naturally with people who care.",
        },
        {
          question: "How is this different from apps like Nextdoor or Facebook?",
          answer:
            "Great question! NeighborConnector™ keeps things small and personal — no public feeds, no noise and no ads. Just real connection.",
        },
        {
          question: "Can I use it if I live in an apartment or senior community?",
          answer:
            "Definitely! Circles work anywhere — from apartments to senior living or single-family homes. If you've got neighbors, friends or family, you can connect.",
        },
      ],
    },
    {
      category: "Help & Support",
      items: [
        {
          question: "How do I reach support if I get stuck?",
          answer:
            "You can message me here for help or email Info@CommunityCareHousing.org. If it's urgent, call 720-260-2600 (M). Someone from our team will gladly assist.",
        },
        {
          question: "Can I donate or sponsor the app?",
          answer:
            "Yes, thank you for asking! Donations help us address a range of needs, including expanding our app's reach and supporting shared housing and residents in need. Visit the website Community Care Housing.org or email Info@CommunityCareHousing.org to learn more.",
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let flatIndex = 0;

  return (
    <section className="relative w-full bg-white py-12 md:py-24" id="faq">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about NeighborConnector™ and how to
            get started building your circle today.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqData.map((category) => (
            <div key={category.category}>
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 pb-4 border-b-2 border-[#88CE00]">
                {category.category}
              </h3>

              {/* Accordion Items */}
              <div className="space-y-3">
                {category.items.map((item) => {
                  const itemIndex = flatIndex++;

                  return (
                    <div
                      key={itemIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
                    >
                      {/* Question Header */}
                      <button
                        onClick={() => toggleAccordion(itemIndex)}
                        className={`w-full px-6 py-4 md:py-5 flex items-center justify-between transition-colors duration-300 ${
                          openIndex === itemIndex
                            ? "bg-[#F4F5FC] border-b border-gray-200"
                            : "bg-white hover:bg-[#F9F9FC]"
                        }`}
                        aria-expanded={openIndex === itemIndex}
                      >
                        <h4 className="text-left text-base md:text-lg font-bold text-secondary">
                          {item.question}
                        </h4>
                        <svg
                          className={`w-6 h-6 text-primary transition-transform duration-300 shrink-0 ml-4 ${
                            openIndex === itemIndex ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </button>

                      {/* Answer Content */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          openIndex === itemIndex ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 py-4 md:py-5 bg-[#FAFBFF] border-t border-gray-200">
                          <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-linear-to-r from-[#07519B]/5 to-[#619908]/5 rounded-lg border border-[#88CE00]/30 text-center">
          <p className="text-base md:text-lg font-medium text-black/50 mb-4">
            Still have questions?
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-bold rounded-lg hover:bg-[#054073] transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
