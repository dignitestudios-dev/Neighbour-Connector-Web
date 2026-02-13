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
  disabled = false,
  pattern,
  errorMessage,
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
      disabled={disabled}
      pattern={pattern}
      className="h-14 px-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] placeholder:text-secondary text-black focus:outline-none disabled:opacity-50"
    />
    {errorMessage && (
      <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
    )}
  </label>
);

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
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
      disabled={disabled}
      className="min-h-30 p-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] placeholder:text-secondary text-black focus:outline-none disabled:opacity-50"
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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

    // Validate phone number
    if (name === "phone") {
      if (value && !new RegExp(/^\+?[0-9]{7,15}$/).test(value)) {
        setPhoneError("Invalid phone number. Use format: +1234567890 or 1234567890 (7-15 digits)");
      } else {
        setPhoneError("");
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Validate phone number if provided
    if (form.phone && !new RegExp(/^\+?[0-9]{7,15}$/).test(form.phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.dev.neighborconnector.org/news-letter/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            subject: "Contact Form Inquiry",
            message: form.message,
            location: form.location,
            phoneNumber: form.phone,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

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
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      console.error("Contact form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="relative w-full py-12 md:py-24" id="contact">
      {/* soft green glow */}
      <div className="absolute left-0 top-12 w-80 h-80 rounded-full bg-[#88CE00]/20 blur-3xl -z-10" />

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary">
              Let's Connect and Create Together!
            </h2>
            <h3 className="text-lg md:text-3xl font-semibold text-primary">
              Start Building Your Community Today
            </h3>

            <div className="text-black/50 space-y-3 md:space-y-4">
              <p className="text-sm md:text-lg">
                You can also join multiple "micro-circles" with friends, family,
                and coworkers. People from all backgrounds—like police chiefs,
                housing managers, city leaders, pastors, teachers and city
                planners—see the value in connecting with like-minded neighbors.
                When people reach out with kindness, good things happen.
              </p>

              <p className="text-sm md:text-lg">
                Anyone can feel lonely or isolated, especially as we age. With
                the NeighborConnector™ App, your circle of maybe 2–10 nearby
                households can bring friendship, well-being and a sense of
                community when you need it most.
              </p>

              <h4 className="text-base md:text-lg font-bold text-secondary mt-4">
                Sponsorships and Donations:
              </h4>
              <p className="text-sm md:text-base text-black/60">
                Visit the Community Care Housing website to donate or sponsor
                the NeighborConnector™ App or help develop more housing in
                planned communities for shared housing and senior housing.
              </p>
            </div>
          </div>

          {/* Right - Form panel */}
          <div className="relative">
            <div className="bg-[#EAF8D6] border border-[#E6F3C9] rounded-lg p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-extrabold text-secondary mb-4">
                Closer Than a Click
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {error && (
                  <div className="p-3 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    disabled={isLoading}
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    disabled={isLoading}
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
                  disabled={isLoading}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    pattern="^\+?[0-9]{7,15}$"
                    errorMessage={phoneError}
                    disabled={isLoading}
                  />
                  <label className="flex flex-col">
                    <span className="text-xs md:text-sm text-secondary mb-2">
                      Location <span className="text-red-500">*</span>
                    </span>
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="h-14 px-3 rounded-lg bg-[#F4F5FC] border border-[#88CE00] text-black focus:outline-none disabled:opacity-50"
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
                  disabled={isLoading}
                />

                <div className="flex items-center gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-5 h-5 rounded-sm border bg-[#F0F1EC] cursor-pointer disabled:opacity-50"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs md:text-sm text-black/60 cursor-pointer"
                  >
                    You agree to our privacy policy.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 md:py-4 bg-[#619908] text-white rounded-md font-medium hover:opacity-90 disabled:opacity-50 transition"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
