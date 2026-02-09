"use client";

import React, { useState } from "react";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <label className="flex flex-col">
    <span className="text-sm text-secondary mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </span>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="h-14 px-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] placeholder:text-secondary text-black focus:outline-none"
    />
  </label>
);

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <label className="flex flex-col">
    <span className="text-sm text-secondary mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </span>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="min-h-[120px] p-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] placeholder:text-secondary text-black focus:outline-none"
    />
  </label>
);

const SuccessModal = ({ isOpen, onClose }) => {
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
          Success!
        </h3>
        <p className="text-center text-black/60 mb-8">
          Thank you for reaching out! We've received your message and will get
          back to you soon. We're excited to connect with you!
        </p>

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

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    consent: false,
  });
  const [showModal, setShowModal] = useState(false);

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Log form data
    console.log("Contact form submitted", form);

    // Show success modal
    setShowModal(true);

    // Reset form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      consent: false,
    });
  }

  return (
    <section className="relative w-full py-24" id="contact">
      {/* soft green glow */}
      <div className="absolute left-0 top-12 w-80 h-80 rounded-full bg-[#88CE00]/20 blur-3xl -z-10" />

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 items-start">
        {/* Left content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold text-secondary">
            Let’s Connect and Create Together!
          </h2>
          <h3 className="text-2xl font-semibold text-primary">
            Start Building Your Community Today
          </h3>

          <div className="text-lg text-black/60 space-y-4">
            <p>
              You can also join multiple “micro-circles” with friends, family,
              and coworkers. People from all backgrounds—like police chiefs,
              housing managers, city leaders, pastors, teachers and city
              planners—see the value in connecting with like-minded neighbors.
              When people reach out with kindness, good things happen.
            </p>

            <p>
              Anyone can feel lonely or isolated, especially as we age. With the
              NeighborConnector™ App, your circle of maybe 2–10 nearby
              households can bring friendship, well-being and a sense of
              community when you need it most.
            </p>

            <h4 className="text-lg font-bold text-secondary mt-4">
              Sponsorships and Donations:
            </h4>
            <p className="text-black/60">
              Visit the Community Care Housing website to donate or sponsor the
              NeighborConnector™ App or help develop more housing in planned
              communities for shared housing and senior housing.
            </p>
          </div>
        </div>

        {/* Right - Form panel */}
        <div className="relative">
          <div className="bg-[#EAF8D6] border border-[#E6F3C9] rounded-lg p-8">
            <h4 className="text-2xl font-extrabold text-secondary mb-4">
              Closer Than a Click
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>

              <Input
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                <label className="flex flex-col">
                  <span className="text-sm text-secondary mb-2">
                    Location <span className="text-red-500">*</span>
                  </span>
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    className="h-14 px-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] text-black focus:outline-none"
                  >
                    <option value="">Select State</option>
                    {usStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <TextArea
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />

              <div className="flex items-center gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 rounded-sm border bg-[#F0F1EC] cursor-pointer"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-black/60 cursor-pointer"
                >
                  You agree to our privacy policy.{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#619908] text-white rounded-md font-medium hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
